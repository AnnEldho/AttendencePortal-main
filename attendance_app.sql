-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2025 at 03:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `period_no` tinyint(4) NOT NULL,
  `status` enum('present','absent') NOT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `student_id`, `class_id`, `date`, `period_no`, `status`, `subject_id`, `teacher_id`) VALUES
(1, 1, 1, '2025-12-12', 1, 'present', 4, NULL),
(2, 2, 1, '2025-12-12', 1, 'present', 4, NULL),
(5, 2, 1, '2025-12-12', 2, 'absent', 3, NULL),
(6, 1, 1, '2025-12-02', 4, 'present', 4, NULL),
(7, 2, 1, '2025-12-02', 4, 'present', 4, NULL),
(10, 1, 1, '2025-12-04', 1, 'present', 4, NULL),
(11, 2, 1, '2025-12-04', 1, 'absent', 4, NULL),
(12, 1, 1, '2025-12-05', 1, 'present', 4, NULL),
(13, 2, 1, '2025-12-05', 1, 'present', 4, NULL),
(14, 1, 1, '2025-12-09', 4, 'present', 4, NULL),
(15, 2, 1, '2025-12-09', 4, 'absent', 4, NULL),
(16, 1, 1, '2025-12-11', 1, 'present', 4, NULL),
(17, 2, 1, '2025-12-11', 1, 'present', 4, NULL),
(18, 1, 1, '2025-12-01', 2, 'present', 6, NULL),
(19, 1, 1, '2025-12-01', 3, 'present', 6, NULL),
(20, 1, 1, '2025-12-01', 4, 'present', 28, NULL),
(21, 2, 1, '2025-12-01', 2, 'present', 6, NULL),
(22, 2, 1, '2025-12-01', 3, 'present', 6, NULL),
(23, 2, 1, '2025-12-01', 4, 'present', 28, NULL),
(24, 1, 1, '2025-12-02', 1, 'absent', 28, NULL),
(26, 2, 1, '2025-12-02', 1, 'present', 28, NULL),
(28, 1, 1, '2025-12-03', 2, 'present', 6, NULL),
(29, 1, 1, '2025-12-03', 3, 'present', 6, NULL),
(30, 1, 1, '2025-12-03', 4, 'present', 28, NULL),
(31, 2, 1, '2025-12-03', 2, 'absent', 6, NULL),
(32, 2, 1, '2025-12-03', 3, 'absent', 6, NULL),
(33, 2, 1, '2025-12-03', 4, 'absent', 28, NULL),
(35, 1, 1, '2025-12-04', 4, 'present', 7, NULL),
(37, 2, 1, '2025-12-04', 4, 'present', 7, NULL),
(38, 1, 1, '2025-12-08', 2, 'present', 6, NULL),
(39, 1, 1, '2025-12-08', 3, 'present', 6, NULL),
(40, 1, 1, '2025-12-08', 4, 'present', 28, NULL),
(41, 2, 1, '2025-12-08', 2, 'present', 6, NULL),
(42, 2, 1, '2025-12-08', 3, 'present', 6, NULL),
(43, 2, 1, '2025-12-08', 4, 'present', 28, NULL),
(44, 1, 1, '2025-12-09', 1, 'present', 28, NULL),
(46, 2, 1, '2025-12-09', 1, 'absent', 28, NULL),
(52, 1, 1, '2025-12-10', 2, 'present', 6, NULL),
(53, 1, 1, '2025-12-10', 3, 'present', 6, NULL),
(54, 1, 1, '2025-12-10', 4, 'present', 28, NULL),
(55, 2, 1, '2025-12-10', 2, 'present', 6, NULL),
(56, 2, 1, '2025-12-10', 3, 'present', 6, NULL),
(57, 2, 1, '2025-12-10', 4, 'present', 28, NULL),
(59, 1, 1, '2025-12-11', 4, 'present', 7, NULL),
(61, 2, 1, '2025-12-11', 4, 'present', 7, NULL),
(62, 3, 2, '2025-12-12', 1, 'present', NULL, NULL),
(63, 3, 2, '2025-12-12', 2, 'present', NULL, NULL),
(64, 3, 2, '2025-12-12', 3, 'present', NULL, NULL),
(65, 3, 2, '2025-12-12', 4, 'present', NULL, NULL),
(66, 3, 2, '2025-12-12', 5, 'present', NULL, NULL),
(67, 4, 2, '2025-12-12', 1, 'present', NULL, NULL),
(68, 4, 2, '2025-12-12', 2, 'present', NULL, NULL),
(69, 4, 2, '2025-12-12', 3, 'present', NULL, NULL),
(70, 4, 2, '2025-12-12', 4, 'present', NULL, NULL),
(71, 4, 2, '2025-12-12', 5, 'absent', NULL, NULL),
(72, 2, 1, '2025-12-15', 1, 'present', NULL, NULL),
(73, 1, 1, '2025-12-15', 1, 'present', NULL, NULL),
(76, 5, 1, '2025-12-15', 1, 'present', NULL, NULL),
(78, 1, 1, '2025-12-15', 5, 'absent', NULL, NULL),
(84, 1, 1, '2025-12-01', 5, 'absent', NULL, NULL),
(90, 1, 1, '2025-12-04', 5, 'present', NULL, NULL),
(94, 1, 1, '2025-12-05', 5, 'present', NULL, NULL),
(97, 1, 1, '2025-12-02', 2, 'present', NULL, NULL),
(98, 1, 1, '2025-12-02', 3, 'present', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `name`) VALUES
(1, 'S1 MCA'),
(2, 'S2 MCA'),
(6, 'S3 MCA');

