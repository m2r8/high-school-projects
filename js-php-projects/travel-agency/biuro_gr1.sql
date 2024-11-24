-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Mar 2023, 18:22
-- Wersja serwera: 10.4.17-MariaDB
-- Wersja PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `biuro_gr1`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `offer`
--

CREATE TABLE `offer` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `destination` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `offer`
--

INSERT INTO `offer` (`id`, `title`, `price`, `destination`) VALUES
(1, 'Wycieczka_do_fabryki_czekolady', '12.00', 'Trójmiasto'),
(2, 'Wycieczka_na_Kremówki', '24.00', 'Wadowice'),
(3, 'Wycieczka_do_elelektrowni', '420.00', 'Bełchatów'),
(4, 'Wycieczka_na_pączusie', '6.00', 'Wejherowo');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `offer_id` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `offer_id`, `date`) VALUES
(1, 1, 1, '2023-03-13 16:08:44'),
(2, 2, 2, '2023-03-13 17:37:01'),
(3, 2, 5, '0000-00-00 00:00:00'),
(9, 3, 2, '0000-00-00 00:00:00'),
(8, 3, 1, '0000-00-00 00:00:00'),
(7, 3, 0, '0000-00-00 00:00:00'),
(10, 3, 1, '0000-00-00 00:00:00'),
(11, 3, 1, '0000-00-00 00:00:00'),
(12, 3, 2, '0000-00-00 00:00:00'),
(43, 5, 4, '2023-03-14 00:15:08'),
(14, 3, 1, '0000-00-00 00:00:00'),
(42, 5, 3, '2023-03-14 00:15:07'),
(41, 5, 2, '2023-03-14 00:15:05'),
(40, 5, 1, '2023-03-14 00:15:01'),
(39, 5, 1, '2023-03-14 00:12:34'),
(38, 5, 0, '2023-03-14 00:12:32'),
(37, 5, 1, '2023-03-14 00:10:50'),
(36, 3, 2, '2023-03-14 00:07:47'),
(35, 3, 1, '2023-03-14 00:07:45'),
(34, 3, 1, '2023-03-14 00:07:13'),
(33, 3, 2, NULL),
(32, 3, 1, NULL),
(31, 3, 1, NULL),
(30, 3, 1, '0000-00-00 00:00:00'),
(29, 3, 1, '0000-00-00 00:00:00'),
(44, 5, 4, '2023-03-14 00:15:50'),
(45, 5, 4, '2023-03-14 00:15:51'),
(46, 5, 4, '2023-03-14 00:17:21'),
(47, 5, 2, '2023-03-14 00:17:29'),
(48, 5, 4, '2023-03-14 00:17:33'),
(49, 5, 1, '2023-03-14 00:22:25'),
(50, 5, 1, '2023-03-14 00:23:13'),
(51, 5, 2, '2023-03-14 00:23:15'),
(52, 5, 4, '2023-03-14 00:24:42'),
(53, 5, 3, '2023-03-14 00:24:45'),
(54, 5, 4, '2023-03-14 00:34:00'),
(55, 5, 3, '2023-03-14 00:34:02'),
(56, 5, 4, '2023-03-14 00:34:05'),
(57, 5, 1, '2023-03-14 01:35:07'),
(58, 5, 2, '2023-03-14 01:35:10'),
(59, 5, 4, '2023-03-14 01:35:12'),
(60, 5, 4, '2023-03-14 01:37:55'),
(61, 5, 4, '2023-03-14 01:37:59'),
(62, 5, 3, '2023-03-14 12:03:43'),
(63, 5, 0, '2023-03-14 12:04:05'),
(64, 5, 0, '2023-03-14 12:04:19'),
(65, 5, 1, '2023-03-14 12:04:21'),
(66, 5, 0, '2023-03-14 12:04:30'),
(67, 5, 3, '2023-03-14 12:04:33'),
(68, 5, 2, '2023-03-14 12:04:35'),
(69, 0, 0, '2023-03-14 12:04:46'),
(70, 5, 2, '2023-03-14 16:07:01'),
(71, 3, 4, '2023-03-14 16:16:31'),
(72, 3, 0, '2023-03-14 16:16:43'),
(73, 3, 2, '2023-03-14 16:16:53'),
(74, 3, 1, '2023-03-14 16:16:58'),
(75, 3, 2, '2023-03-14 16:17:00'),
(76, 3, 0, '2023-03-14 16:17:13'),
(77, 3, 2, '2023-03-14 16:17:14'),
(78, 0, 4, '2023-03-14 22:32:07'),
(79, 0, 3, '2023-03-14 22:32:12'),
(80, 0, 1, '2023-03-14 22:32:42'),
(81, 0, 2, '2023-03-14 22:35:04'),
(82, 0, 4, '2023-03-14 22:35:06'),
(83, 0, 3, '2023-03-14 22:36:47'),
(84, 0, 4, '2023-03-14 22:37:54'),
(85, 0, 4, '2023-03-14 22:40:22'),
(86, 0, 1, '2023-03-14 22:43:55'),
(87, 0, 2, '2023-03-14 22:43:58'),
(88, 0, 4, '2023-03-14 23:13:46'),
(89, 0, 3, '2023-03-14 23:13:48'),
(90, 0, 1, '2023-03-15 12:53:08'),
(91, 0, 4, '2023-03-15 13:48:17'),
(92, 0, 4, '2023-03-15 16:00:08'),
(93, 0, 4, '2023-03-15 16:00:11');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `funds` decimal(7,2) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `email`, `funds`, `isAdmin`) VALUES
(0, 'admin', '$2a$12$kuopCyT/zpCdqgMRVGXY7evjKwalzEMuANZif69jKvq1L63ZBfOc6', 'admin@biuro.pl', '8561.00', 1),
(2, 'pracownik2', 'zaq1@WSX', '', NULL, 0),
(3, 'pracownik_gr1', '$2a$12$wx9OJmMuP9G2F9dttgWVGuxkED/VcxS0r8bIIpogTWn4NrsHmWuXC', '123', '3261.00', 0),
(5, 'adminn', 'D8ED7457A3464C783A4485C5173C8ADCE2210C1A', '123123', '6452.00', 1),
(6, 'jdjd', '$2a$12$cGAU1KJVvdwQCDkHRg97FORLB1L0TJsK/PcoXImPvkrMYJHnGs3aS', 'fds', NULL, 0),
(7, 'admin1', '1234', 'gfdgfd', '10000.00', 0),
(8, 'pracownik5', '$2a$12$mSg42hPTn8E2oICD48IpUOKM5c96FhEpbccCgkWV5tA6Ha8EUiyHa', 'dsadsa', NULL, 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk` (`user_id`),
  ADD KEY `offer_fk` (`offer_id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `offer`
--
ALTER TABLE `offer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
