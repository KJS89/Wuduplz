/*
 Navicat Premium Data Transfer

 Source Server         : Mysql_yingtan
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : wuduplz

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 27/01/2021 21:37:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Comment
-- ----------------------------
DROP TABLE IF EXISTS `Comment`;
CREATE TABLE `Comment` (
  `CommentId` varchar(255) NOT NULL,
  `CommentContent` varchar(255) DEFAULT NULL,
  `CommentatorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `CommentDate` datetime(6) DEFAULT NULL,
  `ThumberNumber` int DEFAULT NULL,
  PRIMARY KEY (`CommentId`),
  KEY `CommentatorId` (`CommentatorId`),
  CONSTRAINT `CommentatorId` FOREIGN KEY (`CommentatorId`) REFERENCES `User` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Comments_FeedBack
-- ----------------------------
DROP TABLE IF EXISTS `Comments_FeedBack`;
CREATE TABLE `Comments_FeedBack` (
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
  CONSTRAINT `CF_CommentId` FOREIGN KEY (`CommentId`) REFERENCES `Comment` (`CommentId`) ON UPDATE CASCADE,
  CONSTRAINT `CommentCreatorId` FOREIGN KEY (`CommentCreatorId`) REFERENCES `User` (`UserId`) ON UPDATE CASCADE,
  CONSTRAINT `MainCommentId` FOREIGN KEY (`MainCommentId`) REFERENCES `Comment` (`CommentId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Keyword
-- ----------------------------
DROP TABLE IF EXISTS `Keyword`;
CREATE TABLE `Keyword` (
  `KeywordId` varchar(255) NOT NULL COMMENT 'Unique ID for each keyword',
  `KeywordContent` varchar(255) DEFAULT NULL COMMENT 'The content of each keyword',
  PRIMARY KEY (`KeywordId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Membership_Payment
-- ----------------------------
DROP TABLE IF EXISTS `Membership_Payment`;
CREATE TABLE `Membership_Payment` (
  `PMembershipId` varchar(255) NOT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `MembershipType` int DEFAULT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `PaymentFee` double(255,0) DEFAULT NULL,
  PRIMARY KEY (`PMembershipId`),
  KEY `MP_UserId` (`UserId`),
  CONSTRAINT `MP_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Payment_Membership
-- ----------------------------
DROP TABLE IF EXISTS `Payment_Membership`;
CREATE TABLE `Payment_Membership` (
  `MPaymentId` varchar(255) NOT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `PaymentFee` double(255,0) DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`MPaymentId`),
  KEY `PM_UserId` (`UserId`),
  CONSTRAINT `PM_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Payment_Video
-- ----------------------------
DROP TABLE IF EXISTS `Payment_Video`;
CREATE TABLE `Payment_Video` (
  `VPaymentId` varchar(255) NOT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `PaymentFee` double(255,0) DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`VPaymentId`),
  KEY `PV_UserId` (`UserId`),
  KEY `PV_VideoId` (`VideoId`),
  CONSTRAINT `PV_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`) ON UPDATE CASCADE,
  CONSTRAINT `PV_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `Video` (`VideoId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Request
-- ----------------------------
DROP TABLE IF EXISTS `Request`;
CREATE TABLE `Request` (
  `RequestId` varchar(255) NOT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `RequestContent` varchar(255) DEFAULT NULL,
  `RequestDate` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`RequestId`),
  KEY `R_UserId` (`UserId`),
  CONSTRAINT `R_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Request_Response_Relationship
-- ----------------------------
DROP TABLE IF EXISTS `Request_Response_Relationship`;
CREATE TABLE `Request_Response_Relationship` (
  `RequestId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ResponseId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`RequestId`,`ResponseId`),
  KEY `RRR_ResponseId` (`ResponseId`),
  CONSTRAINT `RRR_RequestId` FOREIGN KEY (`RequestId`) REFERENCES `Request` (`RequestId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `RRR_ResponseId` FOREIGN KEY (`ResponseId`) REFERENCES `Response` (`ResponseId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Response
-- ----------------------------
DROP TABLE IF EXISTS `Response`;
CREATE TABLE `Response` (
  `ResponseId` varchar(255) NOT NULL,
  `ResponderId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `IfRespnd` int DEFAULT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ResponseDate` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`ResponseId`),
  KEY `ResponderId` (`ResponderId`),
  KEY `R_VideoId` (`VideoId`),
  CONSTRAINT `R_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `Video` (`VideoId`) ON UPDATE CASCADE,
  CONSTRAINT `ResponderId` FOREIGN KEY (`ResponderId`) REFERENCES `User` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Thumb
-- ----------------------------
DROP TABLE IF EXISTS `Thumb`;
CREATE TABLE `Thumb` (
  `ThumbId` varchar(255) NOT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ThumbDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ThumbId`),
  KEY `T_VideoId` (`VideoId`),
  KEY `T_UserId` (`UserId`),
  CONSTRAINT `T_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`) ON UPDATE CASCADE,
  CONSTRAINT `T_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `Video` (`VideoId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Unique ID for each user',
  `UserName` varchar(255) DEFAULT NULL COMMENT 'User name for each user',
  `Email` varchar(255) NOT NULL COMMENT 'Email for each user',
  `City` varchar(255) DEFAULT NULL COMMENT 'The city which users llived in',
  `Country` varchar(255) DEFAULT NULL COMMENT 'The country which users lived in',
  `Membership` int DEFAULT NULL COMMENT 'The membership of each account (Gold/Diamond)(1/2)',
  `PhotoPath` varchar(255) DEFAULT NULL COMMENT 'The path of video which is stored in the server',
  `Password` varchar(255) DEFAULT NULL COMMENT 'The passwrod for each account',
  `UserLevel` int DEFAULT NULL COMMENT 'The user level of each account',
  `UserExperience` mediumint DEFAULT NULL COMMENT 'The point gained of each user level',
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for User_Keyword_Relationship
-- ----------------------------
DROP TABLE IF EXISTS `User_Keyword_Relationship`;
CREATE TABLE `User_Keyword_Relationship` (
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `KeywordId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`UserId`,`KeywordId`),
  KEY `UKR_KeywordId` (`KeywordId`),
  CONSTRAINT `UKR_KeywordId` FOREIGN KEY (`KeywordId`) REFERENCES `Keyword` (`KeywordId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UKR_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Video
-- ----------------------------
DROP TABLE IF EXISTS `Video`;
CREATE TABLE `Video` (
  `VideoId` varchar(255) NOT NULL,
  `VideoName` varchar(255) DEFAULT NULL,
  `VideoShortDescrtption` varchar(255) DEFAULT NULL,
  `VideoLongDescription` varchar(255) DEFAULT NULL,
  `VideoPath` varchar(255) DEFAULT NULL,
  `VideoTag` int DEFAULT NULL,
  `VideoCreateDate` datetime(6) DEFAULT NULL,
  `VideoCreatorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ThumbNumber` int DEFAULT NULL,
  PRIMARY KEY (`VideoId`),
  KEY `VideoCreatorId` (`VideoCreatorId`),
  CONSTRAINT `VideoCreatorId` FOREIGN KEY (`VideoCreatorId`) REFERENCES `User` (`UserId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for VideoBelongPrivate
-- ----------------------------
DROP TABLE IF EXISTS `VideoBelongPrivate`;
CREATE TABLE `VideoBelongPrivate` (
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `RequestorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`VideoId`,`RequestorId`),
  KEY `RequestorId` (`RequestorId`),
  CONSTRAINT `RequestorId` FOREIGN KEY (`RequestorId`) REFERENCES `User` (`UserId`) ON UPDATE CASCADE,
  CONSTRAINT `VBP_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `Video` (`VideoId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for ViewHistory
-- ----------------------------
DROP TABLE IF EXISTS `ViewHistory`;
CREATE TABLE `ViewHistory` (
  `HistoryId` varchar(255) NOT NULL,
  `ViewDate` datetime DEFAULT NULL,
  `VistorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`HistoryId`),
  KEY `VH_VisitorId` (`VistorId`),
  KEY `VH_VideoId` (`VideoId`),
  CONSTRAINT `VH_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `Video` (`VideoId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `VH_VisitorId` FOREIGN KEY (`VistorId`) REFERENCES `User` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