-- --------------------------------------------------------

--
-- Table structure for table `periods`
--

CREATE TABLE `periods` (
  `id` int(11) NOT NULL,
  `period_no` tinyint(4) NOT NULL,
  `label` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `periods`
--

INSERT INTO `periods` (`id`, `period_no`, `label`) VALUES
(1, 1, 'Hour 1'),
(2, 2, 'Hour 2'),
(3, 3, 'Hour 3'),
(4, 4, 'Hour 4'),
(5, 5, 'Hour 5');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `admission_no` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `class_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `admission_no`, `name`, `password`, `class_id`) VALUES
(1, 'M25CA024', 'Ann Mary Eldho', '1234', 1),
(2, 'M25CA023', 'Anagha S Nair', '1234', 1),
(3, 'M25CA001', 'Abhijith', '1234', 2),
(4, 'M25CA002', 'Abhinav', '1234', 2),
(5, 'M25CA003', 'Abhirami', 'abhi', 1);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `code`) VALUES
(1, 'Advanced Software Engineering', 'ASE'),
(2, 'Mathematics', 'MAT'),
(3, 'Web Lab', 'WLAB'),
(4, 'Digital', 'DIG'),
(6, 'DS Lab', 'DSLAB'),
(7, 'Research Methodology', 'RMP'),
(27, 'Programming Lab', 'PLAB'),
(28, 'Advanced Data Structures', 'ADS');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `emp_id` varchar(50) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `emp_id`, `name`, `password`) VALUES
(1, 'T001', 'Prof. Nisha Markose', '1234'),
(2, 'T002', 'Manu John', '1234'),
(3, 'T003', 'Prof Shinu S Kurian', '1234'),
(4, 'T004', 'Prof. Sibu Skaria', '1234'),
(5, 'T005', 'Sonia Abraham', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `timetable`
--

CREATE TABLE `timetable` (
  `id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `day_of_week` varchar(20) NOT NULL,
  `period_no` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `teacher_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `timetable`
--

INSERT INTO `timetable` (`id`, `class_id`, `day_of_week`, `period_no`, `subject_id`, `teacher_id`) VALUES
(1, 1, 'Monday', 1, 2, 3),
(2, 1, 'Monday', 2, 6, 4),
(3, 1, 'Monday', 3, 6, 4),
(4, 1, 'Monday', 4, 28, 4),
(5, 1, 'Monday', 5, 1, 2),
(6, 1, 'Tuesday', 1, 28, 4),
(7, 1, 'Tuesday', 2, 27, 5),
(8, 1, 'Tuesday', 3, 27, 5),
(10, 1, 'Tuesday', 5, 2, 3),
(11, 1, 'Wednesday', 1, 2, 3),
(12, 1, 'Wednesday', 2, 6, 4),
(13, 1, 'Wednesday', 3, 6, 4),
(14, 1, 'Wednesday', 4, 28, 4),
(15, 1, 'Wednesday', 5, 3, 3),
(16, 1, 'Thursday', 1, 4, 1),
(17, 1, 'Thursday', 2, 27, 5),
(18, 1, 'Thursday', 3, 27, 5),
(19, 1, 'Thursday', 4, 7, 4),
(20, 1, 'Thursday', 5, 1, 2),
(21, 1, 'Friday', 1, 4, 1),
(22, 1, 'Friday', 2, 3, 3),
(23, 1, 'Friday', 3, 3, 3),
(24, 1, 'Friday', 5, 1, 2),
(25, 1, 'Tuesday', 4, 4, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uniq_att` (`student_id`,`date`,`period_no`),
  ADD KEY `attendance_ibfk_2` (`class_id`),
  ADD KEY `fk_att_subject` (`subject_id`),
  ADD KEY `fk_att_teacher` (`teacher_id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `periods`
--
ALTER TABLE `periods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admission_no` (`admission_no`),
  ADD KEY `fk_students_class` (`class_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `emp_id` (`emp_id`);

--
-- Indexes for table `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_slot` (`class_id`,`day_of_week`,`period_no`),
  ADD KEY `subject_id` (`subject_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `periods`
--
ALTER TABLE `periods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `timetable`
--
ALTER TABLE `timetable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`),
  ADD CONSTRAINT `fk_att_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  ADD CONSTRAINT `fk_att_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`);

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `fk_students_class` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`);

--
-- Constraints for table `timetable`
--
ALTER TABLE `timetable`
  ADD CONSTRAINT `timetable_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `timetable_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
