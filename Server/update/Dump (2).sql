-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `CommentId` varchar(255) NOT NULL,
  `CommentContent` varchar(255) DEFAULT NULL,
  `CommentatorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `CommentDate` datetime(6) DEFAULT NULL,
  `ThumberNumber` int DEFAULT NULL,
  `VideoId` varchar(255) DEFAULT NULL,
  `commentcol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CommentId`),
  KEY `CommentatorId` (`CommentatorId`),
  CONSTRAINT `CommentatorId` FOREIGN KEY (`CommentatorId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES ('1','Hello','a79826a8-7168-11eb-a09f-f0795907d9ec',NULL,NULL,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('2','again','a79826a8-7168-11eb-a09f-f0795907d9ec',NULL,NULL,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('42359261-73c8-11eb-a229-f0795907d9ec','去物业','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('45bb59b3-739c-11eb-a229-f0795907d9ec','hahshsh','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('4b4a2d14-73c9-11eb-a229-f0795907d9ec','二分','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('4dfd88ae-739c-11eb-a229-f0795907d9ec','jsjsjjdjdkdk','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('570b0713-73c9-11eb-a229-f0795907d9ec','24566789','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('5a1e2959-73c8-11eb-a229-f0795907d9ec','178283','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('5c88ae98-739c-11eb-a229-f0795907d9ec','shhsjdjdnd','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('5dc8252d-73c8-11eb-a229-f0795907d9ec','信息的','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('636a5f00-7341-11eb-a229-f0795907d9ec','fdsfdsafdsa','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('63fe4763-739c-11eb-a229-f0795907d9ec','ssjjsndnd','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('6518cb96-73c8-11eb-a229-f0795907d9ec','？bb','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('6dda010f-7341-11eb-a229-f0795907d9ec','123243423423','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('89e358b5-71a4-11eb-a09f-f0795907d9ec','dghhj','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('8ef682af-73c8-11eb-a229-f0795907d9ec','呃呃呃','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('92afdbec-73c7-11eb-a229-f0795907d9ec','1334','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('99112b5c-73c7-11eb-a229-f0795907d9ec','23455','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('a3d43345-7343-11eb-a229-f0795907d9ec','12221321321','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('ae0c2107-73c7-11eb-a229-f0795907d9ec','ddfghjkkkk','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('afcfa5f4-73c8-11eb-a229-f0795907d9ec','我说的','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('b5ce1f54-73c7-11eb-a229-f0795907d9ec','how are you','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('b9b6152f-7341-11eb-a229-f0795907d9ec','212312','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('ba72bb66-71a3-11eb-a09f-f0795907d9ec','123','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('cd77556b-739e-11eb-a229-f0795907d9ec','wushhs','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('e6a262d7-71a3-11eb-a09f-f0795907d9ec','伟哥哥好','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL),('fad285d9-71a3-11eb-a09f-f0795907d9ec','nmsl','cbdef4d4-7168-11eb-a09f-f0795907d9ec',NULL,3,'58f5ffcf-716b-11eb-a09f-f0795907d9ec',NULL);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments_feedback`
--

DROP TABLE IF EXISTS `comments_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments_feedback` (
  `CFeedbackId` varchar(255) NOT NULL,
  `CommentContent` varchar(255) DEFAULT NULL,
  `CommentCreatorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `MainCommentId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `CommentId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `CommentDate` datetime DEFAULT NULL,
  `ThumbNumber` int DEFAULT NULL,
  PRIMARY KEY (`CFeedbackId`),
  KEY `CommentCreatorId` (`CommentCreatorId`),
  KEY `MainCommentId` (`MainCommentId`),
  KEY `CF_CommentId` (`CommentId`),
  CONSTRAINT `CF_CommentId` FOREIGN KEY (`CommentId`) REFERENCES `comment` (`CommentId`) ON UPDATE CASCADE,
  CONSTRAINT `CommentCreatorId` FOREIGN KEY (`CommentCreatorId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE,
  CONSTRAINT `MainCommentId` FOREIGN KEY (`MainCommentId`) REFERENCES `comment` (`CommentId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments_feedback`
--

LOCK TABLES `comments_feedback` WRITE;
/*!40000 ALTER TABLE `comments_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyword`
--

DROP TABLE IF EXISTS `keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `keyword` (
  `KeywordId` varchar(255) NOT NULL COMMENT 'Unique ID for each keyword',
  `KeywordContent` varchar(255) DEFAULT NULL COMMENT 'The content of each keyword',
  PRIMARY KEY (`KeywordId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
INSERT INTO `keyword` VALUES ('1','white-cat'),('2','Festival'),('3','Cities');
/*!40000 ALTER TABLE `keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership_payment`
--

DROP TABLE IF EXISTS `membership_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membership_payment` (
  `PMembershipId` varchar(255) NOT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `MembershipType` int DEFAULT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `PaymentFee` double(255,0) DEFAULT NULL,
  PRIMARY KEY (`PMembershipId`),
  KEY `MP_UserId` (`UserId`),
  CONSTRAINT `MP_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership_payment`
--

LOCK TABLES `membership_payment` WRITE;
/*!40000 ALTER TABLE `membership_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `membership_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_membership`
--

DROP TABLE IF EXISTS `payment_membership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_membership` (
  `MPaymentId` varchar(255) NOT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `PaymentFee` double(255,0) DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`MPaymentId`),
  KEY `PM_UserId` (`UserId`),
  CONSTRAINT `PM_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_membership`
--

LOCK TABLES `payment_membership` WRITE;
/*!40000 ALTER TABLE `payment_membership` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_membership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_video`
--

DROP TABLE IF EXISTS `payment_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_video` (
  `VPaymentId` varchar(255) NOT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `PaymentFee` double(255,0) DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`VPaymentId`),
  KEY `PV_UserId` (`UserId`),
  KEY `PV_VideoId` (`VideoId`),
  CONSTRAINT `PV_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE,
  CONSTRAINT `PV_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `video` (`VideoId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_video`
--

LOCK TABLES `payment_video` WRITE;
/*!40000 ALTER TABLE `payment_video` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `RequestId` varchar(255) NOT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `RequestContent` varchar(255) DEFAULT NULL,
  `RequestDate` datetime(6) DEFAULT NULL,
  `IfRespond` int DEFAULT NULL,
  `RequestImagePath` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RequestId`),
  KEY `R_UserId` (`UserId`),
  CONSTRAINT `R_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES ('1','cbdef4d4-7168-11eb-a09f-f0795907d9ec','Chrismas Videos',NULL,4,'|Requestimages|chrismas.jpg'),('2','35c69e1a-7169-11eb-a09f-f0795907d9ec','Record your white cat',NULL,5,'|Requestimages|white-cat.jpg'),('3','a79826a8-7168-11eb-a09f-f0795907d9ec','Take a video of your bench press',NULL,9,'|Requestimages|bench-press.jpg'),('4','cbdef4d4-7168-11eb-a09f-f0795907d9ec','Show me new york city mainstreet',NULL,3,'|Requestimages|newyork-times-square.jpg'),('5','ea598ce5-7168-11eb-a09f-f0795907d9ec','Gatineau park hills',NULL,10,'|Requestimages|gatineauparkplan.jpg'),('6','35c69e1a-7169-11eb-a09f-f0795907d9ec','a cute baby',NULL,1,'|Requestimages|NA.jpg'),('7','35c69e1a-7169-11eb-a09f-f0795907d9ec','how to cook eggs under 20 seconds',NULL,22,'|Requestimages|eggs.jpg');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_response_relationship`
--

DROP TABLE IF EXISTS `request_response_relationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_response_relationship` (
  `RequestId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ResponseId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`RequestId`,`ResponseId`),
  KEY `RRR_ResponseId` (`ResponseId`),
  CONSTRAINT `RRR_RequestId` FOREIGN KEY (`RequestId`) REFERENCES `request` (`RequestId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `RRR_ResponseId` FOREIGN KEY (`ResponseId`) REFERENCES `response` (`ResponseId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_response_relationship`
--

LOCK TABLES `request_response_relationship` WRITE;
/*!40000 ALTER TABLE `request_response_relationship` DISABLE KEYS */;
/*!40000 ALTER TABLE `request_response_relationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `response`
--

DROP TABLE IF EXISTS `response`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `response` (
  `ResponseId` varchar(255) NOT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ResponseDate` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`ResponseId`),
  KEY `R_VideoId` (`VideoId`),
  CONSTRAINT `R_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `video` (`VideoId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `response`
--

LOCK TABLES `response` WRITE;
/*!40000 ALTER TABLE `response` DISABLE KEYS */;
/*!40000 ALTER TABLE `response` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thumb`
--

DROP TABLE IF EXISTS `thumb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thumb` (
  `ThumbId` varchar(255) NOT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ThumbDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ThumbId`),
  KEY `T_VideoId` (`VideoId`),
  KEY `T_UserId` (`UserId`),
  CONSTRAINT `T_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE,
  CONSTRAINT `T_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `video` (`VideoId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thumb`
--

LOCK TABLES `thumb` WRITE;
/*!40000 ALTER TABLE `thumb` DISABLE KEYS */;
INSERT INTO `thumb` VALUES ('5','8ad8cd6a-716b-11eb-a09f-f0795907d9ec','1bd80cd2-7169-11eb-a09f-f0795907d9ec',NULL),('6','8ad8cd6a-716b-11eb-a09f-f0795907d9ec','1bd80cd2-7169-11eb-a09f-f0795907d9ec',NULL),('7','8ad8cd6a-716b-11eb-a09f-f0795907d9ec','1bd80cd2-7169-11eb-a09f-f0795907d9ec',NULL);
/*!40000 ALTER TABLE `thumb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Unique ID for each user',
  `UserName` varchar(255) DEFAULT NULL COMMENT 'User name for each user',
  `Email` varchar(255) NOT NULL COMMENT 'Email for each user',
  `City` varchar(255) DEFAULT NULL COMMENT 'The city which users llived in',
  `Country` varchar(255) DEFAULT NULL COMMENT 'The country which users lived in',
  `Membership` int DEFAULT NULL COMMENT 'The membership of each account (Gold/Diamond)(1/2)',
  `PhotoPath` varchar(255) DEFAULT NULL COMMENT 'The path of video which is stored in the server',
  `Password` varchar(255) DEFAULT NULL COMMENT 'The passwrod for each account',
  `UserLevel` varchar(255) DEFAULT '0' COMMENT 'The user level of each account',
  `UserExperience` mediumint DEFAULT NULL COMMENT 'The point gained of each user level',
  `RequestCount` int DEFAULT NULL,
  `RespondCount` int DEFAULT NULL,
  `ThumbCount` int DEFAULT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `UserId_UNIQUE` (`UserId`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('1bd80cd2-7169-11eb-a09f-f0795907d9ec','Liverpool','1fdsf467@qq.com','Wuhan','China',5,'|images|1.png','1232144','3',1213,NULL,NULL,NULL),('35c69e1a-7169-11eb-a09f-f0795907d9ec','Manchester','2121127@qq.com','Tokyo','Japan',5,'|images|2.jpg','fdd','3',1213,NULL,NULL,NULL),('a79826a8-7168-11eb-a09f-f0795907d9ec','Username','425786225@qq.com','Tokyo','China',2,'|images|3.png','Password','6',12345,NULL,NULL,NULL),('cbdef4d4-7168-11eb-a09f-f0795907d9ec','Yujian Hu','1234567@qq.com','BeiJing','China',3,'|images|4.jpg','Yujian','5',1213,NULL,NULL,NULL),('ea598ce5-7168-11eb-a09f-f0795907d9ec','Haiyue Li','31421467@qq.com','Xian','China',5,'|images|5.png','sbsbsbsbs','3',1213,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_keyword_relationship`
--

DROP TABLE IF EXISTS `user_keyword_relationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_keyword_relationship` (
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `KeywordId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`UserId`,`KeywordId`),
  KEY `UKR_KeywordId` (`KeywordId`),
  CONSTRAINT `UKR_KeywordId` FOREIGN KEY (`KeywordId`) REFERENCES `keyword` (`KeywordId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UKR_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_keyword_relationship`
--

LOCK TABLES `user_keyword_relationship` WRITE;
/*!40000 ALTER TABLE `user_keyword_relationship` DISABLE KEYS */;
INSERT INTO `user_keyword_relationship` VALUES ('cbdef4d4-7168-11eb-a09f-f0795907d9ec','1'),('cbdef4d4-7168-11eb-a09f-f0795907d9ec','2'),('cbdef4d4-7168-11eb-a09f-f0795907d9ec','3');
/*!40000 ALTER TABLE `user_keyword_relationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `VideoId` varchar(255) NOT NULL,
  `VideoName` varchar(255) DEFAULT NULL,
  `VideoShortDescrtption` varchar(255) DEFAULT NULL,
  `VideoLongDescription` varchar(255) DEFAULT NULL,
  `VideoPath` varchar(255) DEFAULT NULL,
  `VideoTag` int DEFAULT NULL,
  `VideoCreateDate` datetime(6) DEFAULT NULL,
  `VideoCreatorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ThumbNumber` int DEFAULT NULL,
  `VideoImagePath` varchar(255) DEFAULT NULL,
  `RequestorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `VideoShares` int DEFAULT NULL,
  PRIMARY KEY (`VideoId`),
  KEY `VideoCreatorId` (`VideoCreatorId`),
  KEY `V_RequestorId` (`RequestorId`),
  CONSTRAINT `V_RequestorId` FOREIGN KEY (`RequestorId`) REFERENCES `user` (`UserId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `VideoCreatorId` FOREIGN KEY (`VideoCreatorId`) REFERENCES `user` (`UserId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES ('58f5ffcf-716b-11eb-a09f-f0795907d9ec','Chrismas','For Chrismas',NULL,'|videos|upload_05f7c6bd6b50ebebc24a4cbf4ca05d66.mp4',NULL,NULL,'1bd80cd2-7169-11eb-a09f-f0795907d9ec',4,NULL,'cbdef4d4-7168-11eb-a09f-f0795907d9ec',4),('8ad8cd6a-716b-11eb-a09f-f0795907d9ec','Chriamas2','Again for Chrismas',NULL,'|videos|upload_19d2fe37eb214a5521147943be8a971a.mp4',NULL,NULL,'35c69e1a-7169-11eb-a09f-f0795907d9ec',3,NULL,'cbdef4d4-7168-11eb-a09f-f0795907d9ec',7);
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_keyword_relationship`
--

DROP TABLE IF EXISTS `video_keyword_relationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_keyword_relationship` (
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `KeywordId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`VideoId`,`KeywordId`),
  KEY `VKR_KeywordId` (`KeywordId`),
  CONSTRAINT `VKR_KeywordId` FOREIGN KEY (`KeywordId`) REFERENCES `keyword` (`KeywordId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `VKR_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `video` (`VideoId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_keyword_relationship`
--

LOCK TABLES `video_keyword_relationship` WRITE;
/*!40000 ALTER TABLE `video_keyword_relationship` DISABLE KEYS */;
INSERT INTO `video_keyword_relationship` VALUES ('58f5ffcf-716b-11eb-a09f-f0795907d9ec','2'),('8ad8cd6a-716b-11eb-a09f-f0795907d9ec','2'),('58f5ffcf-716b-11eb-a09f-f0795907d9ec','3');
/*!40000 ALTER TABLE `video_keyword_relationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viewhistory`
--

DROP TABLE IF EXISTS `viewhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viewhistory` (
  `HistoryId` varchar(255) NOT NULL,
  `ViewDate` datetime DEFAULT NULL,
  `VistorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`HistoryId`),
  KEY `VH_VisitorId` (`VistorId`),
  KEY `VH_VideoId` (`VideoId`),
  CONSTRAINT `VH_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `video` (`VideoId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `VH_VisitorId` FOREIGN KEY (`VistorId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viewhistory`
--

LOCK TABLES `viewhistory` WRITE;
/*!40000 ALTER TABLE `viewhistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `viewhistory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-21 14:13:46
