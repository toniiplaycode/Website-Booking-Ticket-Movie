-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: booking_ticket_movie
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calendarreleases`
--

DROP TABLE IF EXISTS `calendarreleases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendarreleases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameCalendarRelease` varchar(255) NOT NULL,
  `cinemaRoomId` varchar(255) NOT NULL,
  `filmId` int NOT NULL,
  `showTimeStart` varchar(255) NOT NULL,
  `showTimeEnd` varchar(255) DEFAULT NULL,
  `dateWatch` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_calendarreleases_cinemarooms` (`cinemaRoomId`),
  KEY `fk_calendarreleases_films` (`filmId`),
  CONSTRAINT `fk_calendarreleases_cinemarooms` FOREIGN KEY (`cinemaRoomId`) REFERENCES `cinemarooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_calendarreleases_films` FOREIGN KEY (`filmId`) REFERENCES `films` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendarreleases`
--

LOCK TABLES `calendarreleases` WRITE;
/*!40000 ALTER TABLE `calendarreleases` DISABLE KEYS */;
INSERT INTO `calendarreleases` VALUES (26,'...','CT1-02',4,'19:00','20:39','25/4/2024','2024-04-21 21:55:46','2024-04-21 21:55:46'),(30,'...','CT1-02',1,'14:30','16:30','28/4/2024','2024-04-23 21:10:33','2024-04-23 21:10:33'),(31,'...','CT1-01',1,'12:30','14:30','28/4/2024','2024-04-23 21:10:33','2024-04-23 21:10:33'),(37,'...','CT1-01',5,'12:30','13:55','15/5/2024','2024-05-16 13:36:58','2024-05-16 13:36:58'),(38,'...','CT1-05',4,'09:15','10:54','18/5/2024','2024-05-16 13:39:23','2024-05-16 13:39:23'),(46,'...','CT1-02',183,'20:15','22:20','14/5/2024','2024-05-20 19:04:21','2024-05-20 19:04:21'),(48,'...','SG1-02',183,'14:15','16:20','18/5/2024','2024-05-20 19:05:14','2024-05-20 19:05:14');
/*!40000 ALTER TABLE `calendarreleases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinemarooms`
--

DROP TABLE IF EXISTS `cinemarooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinemarooms` (
  `id` varchar(255) NOT NULL,
  `CinemaId` varchar(255) NOT NULL,
  `nameCinemaRoom` varchar(255) NOT NULL,
  `numberOfSeats` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cinemarooms_cinemas` (`CinemaId`),
  CONSTRAINT `fk_cinemarooms_cinemas` FOREIGN KEY (`CinemaId`) REFERENCES `cinemas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemarooms`
--

