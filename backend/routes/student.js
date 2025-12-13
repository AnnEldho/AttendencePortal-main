const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/attendance/:id', async (req, res) => {
  const { id } = req.params;
  const { from, to } = req.query;
  let sql =
    'SELECT date,status FROM attendance WHERE student_id = ?';
  const params = [id];
  if (from) {
    sql += ' AND date >= ?';
    params.push(from);
  }
  if (to) {
    sql += ' AND date <= ?';
    params.push(to);
  }
  sql += ' ORDER BY date DESC';
  try {
    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (e) {
    res.status(500).json({ message: 'Error' });
  }
});

router.put('/password/:id', async (req, res) => {
  const { id } = req.params;
  const { new_password } = req.body;
  try {
    await pool.query(
      'UPDATE students SET password = ? WHERE id = ?',
      [new_password, id]
    );
    res.json({ message: 'Password changed' });
  } catch (e) {
    res.status(500).json({ message: 'Error' });
  }
});

router.get('/attendance-periodwise/:id', async (req, res) => {
  const { id } = req.params; // student_id
  const { from, to } = req.query;

  let sql =
    'SELECT a.date, a.period_no, a.status, p.label ' +
    'FROM attendance a ' +
    'JOIN periods p ON a.period_no = p.period_no ' +
    'WHERE a.student_id = ?';
  const params = [id];

  if (from) {
    sql += ' AND a.date >= ?';
    params.push(from);
  }
  if (to) {
    sql += ' AND a.date <= ?';
    params.push(to);
  }

  sql += ' ORDER BY a.date, a.period_no';

  try {
    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (e) {
    res.status(500).json({ message: 'Error' });
  }
});

router.get('/periods', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT period_no, label FROM periods ORDER BY period_no'
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ message: 'Error' });
  }
});

// Return per-subject attendance stats for a student
router.get('/subject-stats/:id', async (req, res) => {
  const { id } = req.params; // student id
  const { from, to } = req.query;
  try {
    // get student's class
    const [[stu]] = await pool.query('SELECT class_id FROM students WHERE id = ?', [id]);
    if (!stu) return res.status(404).json({ message: 'Student not found' });
    const classId = stu.class_id;

    let sql = `SELECT IFNULL(s.id, 0) AS subject_id, IFNULL(s.name, 'Unassigned') AS subject,
      COUNT(*) AS total, SUM(a.status = 'present') AS present
      FROM attendance a
      JOIN timetable t ON t.class_id = ? AND t.period_no = a.period_no AND t.day_of_week = DAYNAME(a.date)
      LEFT JOIN subjects s ON s.id = t.subject_id
      WHERE a.student_id = ?`;
    const params = [classId, id];
    if (from) {
      sql += ' AND a.date >= ?';
      params.push(from);
    }
    if (to) {
      sql += ' AND a.date <= ?';
      params.push(to);
    }
    sql += ' GROUP BY subject_id, subject ORDER BY subject';

    const [rows] = await pool.query(sql, params);
    // compute percentage
    const result = rows.map(r => ({
      subject_id: r.subject_id,
      subject: r.subject,
      total: Number(r.total),
      present: Number(r.present),
      percentage: r.total ? Math.round((r.present / r.total) * 100) : 0
    }));
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error' });
  }
});


module.exports = router;