LOCK TABLES `cinemarooms` WRITE;
/*!40000 ALTER TABLE `cinemarooms` DISABLE KEYS */;
INSERT INTO `cinemarooms` VALUES (' SG2-02','SG2',' SG2-02',50,'2024-05-20 06:56:09','2024-05-20 06:56:09'),('CT1-01','CT1','CT1-01',50,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('CT1-02','CT1','CT1-02',50,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('CT1-03','CT1','CT1-03',50,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('CT1-04','CT1','CT1-04',50,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('CT1-05','CT1','CT1-05',50,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('CT1-06','CT1','CT1-06',50,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('CT2-01','CT2','CT2-01',60,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('CT2-02','CT2','CT2-02',60,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('SG1-01','SG1','SG1-01',60,'2024-04-18 16:01:28','2024-04-18 16:01:28'),('SG1-02','SG1','SG1-02',50,'2024-05-20 06:55:56','2024-05-20 06:55:56'),('SG2-01','SG2','SG2-01',60,'2024-04-18 16:01:28','2024-04-18 16:01:28');
/*!40000 ALTER TABLE `cinemarooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinemas`
--

DROP TABLE IF EXISTS `cinemas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinemas` (
  `id` varchar(255) NOT NULL,
  `nameCinema` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemas`
--

LOCK TABLES `cinemas` WRITE;
/*!40000 ALTER TABLE `cinemas` DISABLE KEYS */;
INSERT INTO `cinemas` VALUES ('CT1','Rạp Cần Thơ 1','Nguyễn Văn Linh','2024-04-18 16:01:16','2024-04-18 16:01:16'),('CT2','Rạp Cần Thơ 2','Nguyễn Văn Cừ','2024-04-18 16:01:16','2024-05-20 06:54:19'),('SG1','Rạp Hồ Chí Minh 1','Cách Mạng Tháng 8','2024-04-18 16:01:16','2024-04-18 16:01:16'),('SG2','Rạp Hồ Chí Minh 2','Hai Bà Trưng','2024-04-18 16:01:16','2024-04-18 16:01:16');
/*!40000 ALTER TABLE `cinemas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coments`
--

DROP TABLE IF EXISTS `coments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `filmId` int NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_coments_users` (`userId`),
  KEY `fk_coments_films` (`filmId`),
  CONSTRAINT `fk_coments_films` FOREIGN KEY (`filmId`) REFERENCES `films` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_coments_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coments`
--

LOCK TABLES `coments` WRITE;
/*!40000 ALTER TABLE `coments` DISABLE KEYS */;
INSERT INTO `coments` VALUES (26,1,1,'phim đỉnh nhất từng xem !\n','2024-05-16 15:25:47','2024-05-16 15:25:47'),(27,2,1,'chưa coi nữa, nên không biết sao','2024-05-16 15:27:41','2024-05-16 15:27:41'),(30,1,175,'2 con này đánh nhau dữ lắm','2024-05-16 15:34:16','2024-05-16 15:34:16'),(73,4,1,'phim này đỉnh','2024-05-17 10:32:55','2024-05-17 10:42:38'),(74,4,1,'phim này giá oke không ta','2024-05-17 10:33:12','2024-05-17 10:39:12'),(85,4,1,'phim này dữ thiệt ae ơi','2024-05-17 13:44:01','2024-05-19 07:50:55'),(89,1,46,'gia re di','2024-05-18 16:59:19','2024-05-18 16:59:19'),(91,5,46,'phim oke quá thiệt\n','2024-05-19 20:23:33','2024-05-19 20:23:33');
/*!40000 ALTER TABLE `coments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `films`
--

DROP TABLE IF EXISTS `films`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `films` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameFilm` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `nameTypeFilm` varchar(255) NOT NULL,
  `time` int NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `actor` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `language` varchar(255) DEFAULT NULL,
  `releaseDate` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `u_films` (`nameFilm`),
  KEY `fk_films_typefilms` (`nameTypeFilm`),
  CONSTRAINT `fk_films_typefilms` FOREIGN KEY (`nameTypeFilm`) REFERENCES `typefilms` (`nameTypeFilm`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=187 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `films`
--

LOCK TABLES `films` WRITE;
/*!40000 ALTER TABLE `films` DISABLE KEYS */;
INSERT INTO `films` VALUES (1,'ONE PIECE FILM RED','Bối cảnh One Piece Film Red diễn ra ở hòn đảo âm nhạc Elegia, nơi diva nổi tiếng bậc nhất thế giới tên Uta thực hiện buổi biểu diễn trực tiếp đầu tiên trước công chúng. Uta đứng trên sân khấu với một ước mơ giản dị rằng ” Âm nhạc của tôi sẽ khiến cho thế giới hạnh phúc”. Đằng sau hình ảnh cô ca sĩ sở hữu giọng hát được đánh giá là ở “Đẳng cấp hoàn toàn khác” là một thân thế vô cùng bí ẩn được che giấu. Băng hải tặc Mũ Rơm và các fan khác của Uta từ nhiều thế lực khác nhau như hải tặc lẫn hải quân đều đã cùng tề tựu về buổi biểu diễn này. Biến cố bắt đầu ngay khi sự thật kinh hoàng được tiết lộ rằng Uta chính là “con gái của Shanks”. Luffy và Uta lần đầu tiên hội ngộ sau lần gặp gỡ vào 12 năm trước tại Làng Foosha.','Hoạt Hình',120,'Oda Eiichiro','Luffy và Nami','/images/bannerFilms/onepiecered.jpg','https://www.youtube.com/watch?v=7Ma1uab-bQM&t=6s&ab_channel=CGVCinemasVietnam',60000,'Tiếng Việt - Phụ đề Tiếng Anh','24/04/2024','2024-04-21 17:06:03','2024-05-19 20:19:15'),(2,'CÁI GIÁ CỦA HẠNH PHÚC','Mô tả film','Tâm Lý',115,'Nguyễn Ngọc Lâm','Xuân Lan, Thái Hoà, Lâm Thanh Nhã, Uyển Ân, Hữu Châu, Trâm Anh, Trương Thanh Long, Quang Minh, Bé Quyên,...','/images/bannerFilms/caigiacuahanhphuc.jpg','https://www.youtube.com/watch?v=79BznZKQwIQ&t=27s&ab_channel=CGVCinemasVietnam',60000,'Tiếng Việt - Phụ đề Tiếng Anh','24/04/2024','2024-04-21 17:06:03','2024-04-21 17:06:03'),(4,'MÙA HÈ CỦA LUCA','Mô tả Film','Hoạt Hình',99,'Enrico Casarosa','(Lồng tiếng): Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Saverio Raimondo, Maya Rudolph, Marco Barricelli, Jim Gaffigan, Sandy Martin','\\images\\films\\image_1715783956483.jpg','https://www.youtube.com/watch?v=FzV3gRevq4Q&t=23s&ab_channel=CGVCinemasVietnam',60000,'Tiếng Anh với phụ đề tiếng Việt, lồng tiếng','9/5/2024','2024-04-21 17:06:03','2024-05-15 21:39:16'),(5,'TU VIỆN MÁU','Mô tả Film','Kinh Dị',85,'Michael Mohan','Sydney Sweeney, Álvaro Morte, Simona Tabasco','/images/bannerFilms/tuvienmau.jpg','https://www.youtube.com/watch?v=5ff3iUauZko&t=17s&ab_channel=CGVCinemasVietnam',60000,'Tiếng Anh - Phụ đề Tiếng Việt','24/04/2024','2024-04-21 17:06:03','2024-04-21 17:06:03'),(46,'KUNG FU PANDA','Mô tả Film','Tâm Lý',123,'aaaa','aaaa','\\images\\films\\image_1715783975894.jpg','https://www.youtube.com/watch?v=6-HavW0nXtQ&ab_channel=CGVKreasi',123,'Phụ đề tiếng Việt','1/5/2024','2024-04-21 17:06:03','2024-05-15 21:45:09'),(175,'GODZILLA X KONG: ĐẾ CHẾ MỚI','Kong và Godzilla - hai sinh vật vĩ đại huyền thoại, hai kẻ thủ truyền kiếp sẽ cùng bắt tay thực thi một sứ mệnh chung mang tính sống còn để bảo vệ nhân loại, và trận chiến gắn kết chúng với loài người mãi mãi sẽ bắt đầu.','Hành Động',115,'Adam Wingard','Rebecca Hall; Brian Tyree Henry; Dan Stevens; Kaylee Hottle; Alex Ferns; Fala Chen,...','\\images\\films\\image_1715954672065.jpg','https://www.youtube.com/watch?v=azV9PMW5-Ro&ab_channel=ChillwithTaiki',80000,'Lồng tiếng Việt','20/5/2024','2024-05-16 09:23:14','2024-05-19 19:31:26'),(178,'LẬT MẶT 7: MỘT ĐIỀU ƯỚC','Một câu chuyện lần đầu được kể bằng tất cả tình yêu, và từ tất cả những hồi ức xao xuyến nhất của đấng sinh thành','Hành động',138,'Lý Hải',' Thanh Hiền, Trương Minh Cường, Đinh Y Nhung, Quách Ngọc Tuyên, Trâm Anh, Trần Kim Hải','\\images\\films\\image_1716122101549.jpg','https://www.youtube.com/watch?v=azV9PMW5-Ro&ab_channel=ChillwithTaiki',60000,'Phụ đề tiếng Việt','22/5/2024','2024-05-19 19:35:01','2024-05-19 19:35:58'),(179,'PANDA ĐẠI NÁO LÃNH ĐỊA VUA SƯ TỬ','Để giải cứu rồng con Tiểu Long đang bị bắt cóc sang châu Phi, Gấu trúc Bư quyết định ra đi tìm đường cứu bạn. Trên hành trình của mình, Bư đã khám phá ra một thế giới hoàn toàn xa lạ và phải đối mặt với những con hà mã đáng sợ, những con linh cẩu khôn ngoan và những con khỉ đột chiêu trò. Dựa vào trí thông minh của mình, Bư đã tìm đường băng xuyên châu Phi trước khi giải cứu Tiểu Long và cứu ngôi nhà trong rừng rậm của những người bạn mới trước âm mưu tàn ác của sư tử Malume.','Hoạt Hình',123,'KARSTEN KIILERICH','..','\\images\\films\\image_1716122426178.jpg','https://www.youtube.com/watch?v=nRilHm53XT4&ab_channel=CGVCinemasVietnam',70000,'Phụ đề tiếng Việt','22/5/2024','2024-05-19 19:40:26','2024-05-19 19:40:26'),(180,'EXHUMA: QUẬT MỘ TRÙNG MA','Hai pháp sư, một thầy phong thuỷ và một chuyên gia khâm liệm cùng hợp lực khai quật ngôi mộ bị nguyền rủa của một gia đình giàu có, nhằm cứu lấy sinh mạng hậu duệ cuối cùng trong dòng tộc. Bí mật hắc ám của tổ tiên được đánh thức.','Kinh Dị',150,' Jang Jae Hyun','Choi Min Sik, Yoo Hai Jin, Kim Go Eun, Lee Do Hyun,...','\\images\\films\\image_1716122549101.jpg','https://www.youtube.com/watch?v=nRilHm53XT4&ab_channel=CGVCinemasVietnam',80000,'Phụ đề tiếng Việt','20/5/2024','2024-05-19 19:42:29','2024-05-19 19:42:29'),(181,'MÈO MẬP MANG 10 MẠNG','Một chú mèo được nuông chiều tới mức sinh ra ích kỷ, không trân trọng những may mắn mà mình đang tận hưởng khi được Rose - một cô sinh viên tốt bụng cứu giúp và yêu thương. Nhưng tất cả sắp sửa thay đổi khi cậu ta bất cẩn làm mất đi 9 mạng sống của mình.','Hoạt Hình',167,' Christopher Jenkins','Mo Gilligan, Simone Ashley, Sophie Okonedo, Zayn Malik, Dylan Llewellyn, Jeremy Swift và Bill Nighy.','\\images\\films\\image_1716122679337.png','https://www.youtube.com/watch?v=nRilHm53XT4&ab_channel=CGVCinemasVietnam',65000,'Phụ đề tiếng Việt','23/5/2024','2024-05-19 19:44:39','2024-05-19 19:44:39'),(182,'Hành Tinh Khỉ: Vương Quốc Mới','Một vài thế hệ trong tương lai sau thời đại của Caesar, loài khỉ trở thành loài thống trị và sống hòa bình trong khi loài người bị suy yếu và sống trong bóng tối. Khi một nhà lãnh đạo khỉ độc tài mới xây dựng đế chế của mình, một chú khỉ trẻ bắt đầu một cuộc hành trình đầy gian nan, khiến anh ta phải nghi ngờ tất cả những gì anh ta biết về quá khứ và phải đưa ra những lựa chọn sẽ định hình tương lai cho cả loài khỉ và loài người.','Hành động',165,'Wes Ball','Owen Teague, Freya Allan, Kevin Durand, Peter Macon, and William H. Macy','\\images\\films\\image_1716122904590.jpg','https://www.youtube.com/watch?v=nRilHm53XT4&ab_channel=CGVCinemasVietnam',75000,'Phụ đề tiếng Việt','20/5/2024','2024-05-19 19:48:24','2024-05-19 19:48:24'),(183,'B4S – TRƯỚC GIỜ “YÊU”','B4S sẽ bắt đầu bằng một đêm “đáng nhớ” của hai nhóm bạn thân tại một quán bar. Và sau đó, khán giả sẽ được theo dõi câu chuyện tình yêu của mỗi người trong “đêm định mệnh” đó.','Lãng mạng',125,'Tùng Leo, Michael Thái, Huỳnh Anh Duy','Jun Vũ, Khánh Vân, Khazsak, Tôn Kinh Lâm, Tùng, Việt Hưng, Vinh Râu,…','\\images\\films\\image_1716164991327.jpg','https://www.youtube.com/watch?v=GHmq0amBZPg&ab_channel=CGVCinemasVietnam',60000,'Phụ đề tiếng Việt','21/5/2024','2024-05-20 07:29:51','2024-05-20 07:29:51');
/*!40000 ALTER TABLE `films` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethods`
--

DROP TABLE IF EXISTS `paymentmethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentmethods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `namePaymentMethod` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`,`namePaymentMethod`),
  UNIQUE KEY `namePaymentMethod` (`namePaymentMethod`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethods`
--

LOCK TABLES `paymentmethods` WRITE;
/*!40000 ALTER TABLE `paymentmethods` DISABLE KEYS */;
INSERT INTO `paymentmethods` VALUES (1,'MOMO','2024-04-21 21:46:49','2024-04-21 21:46:49'),(2,'MASTER CARD','2024-04-21 21:46:49','2024-04-21 21:46:49'),(3,'VN PAY','2024-04-21 21:46:49','2024-04-21 21:46:49'),(4,'ZALO PAY','2024-04-21 21:46:49','2024-04-21 21:46:49');
/*!40000 ALTER TABLE `paymentmethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` varchar(255) NOT NULL,
  `nameRole` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameRole` (`nameRole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES ('R1','Admin','2024-04-18 15:50:38','2024-04-18 15:50:38'),('R2','Staff','2024-04-18 15:50:38','2024-04-18 15:50:38'),('R3','Client','2024-04-18 15:50:38','2024-04-18 15:50:38');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('create-calendarRelease.js'),('create-cinema.js'),('create-cinemaRoom.js'),('create-conment.js'),('create-film.js'),('create-paymentMethod.js'),('create-role.js'),('create-ticket.js'),('create-typeFilm.js'),('create-user.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `calendarReleaseId` int NOT NULL,
  `seat` int NOT NULL,
  `total` float NOT NULL,
  `namePaymentMethod` varchar(255) NOT NULL,
  `nameStatus` varchar(255) NOT NULL DEFAULT 'Booked',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tickets_calendarreleases` (`calendarReleaseId`),
  KEY `fk_tickets_users` (`userId`),
  KEY `fk_tickets_paymentmethods` (`namePaymentMethod`),
  CONSTRAINT `fk_tickets_calendarreleases` FOREIGN KEY (`calendarReleaseId`) REFERENCES `calendarreleases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tickets_paymentmethods` FOREIGN KEY (`namePaymentMethod`) REFERENCES `paymentmethods` (`namePaymentMethod`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tickets_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (34,1,31,16,60000,'ZALO PAY','Expired','2024-05-08 13:32:23','2024-05-12 22:23:21'),(35,1,31,15,60000,'ZALO PAY','Expired','2024-05-08 13:32:23','2024-05-12 22:23:21'),(39,1,26,41,60000,'MOMO','Expired','2024-05-09 14:29:15','2024-05-12 22:23:21'),(40,1,26,23,60000,'MOMO','Expired','2024-05-09 14:29:15','2024-05-12 22:23:21'),(41,1,26,44,60000,'MOMO','Expired','2024-05-09 14:29:15','2024-05-12 22:23:21'),(42,1,26,1,60000,'MOMO','Expired','2024-05-09 14:30:34','2024-05-12 22:23:21'),(43,1,26,2,60000,'MOMO','Expired','2024-05-09 14:30:34','2024-05-12 22:23:21'),(44,1,26,3,60000,'MOMO','Expired','2024-05-09 14:30:34','2024-05-12 22:23:21'),(59,4,31,38,60000,'ZALO PAY','Expired','2024-05-15 21:41:27','2024-05-15 21:42:51'),(60,4,31,37,60000,'ZALO PAY','Expired','2024-05-15 21:41:27','2024-05-16 13:13:37'),(63,1,37,1,60000,'MASTER CARD','Booked','2024-05-16 13:39:36','2024-05-16 13:39:36'),(64,1,37,2,60000,'MASTER CARD','Watched','2024-05-16 13:39:36','2024-05-18 10:08:42'),(65,4,37,8,60000,'MASTER CARD','Watched','2024-05-16 13:40:10','2024-05-20 08:22:41'),(66,4,37,7,60000,'MASTER CARD','Watched','2024-05-16 13:40:10','2024-05-20 08:22:42'),(67,1,31,9,60000,'ZALO PAY','Booked','2024-05-16 15:44:14','2024-05-16 15:44:14'),(68,1,31,50,60000,'ZALO PAY','Watched','2024-05-16 15:44:14','2024-05-17 20:44:24'),(77,2,38,29,60000,'ZALO PAY','Booked','2024-05-18 10:29:21','2024-05-18 10:29:21'),(78,2,38,30,60000,'ZALO PAY','Booked','2024-05-18 10:29:21','2024-05-18 10:29:21'),(79,2,26,6,60000,'MASTER CARD','Booked','2024-05-18 10:40:11','2024-05-18 10:40:11'),(80,2,37,18,60000,'ZALO PAY','Watched','2024-05-18 10:40:41','2024-05-18 11:17:13'),(81,2,37,9,60000,'VN PAY','Booked','2024-05-18 10:42:45','2024-05-18 10:42:45'),(83,2,30,47,60000,'VN PAY','Booked','2024-05-18 10:47:39','2024-05-18 10:47:39'),(85,1,31,27,60000,'VN PAY','Watched','2024-05-18 10:56:59','2024-05-19 07:52:08'),(88,5,31,19,60000,'ZALO PAY','Booked','2024-05-18 11:09:50','2024-05-18 11:09:50'),(89,5,31,18,60000,'ZALO PAY','Booked','2024-05-18 11:09:50','2024-05-18 11:09:50'),(96,4,30,49,60000,'MASTER CARD','Booked','2024-05-19 07:50:09','2024-05-19 07:50:09'),(97,4,30,50,60000,'MASTER CARD','Booked','2024-05-19 07:50:09','2024-05-19 07:50:09'),(98,1,38,19,60000,'ZALO PAY','Booked','2024-05-19 16:41:18','2024-05-19 16:41:18'),(99,1,38,18,60000,'ZALO PAY','Booked','2024-05-19 16:41:18','2024-05-19 16:41:18');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typefilms`
--

DROP TABLE IF EXISTS `typefilms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typefilms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameTypeFilm` varchar(255) NOT NULL,
  `descriptionType` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`,`nameTypeFilm`),
  UNIQUE KEY `nameTypeFilm` (`nameTypeFilm`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typefilms`
--

LOCK TABLES `typefilms` WRITE;
/*!40000 ALTER TABLE `typefilms` DISABLE KEYS */;
INSERT INTO `typefilms` VALUES (1,'Hành Động','Phim dành cho người đủ 16+','2024-04-21 17:04:27','2024-05-20 07:17:36'),(2,'Hoạt Hình','Có thể xem ở mọi độ tuổi','2024-04-21 17:04:47','2024-05-20 07:17:08'),(3,'Tâm Lý','Có thể xem ở mọi độ tuổi','2024-04-21 17:04:47','2024-05-20 07:17:11'),(6,'Kinh Dị','Phim dành cho người đủ 18+','2024-04-21 17:04:47','2024-05-20 07:18:00'),(8,'Trinh thám','Có thể xem ở mọi độ tuổi','2024-04-21 17:09:11','2024-05-20 07:17:43'),(28,'Khoa học viễn tưởng','Có thể xem ở mọi độ tuổi','2024-05-20 07:18:49','2024-05-20 07:18:55'),(29,'Hài hước','Có thể xem ở mọi độ tuổi','2024-05-20 07:19:12','2024-05-20 07:19:12'),(30,'Cổ trang','Có thể xem ở mọi độ tuổi','2024-05-20 07:19:29','2024-05-20 07:19:29'),(31,'Phiêu lưu','Có thể xem ở mọi độ tuổi','2024-05-20 07:19:49','2024-05-20 07:19:49'),(32,'Lãng mạng','\nPhim dành cho người đủ 18+','2024-05-20 07:20:14','2024-05-20 07:20:14');
/*!40000 ALTER TABLE `typefilms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) NOT NULL DEFAULT 'R3',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_user_role` (`roleId`),
  CONSTRAINT `fk_user_role` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@gmail.com','$2a$10$/ebeIEWrTcA18vhMH7EOoe7u1NVrGpbE507zGqeQW2qt1a2rAfLZ.','Khánh Trân','Huỳnh','Kien Giang','0123123123','R1','2024-04-18 17:27:02','2024-05-17 21:04:58'),(2,'staff@gmail.com','$2a$10$JYn.LkQxuco0MSD01siFBOInkcgn.d7rt12cbAdH.1P7vLS7e9Mhq','Khánh Trân','Huỳnh','Kien Giang','0123123123','R2','2024-04-18 17:27:02','2024-05-19 07:40:16'),(4,'test2@gmail.com','$2a$10$SGQVcXBz7XS83EvvVn79DellJoZqSJ1LQrK9t4mMy87oRVaOQIEUC','Phan Thanh','Trí ','Trà Vinh','0868333224','R3','2024-04-18 15:56:24','2024-05-19 07:50:23'),(5,'test3@gmail.com','$2a$10$we0ZsCH611Xy39ErwgmGa.lL.3l9sCN13Zzb215wEe0vAIi6kFffy','Toàn','Lê Thanh ','Cần Thơ','08123123123','R3','2024-04-18 15:56:56','2024-05-20 06:44:49'),(61,'staff1@gmail.com','$2a$10$ApC6L69NDA6Ws/tukRnt1OmoG6ekMaFWHNXdf5/DP887o04Hym41G','Tỷ','Huỳnh Ngọc','Cà Mau','0991231231','R2','2024-05-20 08:47:54','2024-05-20 08:48:18'),(62,'chithanh@gmail.com','$2a$10$ApC6L69NDA6Ws/tukRnt1OmoG6ekMaFWHNXdf5/DP887o04Hym41G','Chí Thành','Đặng Lâm','Châu Đốc','08823234411','R3','2024-05-20 08:49:30','2024-05-20 08:50:21'),(63,'minhhung@gmail.com','$2a$10$ApC6L69NDA6Ws/tukRnt1OmoG6ekMaFWHNXdf5/DP887o04Hym41G','Hưng','Lê Minh','Hồ Chí Minh','0773142123','R3','2024-05-20 08:49:58','2024-05-20 08:49:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'booking_ticket_movie'
--

--
-- Dumping routines for database 'booking_ticket_movie'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-20 20:18:40
