/*
 Navicat Premium Data Transfer

 Source Server         : ying_wuduplz
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : 34.68.41.157:3306
 Source Schema         : wuduplz

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 08/04/2021 07:06:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `CommentId` varchar(255) NOT NULL,
  `CommentContent` varchar(255) DEFAULT NULL,
  `CommentatorId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `CommentDate` datetime(6) DEFAULT NULL,
  `ThumberNumber` int DEFAULT NULL,
  `VideoId` varchar(255) DEFAULT NULL,
  `isRead` tinyint DEFAULT NULL,
  PRIMARY KEY (`CommentId`),
  KEY `CommentatorId` (`CommentatorId`),
  CONSTRAINT `CommentatorId` FOREIGN KEY (`CommentatorId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES ('06750058-8dae-11eb-b61b-42010a800007', 'dsfsas', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:06:53.000000', 3, '1', 1);
INSERT INTO `comment` VALUES ('0a18f07f-8dae-11eb-b61b-42010a800007', 'werwewerwe', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:06:59.000000', 3, '1', 0);
INSERT INTO `comment` VALUES ('0af46605-8db1-11eb-b61b-42010a800007', '123141', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:28:29.000000', 3, '1', 0);
INSERT INTO `comment` VALUES ('0d714eeb-982a-11eb-b61b-42010a800007', 'dfffffff', '2', '2021-04-08 05:19:54.000000', 3, '34', 0);
INSERT INTO `comment` VALUES ('1', 'Hello', 'a79826a8-7168-11eb-a09f-f0795907d9ec', NULL, NULL, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('10', 'Really cool pet bed!', '23', '2020-12-02 00:00:00.000000', 2, '178', 1);
INSERT INTO `comment` VALUES ('11', 'Rad man!', '30', '2020-12-02 00:00:00.000000', 6, '180', 1);
INSERT INTO `comment` VALUES ('12', 'Wow, you are a really great gamer!', '26', '2020-12-02 00:00:00.000000', 9, '268', 1);
INSERT INTO `comment` VALUES ('13', 'That is a beautiful sunset, thanks!', '27', '2020-12-02 00:00:00.000000', 3, '302', 1);
INSERT INTO `comment` VALUES ('13521e19-8db1-11eb-b61b-42010a800007', '1213241321', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:28:43.000000', 3, '1', 0);
INSERT INTO `comment` VALUES ('14', 'Thanks for showing me your car!', '28', '2020-12-02 00:00:00.000000', 5, '311', 1);
INSERT INTO `comment` VALUES ('158e72b0-7481-11eb-a229-f0795907d9ec', '2010-0101', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('17d4e7e4-8db1-11eb-b61b-42010a800007', '321424121213', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:28:51.000000', 3, '1', 0);
INSERT INTO `comment` VALUES ('1d61de0b-982a-11eb-b61b-42010a800007', 'dddddd', '2', '2021-04-08 05:20:21.000000', 3, '34', 0);
INSERT INTO `comment` VALUES ('1dad7dd6-8db1-11eb-b61b-42010a800007', 'asfsafasfsasada', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:29:01.000000', 3, '1', 0);
INSERT INTO `comment` VALUES ('2', 'again', 'a79826a8-7168-11eb-a09f-f0795907d9ec', NULL, NULL, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('2ab3d312-747b-11eb-a229-f0795907d9ec', '21321312', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('3', 'Wow, that is a lot of stuffies!', '19', '2020-12-02 00:00:00.000000', 2, '44', 1);
INSERT INTO `comment` VALUES ('3b6edf2a-77e2-11eb-a229-f0795907d9ec', 'fgghhj', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('3bc43d00-77e2-11eb-a229-f0795907d9ec', 'fgghhj', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('4', 'Thanks for showing me a backhoe!', '20', '2020-12-02 00:00:00.000000', 4, '76', 1);
INSERT INTO `comment` VALUES ('42359261-73c8-11eb-a229-f0795907d9ec', '去物业', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('45bb59b3-739c-11eb-a229-f0795907d9ec', 'hahshsh', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('4b4a2d14-73c9-11eb-a229-f0795907d9ec', '二分', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('4dfd88ae-739c-11eb-a229-f0795907d9ec', 'jsjsjjdjdkdk', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('4fa1a30f-9820-11eb-b61b-42010a800007', 'ddd', '207047bf-9818-11eb-b61b-42010a800007', '2021-04-08 04:10:10.000000', 3, '3', 0);
INSERT INTO `comment` VALUES ('4fab7ec2-753b-11eb-a229-f0795907d9ec', '二姑', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('5', 'Cool game!', '25', '2020-12-02 00:00:00.000000', 6, '85', 1);
INSERT INTO `comment` VALUES ('5271cd70-77e2-11eb-a229-f0795907d9ec', '141515261616161616-6', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('52c2c4df-77e2-11eb-a229-f0795907d9ec', '141515261616161616-6', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('538f8189-97e2-11eb-b61b-42010a800007', 'ojjjj', '1', '2021-04-07 20:46:28.000000', 3, '7b67c6f8-97e0-11eb-b61b-42010a800007', 0);
INSERT INTO `comment` VALUES ('570b0713-73c9-11eb-a229-f0795907d9ec', '24566789', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('5990cf8c-9820-11eb-b61b-42010a800007', 'hhdkdkdk', '207047bf-9818-11eb-b61b-42010a800007', '2021-04-08 04:10:27.000000', 3, '3', 0);
INSERT INTO `comment` VALUES ('5a1e2959-73c8-11eb-a229-f0795907d9ec', '178283', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('5c41692a-77e2-11eb-a229-f0795907d9ec', 'ghost????? ', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('5c88ae98-739c-11eb-a229-f0795907d9ec', 'shhsjdjdnd', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('5dc8252d-73c8-11eb-a229-f0795907d9ec', '信息的', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('6', 'That is a super fancy cup!', '24', '2020-12-02 00:00:00.000000', 3, '90', 1);
INSERT INTO `comment` VALUES ('636a5f00-7341-11eb-a229-f0795907d9ec', 'fdsfdsafdsa', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('63fe4763-739c-11eb-a229-f0795907d9ec', 'ssjjsndnd', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('6518cb96-73c8-11eb-a229-f0795907d9ec', '？bb', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('673dbf18-9814-11eb-b61b-42010a800007', 'hi', '1', '2021-04-08 02:44:56.000000', 3, '3', 0);
INSERT INTO `comment` VALUES ('6dda010f-7341-11eb-a229-f0795907d9ec', '123243423423', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('7', 'Wow, your cat is funny!', '22', '2020-12-02 00:00:00.000000', 5, '115', 1);
INSERT INTO `comment` VALUES ('725b3888-7491-11eb-a229-f0795907d9ec', '123737', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('733e7921-8eaa-11eb-b61b-42010a800007', 'dsafsadfsadfsa', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-27 03:13:49.000000', 3, '1', 1);
INSERT INTO `comment` VALUES ('73447b6e-747d-11eb-a229-f0795907d9ec', '54644', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('75f95747-9814-11eb-b61b-42010a800007', 'hi', '1', '2021-04-08 02:45:21.000000', 3, '3', 0);
INSERT INTO `comment` VALUES ('76d98911-7491-11eb-a229-f0795907d9ec', '38388383', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('8', 'Nice gaming set-up dude!', '29', '2020-12-02 00:00:00.000000', 8, '154', 1);
INSERT INTO `comment` VALUES ('89e358b5-71a4-11eb-a09f-f0795907d9ec', 'dghhj', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('8ef682af-73c8-11eb-a229-f0795907d9ec', '呃呃呃', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('9', 'Wow, cute nails!', '21', '2020-12-02 00:00:00.000000', 5, '168', 1);
INSERT INTO `comment` VALUES ('92afdbec-73c7-11eb-a229-f0795907d9ec', '1334', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('99112b5c-73c7-11eb-a229-f0795907d9ec', '23455', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('a3d43345-7343-11eb-a229-f0795907d9ec', '12221321321', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('ae0c2107-73c7-11eb-a229-f0795907d9ec', 'ddfghjkkkk', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('afcfa5f4-73c8-11eb-a229-f0795907d9ec', '我说的', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('b5ce1f54-73c7-11eb-a229-f0795907d9ec', 'how are you', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('b9b6152f-7341-11eb-a229-f0795907d9ec', '212312', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('ba72bb66-71a3-11eb-a09f-f0795907d9ec', '123', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('bae6dcf7-77e1-11eb-a229-f0795907d9ec', 'jsjdjdjd', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('bf2dccf7-77e2-11eb-a229-f0795907d9ec', '113333', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('c1357f48-97f6-11eb-b61b-42010a800007', 'vbjjjk', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-04-07 23:12:42.000000', 3, 'd34d053b-97f4-11eb-b61b-42010a800007', 0);
INSERT INTO `comment` VALUES ('c47ec769-97f6-11eb-b61b-42010a800007', 'bbhhh', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-04-07 23:12:47.000000', 3, 'd34d053b-97f4-11eb-b61b-42010a800007', 0);
INSERT INTO `comment` VALUES ('c9d4d766-77e1-11eb-a229-f0795907d9ec', 'jsjsjsn', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('ca5935d4-77e1-11eb-a229-f0795907d9ec', 'jsjsjsn', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '8ad8cd6a-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('cca83b24-77e2-11eb-a229-f0795907d9ec', '27737383', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('ccd8c9c9-8dae-11eb-b61b-42010a800007', 'fasasdf', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:12:26.000000', 3, '2', 1);
INSERT INTO `comment` VALUES ('cd77556b-739e-11eb-a229-f0795907d9ec', 'wushhs', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('cf5bf2b7-8dae-11eb-b61b-42010a800007', '323423423', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:12:30.000000', 3, '2', 1);
INSERT INTO `comment` VALUES ('d32afd0a-8dae-11eb-b61b-42010a800007', 'safdsafsafsdafsa', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:12:37.000000', 3, '2', 1);
INSERT INTO `comment` VALUES ('d655a086-980a-11eb-b61b-42010a800007', 'nice', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-04-08 01:36:27.000000', 3, 'c1e2da8b-980a-11eb-b61b-42010a800007', 0);
INSERT INTO `comment` VALUES ('d6fc9f0e-8dae-11eb-b61b-42010a800007', '23312321', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:12:43.000000', 3, '2', 1);
INSERT INTO `comment` VALUES ('e2eb409b-97f4-11eb-b61b-42010a800007', 'thanks!', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-04-07 22:59:19.000000', 3, 'd34d053b-97f4-11eb-b61b-42010a800007', 0);
INSERT INTO `comment` VALUES ('e6a262d7-71a3-11eb-a09f-f0795907d9ec', '伟哥哥好', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
INSERT INTO `comment` VALUES ('f0efca7a-981f-11eb-b61b-42010a800007', 'okokok', '207047bf-9818-11eb-b61b-42010a800007', '2021-04-08 04:07:31.000000', 3, '3', 0);
INSERT INTO `comment` VALUES ('fad285d9-71a3-11eb-a09f-f0795907d9ec', 'nmsl', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, 3, '58f5ffcf-716b-11eb-a09f-f0795907d9ec', 0);
COMMIT;

-- ----------------------------
-- Table structure for comments_feedback
-- ----------------------------
DROP TABLE IF EXISTS `comments_feedback`;
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

-- ----------------------------
-- Records of comments_feedback
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for keyword
-- ----------------------------
DROP TABLE IF EXISTS `keyword`;
CREATE TABLE `keyword` (
  `KeywordId` varchar(255) NOT NULL COMMENT 'Unique ID for each keyword',
  `KeywordContent` varchar(255) DEFAULT NULL COMMENT 'The content of each keyword',
  PRIMARY KEY (`KeywordId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of keyword
-- ----------------------------
BEGIN;
INSERT INTO `keyword` VALUES ('008a8e48-9703-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('008a9e1b-9703-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('008aa1a3-9703-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('031281dc-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('0312b401-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('0312c31f-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('06d11cf0-9715-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('06d13afa-9715-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('06d14c8e-9715-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('08b833fb-964f-11eb-b61b-42010a800007', 'heheh');
INSERT INTO `keyword` VALUES ('08ce40ee-964f-11eb-b61b-42010a800007', 'hshjdjd');
INSERT INTO `keyword` VALUES ('1', 'game');
INSERT INTO `keyword` VALUES ('10', 'Art');
INSERT INTO `keyword` VALUES ('100', 'Skyscrapers');
INSERT INTO `keyword` VALUES ('101', 'Video Games');
INSERT INTO `keyword` VALUES ('102', 'Hiphop');
INSERT INTO `keyword` VALUES ('103', 'Computer');
INSERT INTO `keyword` VALUES ('104', 'Gaming');
INSERT INTO `keyword` VALUES ('105', 'Real Estate');
INSERT INTO `keyword` VALUES ('106', 'Nutrition');
INSERT INTO `keyword` VALUES ('107', 'Cruises');
INSERT INTO `keyword` VALUES ('108', 'Board Games');
INSERT INTO `keyword` VALUES ('109', 'Guitars');
INSERT INTO `keyword` VALUES ('11', 'Food');
INSERT INTO `keyword` VALUES ('110', 'Drawing');
INSERT INTO `keyword` VALUES ('111', 'Startups');
INSERT INTO `keyword` VALUES ('112', 'Travelling');
INSERT INTO `keyword` VALUES ('113', 'Extreme Sports');
INSERT INTO `keyword` VALUES ('114', 'Fighting');
INSERT INTO `keyword` VALUES ('115', 'Sport');
INSERT INTO `keyword` VALUES ('116', 'Acg');
INSERT INTO `keyword` VALUES ('117', 'Drink');
INSERT INTO `keyword` VALUES ('118', 'Family');
INSERT INTO `keyword` VALUES ('119', 'Tech');
INSERT INTO `keyword` VALUES ('12', 'Movies');
INSERT INTO `keyword` VALUES ('120', 'Robotics');
INSERT INTO `keyword` VALUES ('121', 'Startup');
INSERT INTO `keyword` VALUES ('122', 'Covid19');
INSERT INTO `keyword` VALUES ('123', 'News');
INSERT INTO `keyword` VALUES ('124', 'Funny');
INSERT INTO `keyword` VALUES ('125', 'Design');
INSERT INTO `keyword` VALUES ('126', 'Phone');
INSERT INTO `keyword` VALUES ('127', 'Rubiks Cubes');
INSERT INTO `keyword` VALUES ('128', 'Online Games');
INSERT INTO `keyword` VALUES ('129', 'Board Game');
INSERT INTO `keyword` VALUES ('13', 'Running');
INSERT INTO `keyword` VALUES ('130', 'Cat');
INSERT INTO `keyword` VALUES ('131', 'Nata');
INSERT INTO `keyword` VALUES ('132', 'Work');
INSERT INTO `keyword` VALUES ('133', 'Clothes');
INSERT INTO `keyword` VALUES ('134', 'Wine');
INSERT INTO `keyword` VALUES ('135', 'Nba');
INSERT INTO `keyword` VALUES ('136', 'Shopping');
INSERT INTO `keyword` VALUES ('137', 'Tv');
INSERT INTO `keyword` VALUES ('137a580e-9829-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('137b5bd8-9829-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('137b6093-9829-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('138', 'Sun');
INSERT INTO `keyword` VALUES ('139', 'Plant');
INSERT INTO `keyword` VALUES ('14', 'Baking');
INSERT INTO `keyword` VALUES ('140', 'Beach');
INSERT INTO `keyword` VALUES ('141', 'Swim');
INSERT INTO `keyword` VALUES ('142', 'Adventure');
INSERT INTO `keyword` VALUES ('143', 'Anime');
INSERT INTO `keyword` VALUES ('144', 'Chasing Accidents');
INSERT INTO `keyword` VALUES ('145', 'Football(Soccer)');
INSERT INTO `keyword` VALUES ('146', 'Germany');
INSERT INTO `keyword` VALUES ('147', 'Finance');
INSERT INTO `keyword` VALUES ('148', 'Leadership');
INSERT INTO `keyword` VALUES ('149', 'Reality Tv');
INSERT INTO `keyword` VALUES ('15', 'Games');
INSERT INTO `keyword` VALUES ('150', 'Hard Rock');
INSERT INTO `keyword` VALUES ('151', 'Technology');
INSERT INTO `keyword` VALUES ('152', 'Boxing');
INSERT INTO `keyword` VALUES ('153', 'Comic');
INSERT INTO `keyword` VALUES ('154', 'Military');
INSERT INTO `keyword` VALUES ('155', 'Building');
INSERT INTO `keyword` VALUES ('156', 'Surf On The Internet');
INSERT INTO `keyword` VALUES ('157', 'Take Photos');
INSERT INTO `keyword` VALUES ('158', 'Weather');
INSERT INTO `keyword` VALUES ('159', 'Stories');
INSERT INTO `keyword` VALUES ('16', 'Biking');
INSERT INTO `keyword` VALUES ('160', 'Semiconductor');
INSERT INTO `keyword` VALUES ('161', 'Exercisedog');
INSERT INTO `keyword` VALUES ('167', 'Cocoa');
INSERT INTO `keyword` VALUES ('168', 'Bread');
INSERT INTO `keyword` VALUES ('169', 'Lemon');
INSERT INTO `keyword` VALUES ('17', 'Tv Shows');
INSERT INTO `keyword` VALUES ('170', 'Cut');
INSERT INTO `keyword` VALUES ('172', 'Tomato');
INSERT INTO `keyword` VALUES ('173', 'Beans');
INSERT INTO `keyword` VALUES ('174', 'Vegetable');
INSERT INTO `keyword` VALUES ('175', 'Pan');
INSERT INTO `keyword` VALUES ('176', 'Cake');
INSERT INTO `keyword` VALUES ('177', 'Woman');
INSERT INTO `keyword` VALUES ('178', 'Man');
INSERT INTO `keyword` VALUES ('179', 'Basketball');
INSERT INTO `keyword` VALUES ('18', 'Book');
INSERT INTO `keyword` VALUES ('180', 'Volleyball');
INSERT INTO `keyword` VALUES ('181', 'Hockey');
INSERT INTO `keyword` VALUES ('183', 'Paint');
INSERT INTO `keyword` VALUES ('184', 'Pottery');
INSERT INTO `keyword` VALUES ('185', 'Clay');
INSERT INTO `keyword` VALUES ('188', 'Rolling');
INSERT INTO `keyword` VALUES ('189', 'Cookies');
INSERT INTO `keyword` VALUES ('19', 'Painting');
INSERT INTO `keyword` VALUES ('190', 'Whisk');
INSERT INTO `keyword` VALUES ('191', 'Pumpkin');
INSERT INTO `keyword` VALUES ('192', 'Fruit');
INSERT INTO `keyword` VALUES ('193', 'Chocolate');
INSERT INTO `keyword` VALUES ('194', 'Knife');
INSERT INTO `keyword` VALUES ('195', 'Croissant');
INSERT INTO `keyword` VALUES ('196', 'Grapefruit');
INSERT INTO `keyword` VALUES ('197', 'Lime');
INSERT INTO `keyword` VALUES ('198', 'Pear');
INSERT INTO `keyword` VALUES ('199', 'Strawberry');
INSERT INTO `keyword` VALUES ('1c96d05b-97e0-11eb-b61b-42010a800007', 'jjj');
INSERT INTO `keyword` VALUES ('1d563fda-9700-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('1d56466a-9700-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('1d56544a-9700-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('20', 'Computers');
INSERT INTO `keyword` VALUES ('200', 'Pineapple');
INSERT INTO `keyword` VALUES ('201', 'Onion');
INSERT INTO `keyword` VALUES ('202', 'Carrot');
INSERT INTO `keyword` VALUES ('203', 'Dusting');
INSERT INTO `keyword` VALUES ('203245da-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('20324cab-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('20325639-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('204', 'Jump Rope');
INSERT INTO `keyword` VALUES ('205', 'Hoop');
INSERT INTO `keyword` VALUES ('206', 'Girl');
INSERT INTO `keyword` VALUES ('207', 'Play');
INSERT INTO `keyword` VALUES ('207dfc8c-97be-11eb-b61b-42010a800007', '2');
INSERT INTO `keyword` VALUES ('207dfd70-97be-11eb-b61b-42010a800007', '3');
INSERT INTO `keyword` VALUES ('207e09ee-97be-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('208', 'Ice');
INSERT INTO `keyword` VALUES ('209', 'Jump');
INSERT INTO `keyword` VALUES ('21', 'Snowboard');
INSERT INTO `keyword` VALUES ('212', 'Watercolous');
INSERT INTO `keyword` VALUES ('213', 'Canvas');
INSERT INTO `keyword` VALUES ('214', 'Wheel');
INSERT INTO `keyword` VALUES ('215', 'Mould');
INSERT INTO `keyword` VALUES ('216', 'Christmas');
INSERT INTO `keyword` VALUES ('217', 'Marker');
INSERT INTO `keyword` VALUES ('218', 'Skull');
INSERT INTO `keyword` VALUES ('219', 'Colouring');
INSERT INTO `keyword` VALUES ('22', 'Badminton');
INSERT INTO `keyword` VALUES ('220', 'Kid');
INSERT INTO `keyword` VALUES ('221', 'Pencil');
INSERT INTO `keyword` VALUES ('222', 'Dough');
INSERT INTO `keyword` VALUES ('223', 'Icing');
INSERT INTO `keyword` VALUES ('224', 'Cutting');
INSERT INTO `keyword` VALUES ('225', 'Easter');
INSERT INTO `keyword` VALUES ('226', 'Colours');
INSERT INTO `keyword` VALUES ('227', 'Market');
INSERT INTO `keyword` VALUES ('228', 'Orange');
INSERT INTO `keyword` VALUES ('229', 'Pepper');
INSERT INTO `keyword` VALUES ('23', 'Bag');
INSERT INTO `keyword` VALUES ('230', 'Muffin');
INSERT INTO `keyword` VALUES ('231', 'Mixing');
INSERT INTO `keyword` VALUES ('232', 'Pull');
INSERT INTO `keyword` VALUES ('233', 'Hand');
INSERT INTO `keyword` VALUES ('234', 'Butter');
INSERT INTO `keyword` VALUES ('235', 'Sugar');
INSERT INTO `keyword` VALUES ('236', 'Spin');
INSERT INTO `keyword` VALUES ('237', 'Exercise');
INSERT INTO `keyword` VALUES ('238', 'Watercolours');
INSERT INTO `keyword` VALUES ('239', 'Christmas Tree');
INSERT INTO `keyword` VALUES ('24', 'Louis');
INSERT INTO `keyword` VALUES ('240', 'Holiday');
INSERT INTO `keyword` VALUES ('241', 'Bag');
INSERT INTO `keyword` VALUES ('242', 'Dish');
INSERT INTO `keyword` VALUES ('243', 'Batter');
INSERT INTO `keyword` VALUES ('244', 'Cabbage');
INSERT INTO `keyword` VALUES ('245', 'Team');
INSERT INTO `keyword` VALUES ('246', 'Game');
INSERT INTO `keyword` VALUES ('247', 'Puck drop');
INSERT INTO `keyword` VALUES ('248', 'Goal');
INSERT INTO `keyword` VALUES ('249', 'Snow');
INSERT INTO `keyword` VALUES ('25', 'Super');
INSERT INTO `keyword` VALUES ('250', 'Decorating');
INSERT INTO `keyword` VALUES ('26', 'Talk Show');
INSERT INTO `keyword` VALUES ('2631ecc7-980f-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('2631ecca-980f-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('26323796-980f-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('27', 'Animation');
INSERT INTO `keyword` VALUES ('28', 'Sugar');
INSERT INTO `keyword` VALUES ('289d107c-97e5-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('289d107e-97e5-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('289d280d-97e5-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('29', 'Swimming');
INSERT INTO `keyword` VALUES ('2927551b-9713-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('29276476-9713-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('29276644-9713-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('29440b19-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('294413a9-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('2944285a-9714-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('2a6daf25-97d2-11eb-b61b-42010a800007', '');
INSERT INTO `keyword` VALUES ('2a6dbf8c-97d2-11eb-b61b-42010a800007', '');
INSERT INTO `keyword` VALUES ('30', 'Cars');
INSERT INTO `keyword` VALUES ('30edfbed-9708-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('30ee54b1-9708-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('30ee5f5f-9708-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('31', 'Trip');
INSERT INTO `keyword` VALUES ('32', 'Flower');
INSERT INTO `keyword` VALUES ('33', 'Dog');
INSERT INTO `keyword` VALUES ('33cc0da2-97d2-11eb-b61b-42010a800007', '22');
INSERT INTO `keyword` VALUES ('34', 'Game');
INSERT INTO `keyword` VALUES ('34af895a-9706-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('34af8e08-9706-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('34af9a98-9706-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('35', 'Skiing');
INSERT INTO `keyword` VALUES ('36', 'K-Pop');
INSERT INTO `keyword` VALUES ('36fc251f-96a0-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('37', 'Football');
INSERT INTO `keyword` VALUES ('370e9f5d-96a0-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('370e9ffe-96a0-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('38', 'Pet');
INSERT INTO `keyword` VALUES ('38e6a214-964a-11eb-b61b-42010a800007', 'yoga');
INSERT INTO `keyword` VALUES ('39', 'Travel');
INSERT INTO `keyword` VALUES ('3d370bfd-9818-11eb-b61b-42010a800007', 'football');
INSERT INTO `keyword` VALUES ('3d4acbde-9818-11eb-b61b-42010a800007', 'England');
INSERT INTO `keyword` VALUES ('3d4aced7-9818-11eb-b61b-42010a800007', 'Liverpool');
INSERT INTO `keyword` VALUES ('40', 'Cat Person');
INSERT INTO `keyword` VALUES ('41', 'Plane');
INSERT INTO `keyword` VALUES ('410fef4a-9828-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('411008e0-9828-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('41102997-9828-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('42', 'Hiking');
INSERT INTO `keyword` VALUES ('43', 'Student');
INSERT INTO `keyword` VALUES ('43175f0f-97ba-11eb-b61b-42010a800007', 'football');
INSERT INTO `keyword` VALUES ('431781ac-97ba-11eb-b61b-42010a800007', 'basketball');
INSERT INTO `keyword` VALUES ('432a9439-97ba-11eb-b61b-42010a800007', 'music');
INSERT INTO `keyword` VALUES ('44', 'Soccer');
INSERT INTO `keyword` VALUES ('45', 'Guitar');
INSERT INTO `keyword` VALUES ('46', 'Hunting');
INSERT INTO `keyword` VALUES ('47', 'I.T');
INSERT INTO `keyword` VALUES ('48', 'Workout');
INSERT INTO `keyword` VALUES ('49', 'Programming');
INSERT INTO `keyword` VALUES ('50', 'Tow Trucks');
INSERT INTO `keyword` VALUES ('51', 'Rap');
INSERT INTO `keyword` VALUES ('52', 'Fashion');
INSERT INTO `keyword` VALUES ('53', 'Makeup');
INSERT INTO `keyword` VALUES ('54', 'Video Game Console');
INSERT INTO `keyword` VALUES ('55', 'Psychology');
INSERT INTO `keyword` VALUES ('551bcc69-9827-11eb-b61b-42010a800007', 'Football');
INSERT INTO `keyword` VALUES ('56', 'Cryptocurrency');
INSERT INTO `keyword` VALUES ('57', 'Dance');
INSERT INTO `keyword` VALUES ('58', 'Gym');
INSERT INTO `keyword` VALUES ('59', 'Card Games');
INSERT INTO `keyword` VALUES ('60', 'Stocks');
INSERT INTO `keyword` VALUES ('61', 'Cooking');
INSERT INTO `keyword` VALUES ('62', 'Film Making');
INSERT INTO `keyword` VALUES ('63', 'Basketball');
INSERT INTO `keyword` VALUES ('639a3e35-97e2-11eb-b61b-42010a800007', '2255');
INSERT INTO `keyword` VALUES ('64', 'Music');
INSERT INTO `keyword` VALUES ('65', 'Video Game');
INSERT INTO `keyword` VALUES ('66', 'The Beatles');
INSERT INTO `keyword` VALUES ('67', 'Vocaloid');
INSERT INTO `keyword` VALUES ('68', 'Photography');
INSERT INTO `keyword` VALUES ('69', 'House Renovation');
INSERT INTO `keyword` VALUES ('70', 'Space');
INSERT INTO `keyword` VALUES ('71', 'Ai');
INSERT INTO `keyword` VALUES ('72', 'Korean Food');
INSERT INTO `keyword` VALUES ('73', 'Health');
INSERT INTO `keyword` VALUES ('74', 'Books');
INSERT INTO `keyword` VALUES ('75', 'Dogs');
INSERT INTO `keyword` VALUES ('76', 'Coffee');
INSERT INTO `keyword` VALUES ('77', 'History');
INSERT INTO `keyword` VALUES ('78', 'Politics');
INSERT INTO `keyword` VALUES ('79', 'Reading');
INSERT INTO `keyword` VALUES ('7b731128-97e0-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('7b733401-97e0-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('7b86d2bf-97e0-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('7fea2476-97e9-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('7fea2479-97e9-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('7fea3ca9-97e9-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('80', 'Movie');
INSERT INTO `keyword` VALUES ('81', 'Yoga');
INSERT INTO `keyword` VALUES ('82', 'Fishing');
INSERT INTO `keyword` VALUES ('83', 'Sleep');
INSERT INTO `keyword` VALUES ('84', 'Meme');
INSERT INTO `keyword` VALUES ('85', 'Summer');
INSERT INTO `keyword` VALUES ('86', 'Nine');
INSERT INTO `keyword` VALUES ('87', 'Talent Show');
INSERT INTO `keyword` VALUES ('88', 'Vedio Games');
INSERT INTO `keyword` VALUES ('89', 'Drinks');
INSERT INTO `keyword` VALUES ('9', 'Happy');
INSERT INTO `keyword` VALUES ('90', 'Money');
INSERT INTO `keyword` VALUES ('91', 'Cook');
INSERT INTO `keyword` VALUES ('92', 'Piano');
INSERT INTO `keyword` VALUES ('93', 'Tennis');
INSERT INTO `keyword` VALUES ('94', 'Snow');
INSERT INTO `keyword` VALUES ('95', 'Nature');
INSERT INTO `keyword` VALUES ('96', 'Egame');
INSERT INTO `keyword` VALUES ('97', 'Lol');
INSERT INTO `keyword` VALUES ('98', 'Party');
INSERT INTO `keyword` VALUES ('99', 'Web Development');
INSERT INTO `keyword` VALUES ('9a216526-97f4-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('9a21727e-97f4-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('9a33bdd0-97f4-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('acfe97a1-964e-11eb-b61b-42010a800007', 'hockey');
INSERT INTO `keyword` VALUES ('b01a8e6b-9827-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('b01a8e6e-9827-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('b02df537-9827-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('ba91e573-97d7-11eb-b61b-42010a800007', '1212');
INSERT INTO `keyword` VALUES ('c1ee5e5c-980a-11eb-b61b-42010a800007', 'meat');
INSERT INTO `keyword` VALUES ('c1ee5e5d-980a-11eb-b61b-42010a800007', 'food');
INSERT INTO `keyword` VALUES ('c1ee9ee9-980a-11eb-b61b-42010a800007', 'wholesome');
INSERT INTO `keyword` VALUES ('d35803e6-97f4-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('d35803e8-97f4-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('d3581f7e-97f4-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('e6a5037f-9828-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('e6a50383-9828-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('e6a51934-9828-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('e9ea10e9-97e8-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('e9ea21fe-97e8-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('e9fa3fec-97e8-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('f6656f5f-980e-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('f6659299-980e-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('f6659a80-980e-11eb-b61b-42010a800007', '1');
INSERT INTO `keyword` VALUES ('fbfb53de-9829-11eb-b61b-42010a800007', 'game');
COMMIT;

-- ----------------------------
-- Table structure for like
-- ----------------------------
DROP TABLE IF EXISTS `like`;
CREATE TABLE `like` (
  `LikeId` varchar(255) NOT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `LikeDate` datetime DEFAULT NULL,
  PRIMARY KEY (`LikeId`),
  KEY `T_VideoId` (`VideoId`),
  KEY `T_UserId` (`UserId`),
  CONSTRAINT `T_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE,
  CONSTRAINT `T_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `video` (`VideoId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of like
-- ----------------------------
BEGIN;
INSERT INTO `like` VALUES ('07347b4b-982a-11eb-b61b-42010a800007', '34', '2', '2021-04-08 05:19:44');
INSERT INTO `like` VALUES ('10', '85', '25', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('11', '90', '24', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('12', '115', '22', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('13', '154', '29', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('14', '168', '21', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('15', '178', '23', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('16', '34', '30', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('17', '268', '26', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('18', '302', '27', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('19', '311', '28', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('5', '2', '1bd80cd2-7169-11eb-a09f-f0795907d9ec', NULL);
INSERT INTO `like` VALUES ('500d66f6-97e2-11eb-b61b-42010a800007', '7b67c6f8-97e0-11eb-b61b-42010a800007', '1', '2021-04-07 20:46:22');
INSERT INTO `like` VALUES ('6', '2', '1bd80cd2-7169-11eb-a09f-f0795907d9ec', NULL);
INSERT INTO `like` VALUES ('67aebe51-8db1-11eb-b61b-42010a800007', '1', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2021-03-25 21:31:05');
INSERT INTO `like` VALUES ('7', '2', '1bd80cd2-7169-11eb-a09f-f0795907d9ec', NULL);
INSERT INTO `like` VALUES ('8', '44', '19', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('803bd10f-9814-11eb-b61b-42010a800007', '3', '1', '2021-04-08 02:45:38');
INSERT INTO `like` VALUES ('88397d3f-9814-11eb-b61b-42010a800007', '2', '1', '2021-04-08 02:45:51');
INSERT INTO `like` VALUES ('8d7e8f84-9814-11eb-b61b-42010a800007', '2', '1', '2021-04-08 02:46:00');
INSERT INTO `like` VALUES ('9', '76', '20', '2020-12-02 00:00:00');
INSERT INTO `like` VALUES ('ea0c85da-97df-11eb-b61b-42010a800007', '2', '1', '2021-04-07 20:29:12');
COMMIT;

-- ----------------------------
-- Table structure for membership_payment
-- ----------------------------
DROP TABLE IF EXISTS `membership_payment`;
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

-- ----------------------------
-- Records of membership_payment
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for payment_membership
-- ----------------------------
DROP TABLE IF EXISTS `payment_membership`;
CREATE TABLE `payment_membership` (
  `MPaymentId` varchar(255) NOT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `PaymentFee` double(255,0) DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`MPaymentId`),
  KEY `PM_UserId` (`UserId`),
  CONSTRAINT `PM_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of payment_membership
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for payment_video
-- ----------------------------
DROP TABLE IF EXISTS `payment_video`;
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

-- ----------------------------
-- Records of payment_video
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for request
-- ----------------------------
DROP TABLE IF EXISTS `request`;
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

-- ----------------------------
-- Records of request
-- ----------------------------
BEGIN;
INSERT INTO `request` VALUES ('1', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'Chrismas Videos', NULL, 4, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('10', '7', 'Wuduplz show me what a backhoe looks like?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('11', '8', 'Wuduplz show me a cool nail art design?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('12', '9', 'Wuduplz show me what a Devon Rex cat looks like?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('13', '10', 'Wuduplz show me a cute pet bed?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('14', '11', 'Wuduplz show me a fancy cup?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('15', '12', 'show me how to capture a node in seething shore', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('16', '13', 'can i see some resto sham pvp?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('17', '14', 'Wuduplz show me the sunset?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('18', '15', 'Wuduplz show me what you drive?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('19', '16', 'Wuduplz show me a gaming setup?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('2', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'Record your white cat', NULL, 5, '|Requestimages|white-cat.jpg');
INSERT INTO `request` VALUES ('20', '17', 'Wuduplz show me a game console?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('21', '30', 'Would you please show me how to decorate a muffin?', '2020-12-25 00:00:00.000000', 1, 'RequestImagePath');
INSERT INTO `request` VALUES ('22', '31', 'Would you please show me how to dust cocoa?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('23', '32', 'Would you please show me how to mix batter?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('24', '33', 'Would you please show me how to cut bread with a knife?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('25', '34', 'Would you please show me how to eat a croissant?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('250421ee-97f3-11eb-b61b-42010a800007', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'show me the meal', '2021-04-07 22:46:51.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('26', '35', 'Would you please show me how to eat bread?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('27', '36', 'Would you please show me how to cut a lemon?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('28', '37', 'Would you please show me how to cut a cherry tomato?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('29', '38', 'Would you please show me how to cut a grapefruit?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('3', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'Take a video of your bench press', NULL, 9, '|Requestimages|bench-press.jpg');
INSERT INTO `request` VALUES ('30', '39', 'Would you please show me how to cut a lime?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('31', '40', 'Would you please show me how to cut a pear?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('32', '41', 'Would you please show me how to cut strawberries?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('33', '42', 'Would you please show me how to cut a tomato?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('34', '43', 'Would you please show me how to cut a strawberry?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('35', '44', 'Would you please show me how to cut a pineapple?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('36', '45', 'Would you please show me how to cut cabbage?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('37', '46', 'Would you please show me how to cut a orange?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('38', '47', 'Would you please show me how to cut an onion?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('39', '48', 'Would you please show me how to cut a carrot?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('4', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'Show me new york city mainstreet', NULL, 3, '|Requestimages|newyork-times-square.jpg');
INSERT INTO `request` VALUES ('40', '49', 'Would you please show me how to cook tomato?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('41', '50', 'Would you please show me how to cook beans?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('42', '51', 'Would you please show me how to cook vegetables?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('43', '52', 'Would you please show me how to decorate a cake?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('44', '53', 'Would you please show me how to jump rope?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('45', '54', 'Would you please show me how to play basketball?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('46', '55', 'Would you please show me volleyball?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('47', '56', 'Would you please show me basketball?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('48', '57', 'Would you please show me hockey?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('49', '58', 'Would you please show me an exercise?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('5', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'Gatineau park hills', NULL, 10, '|Requestimages|gatineauparkplan.jpg');
INSERT INTO `request` VALUES ('50', '59', 'Would you please show me boxing?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('50db5164-97ba-11eb-b61b-42010a800007', '24be2454-97ba-11eb-b61b-42010a800007', 'would you please show me some food', '2021-04-07 16:00:04.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('51', '60', 'Would you please show me swimming?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('52', '61', 'Would you please show me watercolours?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('53', '62', 'Would you please show me painting?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('54', '63', 'Would you please show me pottery?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('55', '64', 'Would you please show me how to draw?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('56', '65', 'Would you please show me how to use clay?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('569a3c8e-97e0-11eb-b61b-42010a800007', '1', 'uioll', '2021-04-07 20:32:14.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('57', '66', 'Would you please show me how to roll dough?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('58', '67', 'Would you please show me how to decorate cookies?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('59', '68', 'Would you please show me how to cut dough?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('5e4abf67-8dca-11eb-b61b-42010a800007', 'ea598ce5-7168-11eb-a09f-f0795907d9ec', '1224342342343242', '2021-03-26 00:29:47.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('6', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'a cute baby', NULL, 1, '|Requestimages|NA.jpg');
INSERT INTO `request` VALUES ('60', '69', 'Would you please show me easter cooking?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('61', '70', 'Would you please show me how to use a whisk?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('62', '71', 'Would you please show me how to cook pumpkin?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('623cfb8f-97e9-11eb-b61b-42010a800007', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '11111', '2021-04-07 21:36:59.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('63', '72', 'Would you please show me vegetables in season?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('64', '73', 'Would you please show me how to cut pepper?', '2020-12-25 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('7', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'how to cook eggs under 20 seconds', NULL, 22, '|Requestimages|eggs.jpg');
INSERT INTO `request` VALUES ('7708188e-9829-11eb-b61b-42010a800007', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'show me some stars', '2021-04-08 05:15:42.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('7a9030db-8eb8-11eb-b61b-42010a800007', 'ea598ce5-7168-11eb-a09f-f0795907d9ec', 'wlslldld', '2021-03-27 04:54:14.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('7b18bc81-8eb7-11eb-b61b-42010a800007', 'ea598ce5-7168-11eb-a09f-f0795907d9ec', 'fffffjdkdkdmd', '2021-03-27 04:47:06.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('8354650e-8eb7-11eb-b61b-42010a800007', 'ea598ce5-7168-11eb-a09f-f0795907d9ec', 'jsmskdkdk', '2021-03-27 04:47:19.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('8f310b3f-9818-11eb-b61b-42010a800007', '207047bf-9818-11eb-b61b-42010a800007', 'jjjkkk', '2021-04-08 03:14:41.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('9', '6', 'Wuduplz show me popular stuffy animals a child has?', '2020-11-11 00:00:00.000000', 1, 'image_path');
INSERT INTO `request` VALUES ('9f303dae-97e0-11eb-b61b-42010a800007', 'a13299f7-95c9-11eb-b61b-42010a800007', 'request form 1', '2021-04-07 20:34:16.000000', 0, '|Requestimages|chrismas.jpg');
INSERT INTO `request` VALUES ('d20678f0-980e-11eb-b61b-42010a800007', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'show me some meal', '2021-04-08 02:04:58.000000', 0, '|Requestimages|chrismas.jpg');
COMMIT;

-- ----------------------------
-- Table structure for request_response_relationship
-- ----------------------------
DROP TABLE IF EXISTS `request_response_relationship`;
CREATE TABLE `request_response_relationship` (
  `RequestId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ResponseId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`RequestId`,`ResponseId`),
  KEY `RRR_ResponseId` (`ResponseId`),
  CONSTRAINT `RRR_RequestId` FOREIGN KEY (`RequestId`) REFERENCES `request` (`RequestId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `RRR_ResponseId` FOREIGN KEY (`ResponseId`) REFERENCES `response` (`ResponseId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of request_response_relationship
-- ----------------------------
BEGIN;
INSERT INTO `request_response_relationship` VALUES ('250421ee-97f3-11eb-b61b-42010a800007', '254d8802-97f3-11eb-b61b-42010a800007');
INSERT INTO `request_response_relationship` VALUES ('250421ee-97f3-11eb-b61b-42010a800007', '264ed497-97f3-11eb-b61b-42010a800007');
INSERT INTO `request_response_relationship` VALUES ('623cfb8f-97e9-11eb-b61b-42010a800007', '628487a0-97e9-11eb-b61b-42010a800007');
INSERT INTO `request_response_relationship` VALUES ('623cfb8f-97e9-11eb-b61b-42010a800007', '62be30a2-97e9-11eb-b61b-42010a800007');
INSERT INTO `request_response_relationship` VALUES ('7708188e-9829-11eb-b61b-42010a800007', '7725e6b0-9829-11eb-b61b-42010a800007');
INSERT INTO `request_response_relationship` VALUES ('7708188e-9829-11eb-b61b-42010a800007', '773672bd-9829-11eb-b61b-42010a800007');
INSERT INTO `request_response_relationship` VALUES ('8f310b3f-9818-11eb-b61b-42010a800007', '8f74f1ee-9818-11eb-b61b-42010a800007');
INSERT INTO `request_response_relationship` VALUES ('8f310b3f-9818-11eb-b61b-42010a800007', '8fa8393f-9818-11eb-b61b-42010a800007');
INSERT INTO `request_response_relationship` VALUES ('d20678f0-980e-11eb-b61b-42010a800007', 'd95f2baa-980e-11eb-b61b-42010a800007');
COMMIT;

-- ----------------------------
-- Table structure for response
-- ----------------------------
DROP TABLE IF EXISTS `response`;
CREATE TABLE `response` (
  `ResponseId` varchar(255) NOT NULL,
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ResponseDate` datetime(6) DEFAULT NULL,
  `UserId` varchar(45) DEFAULT NULL,
  `Status` tinyint DEFAULT NULL,
  PRIMARY KEY (`ResponseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of response
-- ----------------------------
BEGIN;
INSERT INTO `response` VALUES ('254d8802-97f3-11eb-b61b-42010a800007', 'f65b1685-980e-11eb-b61b-42010a800007', '2021-04-08 02:05:59.000000', '1', 1);
INSERT INTO `response` VALUES ('264ed497-97f3-11eb-b61b-42010a800007', 'b00f8e2d-9827-11eb-b61b-42010a800007', '2021-04-08 05:02:59.000000', '2', 1);
INSERT INTO `response` VALUES ('4e762700-9829-11eb-b61b-42010a800007', NULL, NULL, '1', 0);
INSERT INTO `response` VALUES ('4ebdd129-9829-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('628487a0-97e9-11eb-b61b-42010a800007', '7fde7cae-97e9-11eb-b61b-42010a800007', '2021-04-07 21:37:49.000000', '1', 1);
INSERT INTO `response` VALUES ('62be30a2-97e9-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('7725e6b0-9829-11eb-b61b-42010a800007', NULL, NULL, '1', 0);
INSERT INTO `response` VALUES ('773672bd-9829-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('8f74f1ee-9818-11eb-b61b-42010a800007', NULL, NULL, '1', 0);
INSERT INTO `response` VALUES ('8fa8393f-9818-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('af24f79c-9811-11eb-b61b-42010a800007', NULL, NULL, '1', 0);
INSERT INTO `response` VALUES ('af476baf-9811-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('b5ed55b5-9811-11eb-b61b-42010a800007', NULL, NULL, '1', 0);
INSERT INTO `response` VALUES ('b5f85225-9811-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('c9410929-9811-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('d41450be-9811-11eb-b61b-42010a800007', NULL, NULL, '1', 0);
INSERT INTO `response` VALUES ('d423aace-9811-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('d95f2baa-980e-11eb-b61b-42010a800007', '136f4ac6-9829-11eb-b61b-42010a800007', '2021-04-08 05:12:55.000000', '2', 1);
INSERT INTO `response` VALUES ('dd27991e-9811-11eb-b61b-42010a800007', NULL, NULL, '1', 0);
INSERT INTO `response` VALUES ('dd31ae16-9811-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
INSERT INTO `response` VALUES ('dfc36254-980e-11eb-b61b-42010a800007', NULL, NULL, '2', 0);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Unique ID for each user',
  `UserName` varchar(255) DEFAULT NULL COMMENT 'User name for each user',
  `Email` varchar(255) NOT NULL COMMENT 'Email for each user',
  `City` varchar(255) DEFAULT NULL COMMENT 'The city which users llived in',
  `Country` varchar(255) DEFAULT NULL COMMENT 'The country which users lived in',
  `Membership` int DEFAULT NULL COMMENT 'The membership of each account (Gold/Diamond)(1/2)',
  `PhotoPath` varchar(255) DEFAULT NULL COMMENT 'The path of video which is stored in the server',
  `PassWord` varchar(255) DEFAULT NULL COMMENT 'The passwrod for each account',
  `UserLevel` varchar(255) DEFAULT '0' COMMENT 'The user level of each account',
  `UserExperience` mediumint DEFAULT NULL COMMENT 'The point gained of each user level',
  `RequestCount` int DEFAULT NULL,
  `RespondCount` int DEFAULT NULL,
  `ThumbCount` int DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Role` int DEFAULT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `UserId_UNIQUE` (`UserId`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1', '1', '1@w.com', 'wuhan', 'china', NULL, '|images|upload_8fc7ba733294f8da82d6a9be505e4277.jpg', '1', '0', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('10', 'ante', 'vitae.velit@Sed.co.uk', 'Fredericton', 'Canada', 2, 'blue', 'Folic Acid', 'Customer Relations', 813, 25, 93, 22, 17, NULL);
INSERT INTO `user` VALUES ('100', 'necs,', 'risus@vehicula.edu', 'Canora', 'Canada', 2, 'orange', 'Diovan', 'Finances', 3362, 86, 86, 36, 107, NULL);
INSERT INTO `user` VALUES ('10001', 'root', '123456@gmail.com', 'Ottawa', 'Canada', 0, '/image/userpicture.jpeg', '123456', '0', 0, 20, 20, 0, 18, 1);
INSERT INTO `user` VALUES ('101', 'velit.', 'tincidunt.nunc.ac@Maecenasliberoest.ca', 'Silverton', 'Canada', 2, 'orange', 'Warfarin Sodium', 'Advertising', 3131, 76, 97, 83, 108, NULL);
INSERT INTO `user` VALUES ('102', 'nunc', 'in@eleifend.edu', 'Valleyview', 'Canada', 1, 'yellow', 'Abilify', 'Asset Management', 3075, 94, 87, 2, 109, NULL);
INSERT INTO `user` VALUES ('103', 'leof.', 'quis.turpis.vitae@per.ca', 'Flin Flon', 'Canada', 2, 'blue', 'Triamterene/Hydrochlorothiazide', 'Human Resources', 2974, 76, 69, 76, 110, NULL);
INSERT INTO `user` VALUES ('104', 'porttitorf', 'orci.Ut.sagittis@ante.com', 'Watson Lake', 'Canada', 2, 'green', 'Actos', 'Public Relations', 3439, 26, 45, 31, 111, NULL);
INSERT INTO `user` VALUES ('105', 'disf', 'rutrum.justo@dolorFuscemi.org', 'North Bay', 'Canada', 2, 'red', 'Fluticasone Propionate', 'Accounting', 1314, 45, 12, 88, 112, NULL);
INSERT INTO `user` VALUES ('11', 'ut,', 'dapibus.quam@metusvitae.edu', 'Wolfville', 'Canada', 2, 'indigo', 'Nasonex', 'Research and Development', 4395, 36, 11, 12, 18, NULL);
INSERT INTO `user` VALUES ('12', 'dolor', 'cursus.et.eros@erat.net', 'Watson Lake', 'Canada', 2, 'green', 'Metoprolol Tartrate ', 'Asset Management', 1783, 32, 10, 78, 19, NULL);
INSERT INTO `user` VALUES ('13', 'mi', 'mauris@dictum.org', 'Saint-Hilarion', 'Canada', 2, 'red', 'Hydrocodone/APAP', 'Accounting', 2203, 18, 63, 36, 20, NULL);
INSERT INTO `user` VALUES ('13282913-97be-11eb-b61b-42010a800007', '33', '3', 'wuhan', 'china', NULL, '|images|upload_efc60435847fd4678591eb756b875c64.jpg', '3', '0', NULL, NULL, NULL, NULL, 24, NULL);
INSERT INTO `user` VALUES ('14', 'arcu.', 'vulputate.velit@sedhendrerita.com', 'Rae-Edzo', 'Canada', 1, 'red', 'Tamsulosin HCl', 'Customer Relations', 279, 53, 44, 13, 21, NULL);
INSERT INTO `user` VALUES ('15', 'enim.', 'cursus@maurissapiencursus.edu', 'Kimberly', 'Canada', 1, 'blue', 'Lovastatin', 'Research and Development', 602, 41, 6, 96, 22, NULL);
INSERT INTO `user` VALUES ('16', 'magna', 'ornare.libero@bibendum.org', 'Cariboo Regional District', 'Canada', 1, 'blue', 'Zetia', 'Tech Support', 2282, 15, 54, 33, 23, NULL);
INSERT INTO `user` VALUES ('17', 'at', 'nec@malesuadamalesuadaInteger.com', 'Airdrie', 'Canada', 1, 'blue', 'Crestor', 'Research and Development', 3133, 17, 25, 1, 24, NULL);
INSERT INTO `user` VALUES ('18', 'enimgggg.', 'elementum.sem.vitae@nullamagnamalesuada.org', 'Watson Lake', 'Canada', 2, 'violet', 'Lidoderm', 'Asset Management', 1392, 4, 1, 65, 25, NULL);
INSERT INTO `user` VALUES ('19', 'vitae', 'scelerisque@mollis.org', 'Cambridge Bay', 'Canada', 2, 'yellow', 'Azithromycin', 'Legal Department', 1614, 48, 5, 52, 26, NULL);
INSERT INTO `user` VALUES ('1bd80cd2-7169-11eb-a09f-f0795907d9ec', 'Liverpool', '1fdsf467@qq.com', 'Wuhan', 'China', 5, '|images|1.png', '1232144', '3', 1213, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('2', '2', '2@w.com', 'Ottawa', 'Canada', NULL, '|images|upload_d31ce45691e8f0a1d767005c1080cbd9.jpg', '2', '0', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('20', 'sit', 'sapien.molestie@aliquetnecimperdiet.com', 'North Battleford', 'Canada', 2, 'orange', 'Prednisone', 'Tech Support', 692, 61, 44, 1, 27, NULL);
INSERT INTO `user` VALUES ('207047bf-9818-11eb-b61b-42010a800007', '3', '3@w.com', 'wuhan', 'china', NULL, '|images|upload_9b3026dd378333d892349c5e83e9b0c4.jpg', '3', '0', NULL, NULL, NULL, NULL, 23, NULL);
INSERT INTO `user` VALUES ('21', 'blandit', 'tortor.dictum.eu@SuspendissesagittisNullam.com', 'Argyle', 'Canada', 2, 'green', 'Flovent HFA', 'Quality Assurance', 2445, 24, 54, 28, 28, NULL);
INSERT INTO `user` VALUES ('22', 'Phasellus', 'blandit.viverra.Donec@sitametconsectetuer.net', 'Calder', 'Canada', 2, 'violet', 'Lisinopril', 'Public Relations', 4819, 76, 88, 89, 29, NULL);
INSERT INTO `user` VALUES ('23', 'metus', 'rutrum@anteipsumprimis.net', 'Brandon', 'Canada', 2, 'yellow', 'Metformin HCl', 'Human Resources', 1786, 56, 45, 58, 30, NULL);
INSERT INTO `user` VALUES ('24', 'enim,', 'hendrerit.Donec@pede.org', 'Burin', 'Canada', 1, 'indigo', 'Cialis', 'Accounting', 2069, 50, 6, 21, 31, NULL);
INSERT INTO `user` VALUES ('24be2454-97ba-11eb-b61b-42010a800007', 'huh', '123@qq.com', 'wuhan', 'china', NULL, '|images|upload_fc39e4485bb70d8d793ac48613d5f290.jpg', '1', '0', NULL, NULL, NULL, NULL, 25, NULL);
INSERT INTO `user` VALUES ('25', 'amet', 'adipiscing.ligula.Aenean@gravida.org', 'Markham', 'Canada', 2, 'red', 'Carvedilol', 'Research and Development', 211, 46, 88, 7, 32, NULL);
INSERT INTO `user` VALUES ('26', 'tincidunt', 'odio.a.purus@imperdiet.co.uk', 'Minitonas', 'Canada', 2, 'violet', 'Tramadol HCl', 'Research and Development', 3914, 34, 2, 51, 33, NULL);
INSERT INTO `user` VALUES ('27', 'magnacarta', 'nisl@sitametornare.net', 'Montague', 'Canada', 1, 'violet', 'Sulfamethoxazole/Trimethoprim', 'Customer Relations', 3144, 100, 45, 74, 34, NULL);
INSERT INTO `user` VALUES ('28', 'Maurisii', 'diam@dictum.org', 'Gravelbourg', 'Canada', 1, 'red', 'Prednisone', 'Tech Support', 2725, 44, 43, 34, 35, NULL);
INSERT INTO `user` VALUES ('29', 'ullamcorper', 'Proin.vel.arcu@utquam.org', 'North Battleford', 'Canada', 2, 'indigo', 'Tricor', 'Sales and Marketing', 419, 14, 44, 52, 36, NULL);
INSERT INTO `user` VALUES ('30', 'fermentum', 'Suspendisse.sagittis@fringilla.co.uk', 'Grande Prairie', 'Canada', 1, 'blue', 'Symbicort', 'Public Relations', 467, 17, 89, 49, 37, NULL);
INSERT INTO `user` VALUES ('31', 'Morbi', 'sed@Donec.co.uk', 'Saint John', 'Canada', 1, 'yellow', 'Furosemide', 'Research and Development', 1596, 92, 46, 24, 38, NULL);
INSERT INTO `user` VALUES ('32', 'aliquet', 'Donec.nibh.enim@luctusetultrices.com', 'Langley', 'Canada', 2, 'red', 'Lovastatin', 'Legal Department', 2744, 8, 22, 23, 39, NULL);
INSERT INTO `user` VALUES ('33', 'magnolia.', 'non.massa@vulputate.com', 'Weyburn', 'Canada', 2, 'blue', 'TriNessa', 'Asset Management', 3225, 41, 1, 45, 40, NULL);
INSERT INTO `user` VALUES ('34', 'faucibus', 'risus@euismodmauriseu.com', 'Smoky Lake', 'Canada', 2, 'indigo', 'Atenolol', 'Public Relations', 1072, 29, 63, 91, 41, NULL);
INSERT INTO `user` VALUES ('35', 'augue', 'quam.elementum@ut.com', 'Flin Flon', 'Canada', 1, 'orange', 'Amlodipine Besylate', 'Human Resources', 4591, 5, 64, 76, 42, NULL);
INSERT INTO `user` VALUES ('35c69e1a-7169-11eb-a09f-f0795907d9ec', 'Manchester', '2121127@qq.com', 'Tokyo', 'Japan', 5, '|images|2.jpg', 'fdd', '3', 1213, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('36', 'cursus.', 'lacus@magnaNamligula.org', 'Fogo', 'Canada', 1, 'orange', 'Lorazepam', 'Media Relations', 4161, 59, 41, 56, 43, NULL);
INSERT INTO `user` VALUES ('37', 'nisi', 'mi@tellusidnunc.edu', 'Watson Lake', 'Canada', 1, 'red', 'Vitamin D (Rx)', 'Media Relations', 4367, 22, 68, 28, 44, NULL);
INSERT INTO `user` VALUES ('38', 'ipsum', 'Ut.semper.pretium@Integer.net', 'Gander', 'Canada', 1, 'blue', 'Lisinopril', 'Payroll', 3390, 29, 84, 57, 45, NULL);
INSERT INTO `user` VALUES ('39', 'orci', 'Aliquam.auctor.velit@tortorNunc.co.uk', 'Edmundston', 'Canada', 2, 'violet', 'Alprazolam', 'Accounting', 2944, 45, 24, 90, 46, NULL);
INSERT INTO `user` VALUES ('40', 'eget,', 'vel.quam@lacus.org', 'Lourdes', 'Canada', 2, 'orange', 'Suboxone', 'Public Relations', 4030, 24, 93, 69, 47, NULL);
INSERT INTO `user` VALUES ('41', 'Ut', 'lectus@magnaPhasellusdolor.com', 'Gravelbourg', 'Canada', 1, 'indigo', 'Triamterene/Hydrochlorothiazide', 'Asset Management', 2800, 91, 82, 23, 48, NULL);
INSERT INTO `user` VALUES ('42', 'ameti', 'ipsum.primis@ategestas.net', 'Miramichi', 'Canada', 1, 'orange', 'Atenolol', 'Payroll', 607, 93, 55, 70, 49, NULL);
INSERT INTO `user` VALUES ('43', 'acy,', 'sit@nonlacinia.ca', 'Pictou', 'Canada', 1, 'violet', 'Clonazepam', 'Legal Department', 4472, 30, 63, 13, 50, NULL);
INSERT INTO `user` VALUES ('44', 'magnaghu', 'nulla.In@Donecsollicitudin.net', 'Argyle', 'Canada', 1, 'blue', 'Alendronate Sodium', 'Public Relations', 790, 68, 65, 41, 51, NULL);
INSERT INTO `user` VALUES ('45', 'nibht.', 'Aliquam.rutrum@Nulla.ca', 'Ancaster Town', 'Canada', 2, 'blue', 'Trazodone HCl', 'Tech Support', 4903, 3, 11, 31, 52, NULL);
INSERT INTO `user` VALUES ('46', 'rutrumt,', 'penatibus.et@Aliquamnec.ca', 'Westmount', 'Canada', 2, 'violet', 'Fluticasone Propionate', 'Media Relations', 2678, 24, 99, 43, 53, NULL);
INSERT INTO `user` VALUES ('47', 'actt', 'ante@purusmaurisa.edu', 'Vilna', 'Canada', 1, 'red', 'Fluoxetine HCl', 'Customer Service', 277, 24, 35, 17, 54, NULL);
INSERT INTO `user` VALUES ('48', 'duit.', 'adipiscing@Incondimentum.edu', 'Bathurst', 'Canada', 1, 'red', 'Omeprazole (Rx)', 'Tech Support', 3941, 72, 41, 42, 55, NULL);
INSERT INTO `user` VALUES ('49', 'vulputatet', 'parturient.montes@laoreet.ca', 'Iqaluit', 'Canada', 2, 'orange', 'Triamterene/Hydrochlorothiazide', 'Public Relations', 1934, 55, 14, 40, 56, NULL);
INSERT INTO `user` VALUES ('50', 'Pellentesquey', 'nunc.nulla@luctusetultrices.org', 'Berwick', 'Canada', 2, 'indigo', 'Lantus', 'Sales and Marketing', 4326, 79, 92, 53, 57, NULL);
INSERT INTO `user` VALUES ('51', 'lectus', 'augue.eu@neque.com', 'Pangnirtung', 'Canada', 1, 'red', 'Nuvaring', 'Finances', 941, 90, 65, 72, 58, NULL);
INSERT INTO `user` VALUES ('52', 'eut,', 'rutrum.magna@consequatdolor.org', 'Bonavista', 'Canada', 1, 'yellow', 'Furosemide', 'Tech Support', 2691, 8, 25, 11, 59, NULL);
INSERT INTO `user` VALUES ('53', 'Quisquew', 'facilisis@lacus.com', 'Beausejour', 'Canada', 1, 'violet', 'Zolpidem Tartrate', 'Tech Support', 754, 65, 68, 57, 60, NULL);
INSERT INTO `user` VALUES ('54', 'sitww', 'dictum.ultricies@diamProindolor.edu', 'Edmundston', 'Canada', 2, 'red', 'Prednisone', 'Advertising', 647, 56, 49, 32, 61, NULL);
INSERT INTO `user` VALUES ('55', 'nullaw', 'lorem.vitae.odio@imperdiet.co.uk', 'La Baie', 'Canada', 2, 'violet', 'Zolpidem Tartrate', 'Finances', 3778, 51, 100, 96, 62, NULL);
INSERT INTO `user` VALUES ('56', 'risuss.', 'sodales.elit.erat@urna.co.uk', 'Gander', 'Canada', 2, 'indigo', 'Lisinopril/Hydrochlorothiazide', 'Media Relations', 1711, 30, 45, 6, 63, NULL);
INSERT INTO `user` VALUES ('57', 'acdd,', 'sem.consequat@lacinia.edu', 'Whitehorse', 'Canada', 1, 'violet', 'Gabapentin', 'Advertising', 1551, 10, 92, 42, 64, NULL);
INSERT INTO `user` VALUES ('58', 'ullamcorperd,', 'semper@nonjustoProin.ca', 'Brandon', 'Canada', 1, 'violet', 'Ranitidine HCl', 'Research and Development', 3760, 83, 87, 68, 65, NULL);
INSERT INTO `user` VALUES ('59', 'ornarewq', 'ac@posuerecubilia.co.uk', 'La Baie', 'Canada', 1, 'orange', 'Diovan', 'Research and Development', 2802, 32, 35, 56, 66, NULL);
INSERT INTO `user` VALUES ('59ea2be5-93da-11eb-b61b-42010a800007', 'idiot', '1@qq.com', 'Tokey', 'Japan', NULL, '|images|upload_f083d392508c5e702de53a2569bbf561.jpg', '1', '0', NULL, NULL, NULL, NULL, 26, NULL);
INSERT INTO `user` VALUES ('6', 'mauris', 'ornare.egestas.ligula@purusinmolestie.co.uk', 'Beausejour', 'Canada', 2, 'green', 'Alprazolam', 'Media Relations', 1110, 26, 24, 71, 13, NULL);
INSERT INTO `user` VALUES ('60', 'augued', 'amet.faucibus@sedfacilisisvitae.edu', 'Vancouver', 'Canada', 2, 'violet', 'Omeprazole (Rx)', 'Research and Development', 4453, 6, 20, 56, 67, NULL);
INSERT INTO `user` VALUES ('61', 'nonsd,', 'eget.mollis@in.co.uk', 'Milestone', 'Canada', 2, 'yellow', 'Lisinopril', 'Tech Support', 1463, 92, 22, 40, 68, NULL);
INSERT INTO `user` VALUES ('62', 'molliss', 'lorem@arcuVivamussit.ca', 'Daly', 'Canada', 1, 'yellow', 'Fluticasone Propionate', 'Public Relations', 3208, 22, 76, 99, 69, NULL);
INSERT INTO `user` VALUES ('63', 'etew', 'at.nisi@blanditcongueIn.ca', 'Dieppe', 'Canada', 2, 'yellow', 'Venlafaxine HCl ER', 'Research and Development', 4766, 78, 93, 53, 70, NULL);
INSERT INTO `user` VALUES ('64', 'urnwa', 'dui@consectetueripsumnunc.org', 'Halifax', 'Canada', 1, 'blue', 'Cymbalta', 'Asset Management', 1085, 100, 33, 99, 71, NULL);
INSERT INTO `user` VALUES ('65', 'ligulad.', 'Donec.nibh.Quisque@egetlaoreetposuere.com', 'Chilliwack', 'Canada', 1, 'orange', 'Furosemide', 'Customer Service', 437, 74, 53, 12, 72, NULL);
INSERT INTO `user` VALUES ('66', 'aswd,', 'mollis.vitae.posuere@rutrumFuscedolor.co.uk', 'Saint John', 'Canada', 2, 'indigo', 'Amlodipine Besylate', 'Customer Service', 403, 56, 30, 23, 73, NULL);
INSERT INTO `user` VALUES ('67', 'malesduada', 'Sed@etmagnis.net', 'Lourdes', 'Canada', 2, 'green', 'Benicar', 'Public Relations', 1721, 47, 56, 26, 74, NULL);
INSERT INTO `user` VALUES ('68', 'tristiqued', 'vel.mauris@vitaesodales.net', 'Marystown', 'Canada', 2, 'violet', 'Citalopram HBR', 'Human Resources', 1458, 71, 71, 4, 75, NULL);
INSERT INTO `user` VALUES ('69', 'ided', 'Cras@mi.net', 'Trois-Rivières', 'Canada', 1, 'orange', 'Gabapentin', 'Accounting', 4226, 48, 63, 9, 76, NULL);
INSERT INTO `user` VALUES ('7', 'magna.', 'tempor.erat@ut.co.uk', 'Gjoa Haven', 'Canada', 1, 'violet', 'Ventolin HFA', 'Quality Assurance', 785, 10, 39, 50, 14, NULL);
INSERT INTO `user` VALUES ('70', 'ddui', 'nisi.Cum.sociis@eleifendvitaeerat.org', 'Berwick', 'Canada', 2, 'red', 'Lisinopril', 'Human Resources', 2557, 75, 85, 67, 77, NULL);
INSERT INTO `user` VALUES ('71', 'amdet,', 'libero.Morbi.accumsan@maurisut.edu', 'Pointe-au-Pic', 'Canada', 2, 'yellow', 'Oxycodone/APAP', 'Sales and Marketing', 2772, 99, 31, 72, 78, NULL);
INSERT INTO `user` VALUES ('72', 'iddd,', 'vitae.semper.egestas@sitamet.org', 'Campbellton', 'Canada', 1, 'green', 'Singulair', 'Tech Support', 4584, 23, 60, 78, 79, NULL);
INSERT INTO `user` VALUES ('73', 'neon,', 'enim.sit.amet@Aliquamtinciduntnunc.edu', 'Winnipeg', 'Canada', 1, 'red', 'Lisinopril', 'Public Relations', 1094, 67, 95, 15, 80, NULL);
INSERT INTO `user` VALUES ('74', 'Pwroin', 'mollis.lectus.pede@euplacerateget.co.uk', 'Hudson Bay', 'Canada', 2, 'green', 'Gabapentin', 'Quality Assurance', 2355, 24, 15, 88, 81, NULL);
INSERT INTO `user` VALUES ('75', 'wa,', 'non.lacinia.at@tempor.co.uk', 'Minitonas', 'Canada', 2, 'yellow', 'Potassium Chloride', 'Tech Support', 1474, 80, 22, 2, 82, NULL);
INSERT INTO `user` VALUES ('76', 'purdus,', 'rhoncus@nondapibusrutrum.org', 'Watson Lake', 'Canada', 2, 'red', 'Lisinopril', 'Media Relations', 1557, 68, 23, 62, 83, NULL);
INSERT INTO `user` VALUES ('77', 'Dodnec', 'hendrerit.a@ategestasa.com', 'Bathurst', 'Canada', 2, 'green', 'Meloxicam', 'Asset Management', 1498, 56, 49, 25, 84, NULL);
INSERT INTO `user` VALUES ('78', 'auctsor,', 'nec@senectus.co.uk', 'Prince Albert', 'Canada', 1, 'blue', 'Triamterene/Hydrochlorothiazide', 'Asset Management', 4326, 19, 46, 22, 85, NULL);
INSERT INTO `user` VALUES ('79', 'suescipit,', 'Cum@Quisque.net', 'Hudson Bay', 'Canada', 2, 'blue', 'Amlodipine Besylate', 'Payroll', 295, 26, 14, 57, 86, NULL);
INSERT INTO `user` VALUES ('8', 'tempor', 'suscipit@semperetlacinia.ca', 'Neuville', 'Canada', 2, 'yellow', 'Abilify', 'Human Resources', 2949, 25, 34, 57, 15, NULL);
INSERT INTO `user` VALUES ('80', 'lucwtus', 'nulla.magna.malesuada@loremeget.edu', 'Watson Lake', 'Canada', 1, 'violet', 'Lovaza', 'Payroll', 143, 55, 23, 7, 87, NULL);
INSERT INTO `user` VALUES ('81', 'mowntes,', 'id@vestibulumMauris.ca', 'St. Catharines', 'Canada', 2, 'indigo', 'Lantus', 'Sales and Marketing', 993, 63, 79, 97, 88, NULL);
INSERT INTO `user` VALUES ('82', 'inteerdum', 'a.malesuada.id@Aeneaneuismodmauris.com', 'Houston', 'Canada', 1, 'indigo', 'Bystolic', 'Legal Department', 1889, 88, 95, 85, 89, NULL);
INSERT INTO `user` VALUES ('83', 'mowntese,', 'bibendum@temporarcuVestibulum.co.uk', 'Greater Sudbury', 'Canada', 1, 'indigo', 'Simvastatin', 'Payroll', 3950, 70, 31, 33, 90, NULL);
INSERT INTO `user` VALUES ('84', 'Cuwrabitur', 'egestas.Aliquam.nec@egestas.edu', 'Gaspé', 'Canada', 1, 'red', 'Diazepam', 'Asset Management', 1975, 40, 61, 42, 91, NULL);
INSERT INTO `user` VALUES ('85', 'ewt', 'vehicula.Pellentesque.tincidunt@ac.ca', 'Richmond', 'Canada', 1, 'indigo', 'Hydrocodone/APAP', 'Customer Service', 1567, 29, 20, 28, 92, NULL);
INSERT INTO `user` VALUES ('86', 'magdna.', 'libero.Integer@eu.org', 'Daly', 'Canada', 1, 'violet', 'Fluticasone Propionate', 'Sales and Marketing', 145, 2, 38, 21, 93, NULL);
INSERT INTO `user` VALUES ('87', 'lectuss,', 'aliquam@mauris.net', 'Montague', 'Canada', 2, 'green', 'Metoprolol Tartrate ', 'Customer Relations', 2124, 50, 50, 100, 94, NULL);
INSERT INTO `user` VALUES ('88', 'ligulas.', 'lorem.lorem@Aeneaneuismod.edu', 'Stonewall', 'Canada', 1, 'red', 'Atenolol', 'Asset Management', 686, 13, 44, 42, 95, NULL);
INSERT INTO `user` VALUES ('89', 'liberos.', 'massa.Quisque@lobortisquam.co.uk', 'Watson Lake', 'Canada', 1, 'green', 'Gabapentin', 'Payroll', 1127, 37, 14, 9, 96, NULL);
INSERT INTO `user` VALUES ('9', 'et,', 'dictum@elementum.org', 'Stratford', 'Canada', 1, 'red', 'Januvia', 'Tech Support', 2996, 62, 70, 40, 16, NULL);
INSERT INTO `user` VALUES ('90', 'enimsds.', 'per.conubia.nostra@diamSeddiam.ca', 'Montague', 'Canada', 1, 'orange', 'Methylprednisolone', 'Media Relations', 3240, 12, 9, 46, 97, NULL);
INSERT INTO `user` VALUES ('91', 'acs', 'Phasellus@dolordapibusgravida.edu', 'Whitehorse', 'Canada', 1, 'violet', 'Synthroid', 'Customer Service', 2710, 43, 17, 36, 98, NULL);
INSERT INTO `user` VALUES ('92', 'Suspendissew', 'non.magna.Nam@ullamcorperviverra.co.uk', 'Watson Lake', 'Canada', 1, 'red', 'Simvastatin', 'Human Resources', 3396, 91, 48, 71, 99, NULL);
INSERT INTO `user` VALUES ('93', 'Aeneans', 'Praesent.eu.nulla@tempor.ca', 'Stratford', 'Canada', 1, 'green', 'Diovan', 'Sales and Marketing', 2077, 41, 100, 68, 100, NULL);
INSERT INTO `user` VALUES ('94', 'auctor,w', 'tristique@Vestibulum.co.uk', 'Harbour Grace', 'Canada', 2, 'indigo', 'Simvastatin', 'Tech Support', 1674, 36, 89, 96, 101, NULL);
INSERT INTO `user` VALUES ('95', 'placeratw', 'augue@penatibus.net', 'Burin', 'Canada', 1, 'orange', 'Klor-Con M20', 'Tech Support', 788, 84, 17, 71, 102, NULL);
INSERT INTO `user` VALUES ('96802a67-9037-11eb-b61b-42010a800007', 'wwwwwwww', '1234@w.com', 'Wuhan', 'China', NULL, NULL, '121212', '0', NULL, NULL, NULL, NULL, 26, NULL);
INSERT INTO `user` VALUES ('97', 'posueres', 'sit.amet.luctus@tortor.co.uk', 'Fort McPherson', 'Canada', 2, 'blue', 'Clonazepam', 'Advertising', 1190, 59, 71, 16, 104, NULL);
INSERT INTO `user` VALUES ('98', 'Quisques', 'elit.pharetra.ut@turpis.com', 'Annapolis Royal', 'Canada', 2, 'orange', 'Sertraline HCl', 'Asset Management', 4434, 86, 88, 38, 105, NULL);
INSERT INTO `user` VALUES ('99', 'Proins', 'pede.Suspendisse@Cumsociis.net', 'Cornwall', 'Canada', 2, 'orange', 'Zetia', 'Asset Management', 3606, 86, 35, 97, 106, NULL);
INSERT INTO `user` VALUES ('a13299f7-95c9-11eb-b61b-42010a800007', '我是傻逼633', '1', '1', 'nihng', NULL, '|images|upload_8d7bcfd5ecfecead6993f0b1ca5c16cd.jpg', '1', '0', NULL, NULL, NULL, NULL, 26, NULL);
INSERT INTO `user` VALUES ('a79826a8-7168-11eb-a09f-f0795907d9ec', 'Username', '425786225@qq.com', 'Tokyo', 'China', 2, '|images|3.png', 'Password', '6', 12345, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('c89eb0a7-9037-11eb-b61b-42010a800007', 'wwwwwwww213321', '1234@w.com', 'Wuhan', 'China', NULL, NULL, '121212', '0', NULL, NULL, NULL, NULL, 26, NULL);
INSERT INTO `user` VALUES ('cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'ffffl', '1234567@qq.com', 'Wuhan', 'China', 3, '|images|upload_2ed4c97eb628d4bb98c1c9afcad2a7d1.jpg', 'Yujian', '5', 1213, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('ce5bf673-9037-11eb-b61b-42010a800007', 'wwwwwwww213321213123', '1234@w.com', 'Wuhan', 'China', NULL, NULL, '121212', '0', NULL, NULL, NULL, NULL, 26, NULL);
INSERT INTO `user` VALUES ('d5586140-9037-11eb-b61b-42010a800007', 'eweqweq', '1234@w.com', 'Wuhan', 'China', NULL, NULL, '121212', '0', NULL, NULL, NULL, NULL, 26, NULL);
INSERT INTO `user` VALUES ('d9e22545-97b9-11eb-b61b-42010a800007', 'huhu', '123', 'Wuhan', 'china', NULL, NULL, '123@qq.com', '0', NULL, NULL, NULL, NULL, 26, NULL);
INSERT INTO `user` VALUES ('ea598ce5-7168-11eb-a09f-f0795907d9ec', 'Haiyue Li', 'huhuhu@qq.com', 'Xian', 'China', 5, '|images|5.png', 'huhuhu', '3', 1213, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES ('ed4de51e-97bd-11eb-b61b-42010a800007', '21', '2', 'wuhan', 'china', NULL, '|images|upload_37ede4c9e034a2c1d48ead0601dd95f9.jpg', '2', '0', NULL, NULL, NULL, NULL, 25, NULL);
INSERT INTO `user` VALUES ('select * from user where UserId=10001;\n', 'Donecs', 'velit.eu.sem@senectuset.co.uk', 'Edmundston', 'Canada', 1, 'green', 'LevothyroxineSodium', 'Tech Support', 1013, 36, 1, 21, 103, NULL);
COMMIT;

-- ----------------------------
-- Table structure for user_keyword_relationship
-- ----------------------------
DROP TABLE IF EXISTS `user_keyword_relationship`;
CREATE TABLE `user_keyword_relationship` (
  `UserId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `KeywordId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`UserId`,`KeywordId`),
  KEY `UKR_KeywordId` (`KeywordId`),
  CONSTRAINT `UKR_KeywordId` FOREIGN KEY (`KeywordId`) REFERENCES `keyword` (`KeywordId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UKR_UserId` FOREIGN KEY (`UserId`) REFERENCES `user` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_keyword_relationship
-- ----------------------------
BEGIN;
INSERT INTO `user_keyword_relationship` VALUES ('a13299f7-95c9-11eb-b61b-42010a800007', '08b833fb-964f-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('a13299f7-95c9-11eb-b61b-42010a800007', '08ce40ee-964f-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('cbdef4d4-7168-11eb-a09f-f0795907d9ec', '1');
INSERT INTO `user_keyword_relationship` VALUES ('7', '10');
INSERT INTO `user_keyword_relationship` VALUES ('8', '10');
INSERT INTO `user_keyword_relationship` VALUES ('9', '101');
INSERT INTO `user_keyword_relationship` VALUES ('10', '11');
INSERT INTO `user_keyword_relationship` VALUES ('11', '11');
INSERT INTO `user_keyword_relationship` VALUES ('8', '11');
INSERT INTO `user_keyword_relationship` VALUES ('10', '119');
INSERT INTO `user_keyword_relationship` VALUES ('9', '12');
INSERT INTO `user_keyword_relationship` VALUES ('6', '124');
INSERT INTO `user_keyword_relationship` VALUES ('7', '125');
INSERT INTO `user_keyword_relationship` VALUES ('11', '13');
INSERT INTO `user_keyword_relationship` VALUES ('12', '14');
INSERT INTO `user_keyword_relationship` VALUES ('1', '1c96d05b-97e0-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('13282913-97be-11eb-b61b-42010a800007', '207dfc8c-97be-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('13282913-97be-11eb-b61b-42010a800007', '207dfd70-97be-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('13282913-97be-11eb-b61b-42010a800007', '207e09ee-97be-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('10', '29');
INSERT INTO `user_keyword_relationship` VALUES ('12', '29');
INSERT INTO `user_keyword_relationship` VALUES ('cbdef4d4-7168-11eb-a09f-f0795907d9ec', '38e6a214-964a-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('207047bf-9818-11eb-b61b-42010a800007', '3d370bfd-9818-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('207047bf-9818-11eb-b61b-42010a800007', '3d4acbde-9818-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('207047bf-9818-11eb-b61b-42010a800007', '3d4aced7-9818-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('24be2454-97ba-11eb-b61b-42010a800007', '43175f0f-97ba-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('24be2454-97ba-11eb-b61b-42010a800007', '431781ac-97ba-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('24be2454-97ba-11eb-b61b-42010a800007', '432a9439-97ba-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('2', '551bcc69-9827-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('1', '639a3e35-97e2-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('11', '75');
INSERT INTO `user_keyword_relationship` VALUES ('6', '75');
INSERT INTO `user_keyword_relationship` VALUES ('12', '76');
INSERT INTO `user_keyword_relationship` VALUES ('7', '76');
INSERT INTO `user_keyword_relationship` VALUES ('8', '77');
INSERT INTO `user_keyword_relationship` VALUES ('9', '78');
INSERT INTO `user_keyword_relationship` VALUES ('6', '9');
INSERT INTO `user_keyword_relationship` VALUES ('cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'acfe97a1-964e-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('1', 'ba91e573-97d7-11eb-b61b-42010a800007');
INSERT INTO `user_keyword_relationship` VALUES ('2', 'fbfb53de-9829-11eb-b61b-42010a800007');
COMMIT;

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
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

-- ----------------------------
-- Records of video
-- ----------------------------
BEGIN;
INSERT INTO `video` VALUES ('0080f929-9703-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_c29c1b11365f4318622e56dfdb513afd.mp4', NULL, '2021-04-06 18:07:51.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_55dc04dad42135af985a991f68a8ae26.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('03090395-9714-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_a6098c1fd203b3436ffcfd17bb5eb25c.mp4', NULL, '2021-04-06 20:09:37.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_78f4b98ffec41d9b8a0e29237aa5f3f0.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('06c61e9d-9715-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_8bb2f1c3727458873f255d3d08a41be4.mp4', NULL, '2021-04-06 20:16:52.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_e794af25b945050fb09150f83467f5a2.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('1', 'Chrismas', 'For Chrismas', NULL, '|videos|chrismas3.mp4', NULL, NULL, '1bd80cd2-7169-11eb-a09f-f0795907d9ec', 4, '|videoImages|chrismas3.jpg', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 4);
INSERT INTO `video` VALUES ('1100', '100chocolatemuffin.mp4', 'Baking', 'Cooking', '|videos|100chocolatemuffin.mp4', 100, '2021-01-01 00:00:00.000000', '74', 2, 'path', '30', 2);
INSERT INTO `video` VALUES ('1101', '101dustingcocoa.mp4', 'Baking', 'Cocoa', '|videos|101dustingcocoa.mp4', 101, '2021-01-01 00:00:00.000000', '75', 2, 'path', '31', 2);
INSERT INTO `video` VALUES ('1102', '102agirlmixingchocolatebatter.mp4', 'Baking', 'Cooking', '|videos|102agirlmixingchocolatebatter.mp4', 102, '2021-01-01 00:00:00.000000', '76', 2, 'path', '32', 2);
INSERT INTO `video` VALUES ('1103', '103personslicingbread.mp4', 'Baking', 'Bread', '|videos|103personslicingbread.mp4', 103, '2021-01-01 00:00:00.000000', '77', 2, 'path', '33', 2);
INSERT INTO `video` VALUES ('1104', '104pullapartcroissant.mp4', 'Baking', 'Bread', '|videos|104pullapartcroissant.mp4', 104, '2021-01-01 00:00:00.000000', '78', 2, 'path', '34', 2);
INSERT INTO `video` VALUES ('1105', '105cuttingbread.mp4', 'Baking', 'Bread', '|videos|105cuttingbread.mp4', 105, '2021-01-01 00:00:00.000000', '79', 2, 'path', '35', 2);
INSERT INTO `video` VALUES ('1106', '106cutlemon.mp4', 'Cooking', 'Lemon', '|videos|106cutlemon.mp4', 106, '2021-01-01 00:00:00.000000', '80', 2, 'path', '36', 2);
INSERT INTO `video` VALUES ('1107', '107cutcherrytom.mp4', 'Cooking', 'Cut', '|videos|107cutcherrytom.mp4', 107, '2021-01-01 00:00:00.000000', '81', 2, 'path', '37', 2);
INSERT INTO `video` VALUES ('1108', '108cutgreapefruit.mp4', 'Cooking', 'Cut', '|videos|108cutgreapefruit.mp4', 108, '2021-01-01 00:00:00.000000', '82', 2, 'path', '38', 2);
INSERT INTO `video` VALUES ('1109', '109cutlime.mp4', 'Cooking', 'Cut', '|videos|109cutlime.mp4', 109, '2021-01-01 00:00:00.000000', '83', 2, 'path', '39', 2);
INSERT INTO `video` VALUES ('1110', '110cutpear.mp4', 'Cooking', 'Cut', '|videos|110cutpear.mp4', 110, '2021-01-01 00:00:00.000000', '84', 2, 'path', '40', 2);
INSERT INTO `video` VALUES ('1111', '111cutstrawberries.mp4', 'Cooking', 'Cut', '|videos|111cutstrawberries.mp4', 111, '2021-01-01 00:00:00.000000', '85', 2, 'path', '41', 2);
INSERT INTO `video` VALUES ('1112', '112cuttomato.mp4', 'Cooking', 'Cut', '|videos|112cuttomato.mp4', 112, '2021-01-01 00:00:00.000000', '86', 2, 'path', '42', 2);
INSERT INTO `video` VALUES ('1113', '113cutstrawb.mp4', 'Cooking', 'Baking', '|videos|113cutstrawb.mp4', 113, '2021-01-01 00:00:00.000000', '87', 2, 'path', '43', 2);
INSERT INTO `video` VALUES ('1114', '114cutstrawb.mp4', 'Cooking', 'Cut', '|videos|114cutstrawb.mp4', 114, '2021-01-01 00:00:00.000000', '88', 2, 'path', '43', 2);
INSERT INTO `video` VALUES ('1115', '115cutpineapple.mp4', 'Cooking', 'Cut', '|videos|115cutpineapple.mp4', 115, '2021-01-01 00:00:00.000000', '89', 2, 'path', '44', 2);
INSERT INTO `video` VALUES ('1116', '116cutcabbage.mp4', 'Cooking', 'Cut', '|videos|116cutcabbage.mp4', 116, '2021-01-01 00:00:00.000000', '90', 2, 'path', '45', 1);
INSERT INTO `video` VALUES ('1117', '117cutorange.mp4', 'Cooking', 'Cut', '|videos|117cutorange.mp4', 117, '2021-01-01 00:00:00.000000', '91', 2, 'path', '46', 1);
INSERT INTO `video` VALUES ('1118', '118cuttom.mp4', 'Cooking', 'Cut', '|videos|118cuttom.mp4', 118, '2021-01-01 00:00:00.000000', '92', 2, 'path', '42', 1);
INSERT INTO `video` VALUES ('1119', '119cutonion.mp4', 'Cooking', 'Cut', '|videos|119cutonion.mp4', 119, '2021-01-01 00:00:00.000000', '93', 2, 'path', '46', 1);
INSERT INTO `video` VALUES ('1120', '120cutcarrot.mp4', 'Cooking', 'Cut', '|videos|120cutcarrot.mp4', 120, '2021-01-01 00:00:00.000000', '94', 2, 'path', '48', 1);
INSERT INTO `video` VALUES ('1121', '121cookingtom.mp4', 'Cooking', 'Tomato', '|videos|121cookingtom.mp4', 121, '2021-01-01 00:00:00.000000', '95', 2, 'path', '49', 1);
INSERT INTO `video` VALUES ('1122', '122cookingbeans.mp4', 'Cooking', 'Beans', '|videos|122cookingbeans.mp4', 122, '2021-01-01 00:00:00.000000', 'select * from user where UserId=10001;\n', 2, 'path', '50', 1);
INSERT INTO `video` VALUES ('1123', '123cookingveg.mp4', 'Cooking', 'Vegetable', '|videos|123cookingveg.mp4', 123, '2021-01-01 00:00:00.000000', '97', 2, 'path', '51', 1);
INSERT INTO `video` VALUES ('1124', '124cookingpanveg.mp4', 'Cooking', 'Pan', '|videos|124cookingpanveg.mp4', 124, '2021-01-01 00:00:00.000000', '98', 2, 'path', '51', 1);
INSERT INTO `video` VALUES ('1125', '125dustingcake.mp4', 'Baking', 'Cake', '|videos|125dustingcake.mp4', 125, '2021-01-01 00:00:00.000000', '99', 2, 'path', '52', 1);
INSERT INTO `video` VALUES ('1126', '126womanjumprope.mp4', 'Sport', 'Woman', '|videos|126womanjumprope.mp4', 126, '2021-01-01 00:00:00.000000', '100', 2, 'path', '53', 1);
INSERT INTO `video` VALUES ('1127', '127manbasketball.mp4', 'Sport', 'Man', '|videos|127manbasketball.mp4', 127, '2021-01-01 00:00:00.000000', '101', 2, 'path', '54', 1);
INSERT INTO `video` VALUES ('1128', '128basketball.mp4', 'Sport', 'Basketball', '|videos|128basketball.mp4', 128, '2021-01-01 00:00:00.000000', '102', 2, 'path', '54', 1);
INSERT INTO `video` VALUES ('1129', '129volleyball.mp4', 'Sport', 'Volleyball', '|videos|129volleyball.mp4', 129, '2021-01-01 00:00:00.000000', '103', 2, 'path', '55', 1);
INSERT INTO `video` VALUES ('1130', '130basketball.mp4', 'Sport', 'Basketball', '|videos|130basketball.mp4', 130, '2021-01-01 00:00:00.000000', '104', 2, 'path', '54', 1);
INSERT INTO `video` VALUES ('1131', '131manvolleyball.mp4', 'Sport', 'Volleyball', '|videos|131manvolleyball.mp4', 131, '2021-01-01 00:00:00.000000', '105', 2, 'path', '55', 1);
INSERT INTO `video` VALUES ('1132', '132manvolley.mp4', 'Sport', 'Volleyball', '|videos|132manvolley.mp4', 132, '2021-01-01 00:00:00.000000', '6', 2, 'path', '55', 1);
INSERT INTO `video` VALUES ('1133', '133basketball.mp4', 'Sport', 'Basketball', '|videos|133basketball.mp4', 133, '2021-01-01 00:00:00.000000', '7', 2, 'path', '56', 1);
INSERT INTO `video` VALUES ('1134', '134womanbasketball.mp4', 'Sport', 'Basketball', '|videos|134womanbasketball.mp4', 134, '2021-01-01 00:00:00.000000', '8', 2, 'path', '56', 1);
INSERT INTO `video` VALUES ('1135', '135playball.mp4', 'Sport', 'Basketball', '|videos|135playball.mp4', 135, '2021-01-01 00:00:00.000000', '9', 2, 'path', '56', 1);
INSERT INTO `video` VALUES ('1136', '136basketball.mp4', 'Sport', 'Basketball', '|videos|136basketball.mp4', 136, '2021-01-01 00:00:00.000000', '10', 2, 'path', '54', 1);
INSERT INTO `video` VALUES ('1137', '137manspinbasketb.mp4', 'Sport', 'Basketball', '|videos|137manspinbasketb.mp4', 137, '2021-01-01 00:00:00.000000', '11', 2, 'path', '54', 1);
INSERT INTO `video` VALUES ('1138', '138basket.mp4', 'Sport', 'Woman', '|videos|138basket.mp4', 138, '2021-01-01 00:00:00.000000', '12', 2, 'path', '56', 1);
INSERT INTO `video` VALUES ('1139', '139hockey.mp4', 'Sport', 'Hockey', '|videos|139hockey.mp4', 139, '2021-01-01 00:00:00.000000', '13', 2, 'path', '57', 1);
INSERT INTO `video` VALUES ('1140', '140hockey.mp4', 'Sport', 'Hockey', '|videos|140hockey.mp4', 140, '2021-01-01 00:00:00.000000', '14', 2, 'path', '57', 1);
INSERT INTO `video` VALUES ('1141', '141hockeygame.mp4', 'Sport', 'Hockey', '|videos|141hockeygame.mp4', 141, '2021-01-01 00:00:00.000000', '15', 2, 'path', '57', 1);
INSERT INTO `video` VALUES ('1142', '142hockeyman.mp4', 'Sport', 'Hockey', '|videos|142hockeyman.mp4', 142, '2021-01-01 00:00:00.000000', '16', 2, 'path', '57', 1);
INSERT INTO `video` VALUES ('1143', '143goalie.mp4', 'Sport', 'Hockey', '|videos|143goalie.mp4', 143, '2021-01-01 00:00:00.000000', '17', 2, 'path', '57', 1);
INSERT INTO `video` VALUES ('1144', '144womanjump.mp4', 'Sport', 'Woman', '|videos|144womanjump.mp4', 144, '2021-01-01 00:00:00.000000', '18', 2, 'path', '58', 1);
INSERT INTO `video` VALUES ('1145', '145womanbox.mp4', 'Sport', 'Boxing', '|videos|145womanbox.mp4', 145, '2021-01-01 00:00:00.000000', '19', 2, 'path', '59', 3);
INSERT INTO `video` VALUES ('1146', '146womanbox.mp4', 'Sport', 'Woman', '|videos|146womanbox.mp4', 146, '2021-01-01 00:00:00.000000', '20', 2, 'path', '59', 3);
INSERT INTO `video` VALUES ('1147', '147womanboxing.mp4', 'Sport', 'Woman', '|videos|147womanboxing.mp4', 147, '2021-01-01 00:00:00.000000', '21', 2, 'path', '60', 3);
INSERT INTO `video` VALUES ('1148', '148womanswim.mp4', 'Sport', 'Woman', '|videos|148womanswim.mp4', 148, '2021-01-01 00:00:00.000000', '22', 2, 'path', '60', 3);
INSERT INTO `video` VALUES ('1149', '149womanswim.mp4', 'Sport', 'Woman', '|videos|149womanswim.mp4', 149, '2021-01-01 00:00:00.000000', '23', 2, 'path', '60', 3);
INSERT INTO `video` VALUES ('115', 'Cat Devon Rex', 'cat acting up', 'cat acting up', '|videos|Devon rex.mp4', 3725, '2018-11-11 00:00:00.000000', '10', 3802, 'MNTlqdUWmohzzOkpuwUB', '28', 1090);
INSERT INTO `video` VALUES ('1150', '150womanswim.mp4', 'Sport', 'Woman', '|videos|150womanswim.mp4', 150, '2021-01-01 00:00:00.000000', '24', 2, 'path', '60', 3);
INSERT INTO `video` VALUES ('1151', '151womanswim.mp4', 'Sport', 'Womna', '|videos|151womanswim.mp4', 151, '2021-01-01 00:00:00.000000', '25', 2, 'path', '60', 3);
INSERT INTO `video` VALUES ('1152', '152womanswimming.mp4', 'Sport', 'Woman', '|videos|152womanswimming.mp4', 152, '2021-01-01 00:00:00.000000', '26', 2, 'path', '60', 3);
INSERT INTO `video` VALUES ('1153', '153womanswim.mp4', 'Sport', 'Woman', '|videos|153womanswim.mp4', 153, '2021-01-01 00:00:00.000000', '27', 2, 'path', '60', 3);
INSERT INTO `video` VALUES ('1154', '154artpaint.mp4', 'Art', 'Paint', '|videos|154artpaint.mp4', 154, '2021-01-01 00:00:00.000000', '28', 2, 'path', '61', 3);
INSERT INTO `video` VALUES ('1155', '155artpaint2.mp4', 'Art', 'Paint', '|videos|155artpaint2.mp4', 155, '2021-01-01 00:00:00.000000', '29', 3, 'path', '61', 3);
INSERT INTO `video` VALUES ('1156', '156artpaint3.mp4', 'Art', 'Paint', '|videos|156artpaint3.mp4', 156, '2021-01-01 00:00:00.000000', '30', 3, 'path', '61', 3);
INSERT INTO `video` VALUES ('1157', '157paintings.mp4', 'Art', 'Paint', '|videos|157paintings.mp4', 157, '2021-01-01 00:00:00.000000', '31', 3, 'path', '61', 3);
INSERT INTO `video` VALUES ('1158', '158painting.mp4', 'Art', 'Paint', '|videos|158painting.mp4', 158, '2021-01-01 00:00:00.000000', '32', 3, 'path', '62', 3);
INSERT INTO `video` VALUES ('1159', '159pottery.mp4', 'Art', 'Pottery', '|videos|159pottery.mp4', 159, '2021-01-01 00:00:00.000000', '33', 3, 'path', '63', 3);
INSERT INTO `video` VALUES ('1160', '160pottery.mp4', 'Art', 'Pottery', '|videos|160pottery.mp4', 160, '2021-01-01 00:00:00.000000', '34', 3, 'path', '63', 3);
INSERT INTO `video` VALUES ('1161', '161potteryman.mp4', 'Art', 'Pottery', '|videos|161potteryman.mp4', 161, '2021-01-01 00:00:00.000000', '35', 3, 'path', '63', 3);
INSERT INTO `video` VALUES ('1162', '162pottery.mp4', 'Art', 'Pottery', '|videos|162pottery.mp4', 162, '2021-01-01 00:00:00.000000', '36', 3, 'path', '63', 3);
INSERT INTO `video` VALUES ('1163', '163pottery.mp4', 'Art', 'Pottery', '|videos|163pottery.mp4', 163, '2021-01-01 00:00:00.000000', '37', 3, 'path', '63', 3);
INSERT INTO `video` VALUES ('1164', '164clay.mp4', 'Art', 'Clay', '|videos|164clay.mp4', 164, '2021-01-01 00:00:00.000000', '38', 3, 'path', '63', 3);
INSERT INTO `video` VALUES ('1165', '165clay.mp4', 'Art', 'Clay', '|videos|165clay.mp4', 165, '2021-01-01 00:00:00.000000', '39', 3, 'path', '63', 3);
INSERT INTO `video` VALUES ('1166', '166drawingchristmastree.mp4', 'Art', 'Drawing', '|videos|166drawingchristmastree.mp4', 166, '2021-01-01 00:00:00.000000', '40', 3, 'path', '64', 3);
INSERT INTO `video` VALUES ('1167', '167drawing.mp4', 'Art', 'Drawing', '|videos|167drawing.mp4', 167, '2021-01-01 00:00:00.000000', '41', 3, 'path', '64', 3);
INSERT INTO `video` VALUES ('1168', '168drawingskulls.mp4', 'Art', 'Drawing', '|videos|168drawingskulls.mp4', 168, '2021-01-01 00:00:00.000000', '42', 3, 'path', '64', 3);
INSERT INTO `video` VALUES ('1169', '169colouring.mp4', 'Art', 'Drawing', '|videos|169colouring.mp4', 169, '2021-01-01 00:00:00.000000', '43', 3, 'path', '64', 3);
INSERT INTO `video` VALUES ('1170', '170painting.mp4', 'Art', 'Painting', '|videos|170painting.mp4', 170, '2021-01-01 00:00:00.000000', '44', 3, 'path', '62', 3);
INSERT INTO `video` VALUES ('1171', '171drawing.mp4', 'Art', 'Drawing', '|videos|171drawing.mp4', 171, '2021-01-01 00:00:00.000000', '45', 3, 'path', '64', 3);
INSERT INTO `video` VALUES ('1172', '172drawing.mp4', 'Art', 'Drawing', '|videos|172drawing.mp4', 172, '2021-01-01 00:00:00.000000', '46', 3, 'path', '64', 3);
INSERT INTO `video` VALUES ('1173', '173clay.mp4', 'Art', 'Clay', '|videos|173clay.mp4', 173, '2021-01-01 00:00:00.000000', '47', 3, 'path', '65', 3);
INSERT INTO `video` VALUES ('1174', '174rolling.mp4', 'Baking', 'Rolling', '|videos|174rolling.mp4', 174, '2021-01-01 00:00:00.000000', '48', 3, 'path', '66', 3);
INSERT INTO `video` VALUES ('1175', '175icingcookies.mp4', 'Baking', 'Cookies', '|videos|175icingcookies.mp4', 175, '2021-01-01 00:00:00.000000', '49', 3, 'path', '67', 3);
INSERT INTO `video` VALUES ('1176', '176rollingdough.mp4', 'Cooking', 'Rolling', '|videos|176rollingdough.mp4', 176, '2021-01-01 00:00:00.000000', '50', 3, 'path', '66', 3);
INSERT INTO `video` VALUES ('1177', '177rollingdough.mp4', 'Cooking', 'Rolling', '|videos|177rollingdough.mp4', 177, '2021-01-01 00:00:00.000000', '51', 20, 'path', '66', 3);
INSERT INTO `video` VALUES ('1178', '178rollingdough.mp4', 'Baking', 'Rolling', '|videos|178rollingdough.mp4', 178, '2021-01-01 00:00:00.000000', '52', 20, 'path', '66', 3);
INSERT INTO `video` VALUES ('1179', '179rollingdough.mp4', 'Cooking', 'Rolling', '|videos|179rollingdough.mp4', 179, '2021-01-01 00:00:00.000000', '53', 20, 'path', '66', 3);
INSERT INTO `video` VALUES ('1180', '180rollingdough.mp4', 'Cooking', 'Rolling', '|videos|180rollingdough.mp4', 180, '2021-01-01 00:00:00.000000', '54', 20, 'path', '66', 3);
INSERT INTO `video` VALUES ('1181', '181rollingeaster.mp4', 'Baking', 'Rolling', '|videos|181rollingeaster.mp4', 181, '2021-01-01 00:00:00.000000', '55', 20, 'path', '66', 4);
INSERT INTO `video` VALUES ('1182', '182rolling.mp4', 'Baking', 'Rolling', '|videos|182rolling.mp4', 182, '2021-01-01 00:00:00.000000', '56', 20, 'path', '66', 4);
INSERT INTO `video` VALUES ('1183', '183cuttingdough.mp4', 'Baking', 'Cooking', '|videos|183cuttingdough.mp4', 183, '2021-01-01 00:00:00.000000', '57', 20, 'path', '68', 4);
INSERT INTO `video` VALUES ('1184', '184easterdough.mp4', 'Baking', 'Cookies', '|videos|184easterdough.mp4', 184, '2021-01-01 00:00:00.000000', '58', 20, 'path', '69', 4);
INSERT INTO `video` VALUES ('1185', '185eastercookies.mp4', 'Baking', 'Cookies', '|videos|185eastercookies.mp4', 185, '2021-01-01 00:00:00.000000', '59', 20, 'path', '69', 4);
INSERT INTO `video` VALUES ('1186', '186decorating.mp4', 'Baking', 'Cooking', '|videos|186decorating.mp4', 186, '2021-01-01 00:00:00.000000', '60', 20, 'path', '69', 4);
INSERT INTO `video` VALUES ('1187', '187cooking.mp4', 'Cooking', 'Whisk', '|videos|187cooking.mp4', 187, '2021-01-01 00:00:00.000000', '61', 20, 'path', '70', 4);
INSERT INTO `video` VALUES ('1188', '188panveg.mp4', 'Cooking', 'Vegetable', '|videos|188panveg.mp4', 188, '2021-01-01 00:00:00.000000', '62', 20, 'path', '51', 4);
INSERT INTO `video` VALUES ('1189', '189cookingtom.mp4', 'Cooking', 'Tomato', '|videos|189cookingtom.mp4', 189, '2021-01-01 00:00:00.000000', '63', 20, 'path', '49', 4);
INSERT INTO `video` VALUES ('1190', '190cookingpumpkin.mp4', 'Cooking', 'Pumpkin', '|videos|190cookingpumpkin.mp4', 190, '2021-01-01 00:00:00.000000', '64', 20, 'path', '71', 4);
INSERT INTO `video` VALUES ('1191', '191bakedpumpkin.mp4', 'Cooking', 'Baking', '|videos|191bakedpumpkin.mp4', 191, '2021-01-01 00:00:00.000000', '65', 20, 'path', '71', 4);
INSERT INTO `video` VALUES ('1192', '192vegetables.mp4', 'Food', 'Vegetable', '|videos|192vegetables.mp4', 192, '2021-01-01 00:00:00.000000', '66', 20, 'path', '72', 4);
INSERT INTO `video` VALUES ('1193', '193fruitmarket.mp4', 'Food', 'Fruit', '|videos|193fruitmarket.mp4', 193, '2021-01-01 00:00:00.000000', '67', 20, 'path', '72', 4);
INSERT INTO `video` VALUES ('1194', '194mixpumpkin.mp4', 'Cooking', 'Fruit', '|videos|194mixpumpkin.mp4', 194, '2021-01-01 00:00:00.000000', '68', 20, 'path', '71', 4);
INSERT INTO `video` VALUES ('1195', '195bagoranges.mp4', 'Food', 'Fruit', '|videos|195bagoranges.mp4', 195, '2021-01-01 00:00:00.000000', '69', 20, 'path', '71', 4);
INSERT INTO `video` VALUES ('1196', '196veg.mp4', 'Food', 'Fruit', '|videos|196veg.mp4', 196, '2021-01-01 00:00:00.000000', '70', 20, 'path', '72', 4);
INSERT INTO `video` VALUES ('1197', '197cutpepper.mp4', 'Cooking', 'Vegetable', '|videos|197cutpepper.mp4', 197, '2021-01-01 00:00:00.000000', '71', 20, 'path', '73', 4);
INSERT INTO `video` VALUES ('1198', '198cutpepper.mp4', 'Cooking', 'Vegetable', '|videos|198cutpepper.mp4', 198, '2021-01-01 00:00:00.000000', '72', 20, 'path', '73', 4);
INSERT INTO `video` VALUES ('1199', '199veg.mp4', 'Food', 'Vegetable', '|videos|199veg.mp4', 199, '2021-01-01 00:00:00.000000', '73', 20, 'path', '72', 4);
INSERT INTO `video` VALUES ('1200', '200tomatodish.mp4', 'Cooking', 'Tomato', '|videos|200tomatodish.mp4', 200, '2021-01-01 00:00:00.000000', '74', 20, 'path', '49', 4);
INSERT INTO `video` VALUES ('136f4ac6-9829-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_e412faa672f5a0c7586ac1c3d4e589d9.mp4', NULL, '2021-04-08 05:12:55.000000', '2', NULL, '|videoImages|upload_d8e4085a582dc3bcdb10925d219cc2f1.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('154', 'Gaming Set Up', 'gaming set up', 'gaming set up', '|videos|gamingsetup.mp4', 6009, '2018-11-11 00:00:00.000000', '11', 5805, 'CvGqZnTMyKWleczRUoPl', '35', 2050);
INSERT INTO `video` VALUES ('168', 'Nail design', 'cute nail art', 'cute nail art', '|videos|nails.mp4', 4135, '2018-11-11 00:00:00.000000', '12', 6024, 'hyGLBufCkdwbSaMUxPGz', '27', 1670);
INSERT INTO `video` VALUES ('178', 'Pet bed Cupcake', 'cupcake shaped cat bed', 'cupcake shaped cat bed', '|videos|pet_bed_cupcake.mp4', 8587, '2018-11-11 00:00:00.000000', '13', 4646, 'FhfdvonHDgaaPBzcNohm', '29', 8167);
INSERT INTO `video` VALUES ('1d4a9d64-9700-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_34357b68a23063146230a6bdc3a663f9.mp4', NULL, '2021-04-06 17:47:11.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_cb0d0f5bdea2f5d8a4ea8078fe698c67.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('2', 'Drawing', 'beauty', NULL, '|videos|drawing.mp4', NULL, NULL, '35c69e1a-7169-11eb-a09f-f0795907d9ec', 3, '|videoImages|drawing.jpg', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 7);
INSERT INTO `video` VALUES ('2023d2b2-9714-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_2273502d4dff6953d14dac62ca5d6cec.mp4', NULL, '2021-04-06 20:10:25.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_beb339690286e200fa76d1a50f0ee90e.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('2626b98f-980f-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_ef5b591d17181c83e58d8900cb9ab55c.mp4', NULL, '2021-04-08 02:07:19.000000', '1', NULL, '|videoImages|upload_2367a43229a9c0cf2869aafc84892944.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('268', 'RestoSham PvP', 'gameplay', 'gameplay', '|videos|RestoShamPvP.mp4', 7522, '2018-11-11 00:00:00.000000', '15', 4717, 'aNVJpTMtQKJqWYKfonLa', '32', 2059);
INSERT INTO `video` VALUES ('289254d3-97e5-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_a4b282395cca22e11e76ccbeaef28449.mp4', NULL, '2021-04-07 21:06:44.000000', '1', NULL, '|videoImages|upload_19141d92c08856d99ff647fabb4c51f7.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('2919f959-9713-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_6f006ae8a15308a62d049a51262af43d.mp4', NULL, '2021-04-06 20:03:31.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_380f0c127aed05546a7e322ce7924f5e.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('293ab961-9714-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_6456054be04b44f8c2e78b8d4ae75dc1.mp4', NULL, '2021-04-06 20:10:41.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_8d7c4a058e2d73bbbc9f4c2d270177df.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('3', 'firness', 'sport', 'sport', '|videos|fitness.mp4', NULL, NULL, '2', NULL, '|videoImages|fitness.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('302', 'Sunset', 'downtown ottawa sunset', 'downtown ottawa sunset', '|videos|sunset.mp4', 267, '2018-11-11 00:00:00.000000', '16', 1099, 'NvUNevfjvWDmTKymFTIp', '33', 3800);
INSERT INTO `video` VALUES ('30e41b03-9708-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_8183bc313b8235551e2a09c0b4e74263.mp4', NULL, '2021-04-06 18:45:00.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_6dafda7729dc957cddea2895366ef4d9.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('311', 'Vehicle', 'my Nissan car', 'my Nissan car', '|videos|vehicle.mp4', 5446, '2018-11-11 00:00:00.000000', '17', 7830, 'qPzbidboyqeNlhRsVmmE', '34', 3226);
INSERT INTO `video` VALUES ('34', 'PS5 console', 'PS5 console release ad', 'PS5 console release ad', '|videos|PS5.mp4', 3333, '2018-11-11 00:00:00.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 850, '|videoImages|ps5.jpg', '36', 8341);
INSERT INTO `video` VALUES ('34a549af-9706-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_8fd8c9ce5072cfa4fd277b0715cab227.mp4', NULL, '2021-04-06 18:30:47.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_ad2c0e8636a6139f6db5eb7f6e70bb68.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('4105e506-9828-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_1a680c22f94170b4f461ad3c0fb5833a.mp4', NULL, '2021-04-08 05:07:02.000000', '2', NULL, '|videoImages|upload_fde3b6e4c8c8a5ea8b2fa2b39e80350a.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('44', 'Plushies', 'my child stuffy collection', 'my child stuffy collection', '|videos|20210312_175034.mp4', 5203, '2018-11-11 00:00:00.000000', '6', 9336, 'qhdESMLKRJNSxmkFTLKX', '25', 4970);
INSERT INTO `video` VALUES ('44a5b8ce-9709-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_99c803c0ace3c820cf78e16c5408897e.mp4', NULL, '2021-04-06 18:52:42.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_4771cfcacc9551139244f49e985c5246.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('49d7c7cc-971e-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_ff67f5399a5527a49543355f18583fc6.mp4', NULL, '2021-04-06 21:23:10.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_d869b31774c8b180c213ab7242d3e582.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('74896f2e-96a1-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_212b2d241bb233441abadd49b1007e9d.mp4', NULL, '2021-04-06 06:29:35.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_9d783d8dade309b7b1d5d33068957e0d.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('76', 'Backhoe', 'unloading of a backhoe', 'unloading of a backhoe', '|videos|backhoe.mp4', 2309, '2018-11-11 00:00:00.000000', '7', 8437, 'DVNOOlVCYRSrzazndwvf', '26', 5766);
INSERT INTO `video` VALUES ('7b67c6f8-97e0-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_0b7b0cdacfff726b48b7ec847f7cbd28.mp4', NULL, '2021-04-07 20:33:16.000000', '2', NULL, '|videoImages|upload_1c95a08de43349a668d0dc67fe51ec2b.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('7fde7cae-97e9-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_d93e651ff3c4c9486088e6c9270c0b33.mp4', NULL, '2021-04-07 21:37:49.000000', '1', NULL, '|videoImages|upload_f1ac3a11dfdbb89dca7766cde2a4faf1.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('84be7404-9709-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_90d5c9f2476f63fc8d134ddebd413f7f.mp4', NULL, '2021-04-06 18:54:30.000000', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', NULL, '|videoImages|upload_3c9dd0757ea759dd62b5a5900a02fac5.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('85', 'capturingNode', 'Gameplay capturing node', 'Gameplay capturing node', '|videos|CapturingNode.mp4', 5061, '2018-11-11 00:00:00.000000', '8', 8414, 'TlaehOoHHejbXMsOSeFZ', '31', 14);
INSERT INTO `video` VALUES ('90', 'Cup', 'floral white cup', 'floral white cup', '|videos|cup.mp4', 4138, '2018-11-11 00:00:00.000000', '9', 9605, 'ZcajTocvgVEgRfBAVino', '30', 2434);
INSERT INTO `video` VALUES ('9a16dd92-97f4-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_321a68b989a1f008406588ac20dbeb87.mp4', NULL, '2021-04-07 22:57:17.000000', '2', NULL, '|videoImages|upload_1d43fd3355f66201ca16b2d2603d58c4.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('b00f8e2d-9827-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_574f789257b435d0f9bf135116e4b333.mp4', NULL, '2021-04-08 05:02:59.000000', '2', NULL, '|videoImages|upload_ce470206b0bbced6d2f3f67aa760e2c3.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('c1e2da8b-980a-11eb-b61b-42010a800007', 'meal', 'delicious food', 'it is a wonderful dinner', '|videos|upload_823cd9b88bda773fa99d7bdfdfff9355.mp4', NULL, '2021-04-08 01:35:53.000000', '1', NULL, '|videoImages|upload_b20fd464caef6ad3b56c4893a82e8829.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('d34d053b-97f4-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_a769172ec294946c2a2739e1f9154bf0.mp4', NULL, '2021-04-07 22:58:53.000000', '1', NULL, '|videoImages|upload_aeb899d44098de8ea3815925c7a73046.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('e69af6fd-9828-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_4fc4fbef1f775b40e0236dadd52a5d08.mp4', NULL, '2021-04-08 05:11:40.000000', '2', NULL, '|videoImages|upload_b5cdd5b20752fd8915b321257e8a0a65.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('e9e00795-97e8-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_7b861f0b1d7a4ecd03a869d6ec0a8601.mp4', NULL, '2021-04-07 21:33:37.000000', '1', NULL, '|videoImages|upload_b67af3963bef1a712f18a38a056167fb.jpg', NULL, NULL);
INSERT INTO `video` VALUES ('f65b1685-980e-11eb-b61b-42010a800007', '1', '1', '1', '|videos|upload_def382501a4be9a1c97eb6c1a2b54207.mp4', NULL, '2021-04-08 02:05:59.000000', '1', NULL, '|videoImages|upload_85d9a356429893f552904d570956ba6f.jpg', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for video_keyword_relationship
-- ----------------------------
DROP TABLE IF EXISTS `video_keyword_relationship`;
CREATE TABLE `video_keyword_relationship` (
  `VideoId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `KeywordId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`VideoId`,`KeywordId`),
  KEY `VKR_KeywordId` (`KeywordId`),
  CONSTRAINT `VKR_KeywordId` FOREIGN KEY (`KeywordId`) REFERENCES `keyword` (`KeywordId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `VKR_VideoId` FOREIGN KEY (`VideoId`) REFERENCES `video` (`VideoId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of video_keyword_relationship
-- ----------------------------
BEGIN;
INSERT INTO `video_keyword_relationship` VALUES ('0080f929-9703-11eb-b61b-42010a800007', '008a8e48-9703-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('0080f929-9703-11eb-b61b-42010a800007', '008a9e1b-9703-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('0080f929-9703-11eb-b61b-42010a800007', '008aa1a3-9703-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('03090395-9714-11eb-b61b-42010a800007', '031281dc-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('03090395-9714-11eb-b61b-42010a800007', '0312b401-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('03090395-9714-11eb-b61b-42010a800007', '0312c31f-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('06c61e9d-9715-11eb-b61b-42010a800007', '06d11cf0-9715-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('06c61e9d-9715-11eb-b61b-42010a800007', '06d13afa-9715-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('06c61e9d-9715-11eb-b61b-42010a800007', '06d14c8e-9715-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('1125', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1154', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1155', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1156', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1157', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1158', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1159', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1160', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1161', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1162', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1163', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1164', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1165', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1166', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1167', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1168', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1169', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1170', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1171', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1172', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1173', '10');
INSERT INTO `video_keyword_relationship` VALUES ('1186', '10');
INSERT INTO `video_keyword_relationship` VALUES ('168', '10');
INSERT INTO `video_keyword_relationship` VALUES ('302', '100');
INSERT INTO `video_keyword_relationship` VALUES ('154', '104');
INSERT INTO `video_keyword_relationship` VALUES ('268', '104');
INSERT INTO `video_keyword_relationship` VALUES ('34', '104');
INSERT INTO `video_keyword_relationship` VALUES ('85', '104');
INSERT INTO `video_keyword_relationship` VALUES ('268', '108');
INSERT INTO `video_keyword_relationship` VALUES ('85', '108');
INSERT INTO `video_keyword_relationship` VALUES ('1100', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1101', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1102', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1103', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1104', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1105', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1106', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1107', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1108', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1109', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1110', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1111', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1112', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1113', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1115', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1116', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1117', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1118', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1119', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1120', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1121', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1122', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1123', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1124', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1125', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1174', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1175', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1176', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1177', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1178', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1179', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1180', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1181', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1182', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1183', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1184', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1185', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1186', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1187', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1188', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1189', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1190', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1191', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1192', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1193', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1195', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1196', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1199', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1200', '11');
INSERT INTO `video_keyword_relationship` VALUES ('90', '11');
INSERT INTO `video_keyword_relationship` VALUES ('1166', '110');
INSERT INTO `video_keyword_relationship` VALUES ('1167', '110');
INSERT INTO `video_keyword_relationship` VALUES ('1168', '110');
INSERT INTO `video_keyword_relationship` VALUES ('1169', '110');
INSERT INTO `video_keyword_relationship` VALUES ('1171', '110');
INSERT INTO `video_keyword_relationship` VALUES ('1172', '110');
INSERT INTO `video_keyword_relationship` VALUES ('1126', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1127', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1128', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1129', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1130', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1131', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1132', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1133', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1134', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1135', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1136', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1137', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1138', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1139', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1140', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1141', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1142', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1143', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1144', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1145', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1146', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1147', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1148', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1149', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1150', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1151', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1152', '115');
INSERT INTO `video_keyword_relationship` VALUES ('1153', '115');
INSERT INTO `video_keyword_relationship` VALUES ('34', '119');
INSERT INTO `video_keyword_relationship` VALUES ('76', '120');
INSERT INTO `video_keyword_relationship` VALUES ('168', '125');
INSERT INTO `video_keyword_relationship` VALUES ('115', '130');
INSERT INTO `video_keyword_relationship` VALUES ('178', '130');
INSERT INTO `video_keyword_relationship` VALUES ('44', '130');
INSERT INTO `video_keyword_relationship` VALUES ('136f4ac6-9829-11eb-b61b-42010a800007', '137a580e-9829-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('136f4ac6-9829-11eb-b61b-42010a800007', '137b5bd8-9829-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('136f4ac6-9829-11eb-b61b-42010a800007', '137b6093-9829-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('302', '138');
INSERT INTO `video_keyword_relationship` VALUES ('1100', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1101', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1102', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1103', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1104', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1105', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1113', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1125', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1174', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1175', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1178', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1181', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1182', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1183', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1184', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1185', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1186', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1191', '14');
INSERT INTO `video_keyword_relationship` VALUES ('1148', '141');
INSERT INTO `video_keyword_relationship` VALUES ('1149', '141');
INSERT INTO `video_keyword_relationship` VALUES ('1150', '141');
INSERT INTO `video_keyword_relationship` VALUES ('1151', '141');
INSERT INTO `video_keyword_relationship` VALUES ('1152', '141');
INSERT INTO `video_keyword_relationship` VALUES ('1153', '141');
INSERT INTO `video_keyword_relationship` VALUES ('154', '15');
INSERT INTO `video_keyword_relationship` VALUES ('1145', '152');
INSERT INTO `video_keyword_relationship` VALUES ('1146', '152');
INSERT INTO `video_keyword_relationship` VALUES ('1147', '152');
INSERT INTO `video_keyword_relationship` VALUES ('115', '161');
INSERT INTO `video_keyword_relationship` VALUES ('1101', '167');
INSERT INTO `video_keyword_relationship` VALUES ('1102', '167');
INSERT INTO `video_keyword_relationship` VALUES ('1178', '167');
INSERT INTO `video_keyword_relationship` VALUES ('1103', '168');
INSERT INTO `video_keyword_relationship` VALUES ('1104', '168');
INSERT INTO `video_keyword_relationship` VALUES ('1105', '168');
INSERT INTO `video_keyword_relationship` VALUES ('1183', '168');
INSERT INTO `video_keyword_relationship` VALUES ('1106', '169');
INSERT INTO `video_keyword_relationship` VALUES ('1103', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1105', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1106', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1107', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1108', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1109', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1110', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1111', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1112', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1113', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1114', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1115', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1116', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1117', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1118', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1119', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1120', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1188', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1189', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1190', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1197', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1198', '170');
INSERT INTO `video_keyword_relationship` VALUES ('1107', '172');
INSERT INTO `video_keyword_relationship` VALUES ('1112', '172');
INSERT INTO `video_keyword_relationship` VALUES ('1118', '172');
INSERT INTO `video_keyword_relationship` VALUES ('1121', '172');
INSERT INTO `video_keyword_relationship` VALUES ('1189', '172');
INSERT INTO `video_keyword_relationship` VALUES ('1200', '172');
INSERT INTO `video_keyword_relationship` VALUES ('1122', '173');
INSERT INTO `video_keyword_relationship` VALUES ('1116', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1119', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1120', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1122', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1123', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1124', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1188', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1192', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1196', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1197', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1198', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1199', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1200', '174');
INSERT INTO `video_keyword_relationship` VALUES ('1121', '175');
INSERT INTO `video_keyword_relationship` VALUES ('1122', '175');
INSERT INTO `video_keyword_relationship` VALUES ('1123', '175');
INSERT INTO `video_keyword_relationship` VALUES ('1124', '175');
INSERT INTO `video_keyword_relationship` VALUES ('1188', '175');
INSERT INTO `video_keyword_relationship` VALUES ('1189', '175');
INSERT INTO `video_keyword_relationship` VALUES ('1113', '176');
INSERT INTO `video_keyword_relationship` VALUES ('1125', '176');
INSERT INTO `video_keyword_relationship` VALUES ('1126', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1134', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1135', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1138', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1144', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1145', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1146', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1147', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1148', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1149', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1150', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1151', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1152', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1153', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1154', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1155', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1156', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1158', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1160', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1164', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1167', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1171', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1172', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1182', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1185', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1187', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1190', '177');
INSERT INTO `video_keyword_relationship` VALUES ('1127', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1130', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1131', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1132', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1133', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1136', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1137', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1139', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1140', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1142', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1143', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1161', '178');
INSERT INTO `video_keyword_relationship` VALUES ('1127', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1128', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1130', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1131', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1132', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1133', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1134', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1135', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1136', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1137', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1138', '179');
INSERT INTO `video_keyword_relationship` VALUES ('1129', '180');
INSERT INTO `video_keyword_relationship` VALUES ('1139', '181');
INSERT INTO `video_keyword_relationship` VALUES ('1140', '181');
INSERT INTO `video_keyword_relationship` VALUES ('1141', '181');
INSERT INTO `video_keyword_relationship` VALUES ('1142', '181');
INSERT INTO `video_keyword_relationship` VALUES ('1143', '181');
INSERT INTO `video_keyword_relationship` VALUES ('1154', '183');
INSERT INTO `video_keyword_relationship` VALUES ('1155', '183');
INSERT INTO `video_keyword_relationship` VALUES ('1156', '183');
INSERT INTO `video_keyword_relationship` VALUES ('1157', '183');
INSERT INTO `video_keyword_relationship` VALUES ('1158', '183');
INSERT INTO `video_keyword_relationship` VALUES ('1159', '184');
INSERT INTO `video_keyword_relationship` VALUES ('1160', '184');
INSERT INTO `video_keyword_relationship` VALUES ('1161', '184');
INSERT INTO `video_keyword_relationship` VALUES ('1162', '184');
INSERT INTO `video_keyword_relationship` VALUES ('1163', '184');
INSERT INTO `video_keyword_relationship` VALUES ('1159', '185');
INSERT INTO `video_keyword_relationship` VALUES ('1160', '185');
INSERT INTO `video_keyword_relationship` VALUES ('1161', '185');
INSERT INTO `video_keyword_relationship` VALUES ('1162', '185');
INSERT INTO `video_keyword_relationship` VALUES ('1163', '185');
INSERT INTO `video_keyword_relationship` VALUES ('1164', '185');
INSERT INTO `video_keyword_relationship` VALUES ('1165', '185');
INSERT INTO `video_keyword_relationship` VALUES ('1173', '185');
INSERT INTO `video_keyword_relationship` VALUES ('1174', '188');
INSERT INTO `video_keyword_relationship` VALUES ('1176', '188');
INSERT INTO `video_keyword_relationship` VALUES ('1177', '188');
INSERT INTO `video_keyword_relationship` VALUES ('1178', '188');
INSERT INTO `video_keyword_relationship` VALUES ('1179', '188');
INSERT INTO `video_keyword_relationship` VALUES ('1180', '188');
INSERT INTO `video_keyword_relationship` VALUES ('1181', '188');
INSERT INTO `video_keyword_relationship` VALUES ('1182', '188');
INSERT INTO `video_keyword_relationship` VALUES ('1175', '189');
INSERT INTO `video_keyword_relationship` VALUES ('1184', '189');
INSERT INTO `video_keyword_relationship` VALUES ('1185', '189');
INSERT INTO `video_keyword_relationship` VALUES ('1170', '19');
INSERT INTO `video_keyword_relationship` VALUES ('168', '19');
INSERT INTO `video_keyword_relationship` VALUES ('1187', '190');
INSERT INTO `video_keyword_relationship` VALUES ('1190', '191');
INSERT INTO `video_keyword_relationship` VALUES ('1191', '191');
INSERT INTO `video_keyword_relationship` VALUES ('1194', '191');
INSERT INTO `video_keyword_relationship` VALUES ('1106', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1107', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1108', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1109', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1110', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1111', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1112', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1114', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1115', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1117', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1118', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1121', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1189', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1190', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1191', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1193', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1194', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1195', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1196', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1199', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1200', '192');
INSERT INTO `video_keyword_relationship` VALUES ('1100', '193');
INSERT INTO `video_keyword_relationship` VALUES ('1101', '193');
INSERT INTO `video_keyword_relationship` VALUES ('1103', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1106', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1107', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1109', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1110', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1111', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1112', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1114', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1115', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1116', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1117', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1119', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1120', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1197', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1198', '194');
INSERT INTO `video_keyword_relationship` VALUES ('1104', '195');
INSERT INTO `video_keyword_relationship` VALUES ('1108', '196');
INSERT INTO `video_keyword_relationship` VALUES ('1109', '197');
INSERT INTO `video_keyword_relationship` VALUES ('1110', '198');
INSERT INTO `video_keyword_relationship` VALUES ('1111', '199');
INSERT INTO `video_keyword_relationship` VALUES ('1113', '199');
INSERT INTO `video_keyword_relationship` VALUES ('1114', '199');
INSERT INTO `video_keyword_relationship` VALUES ('1d4a9d64-9700-11eb-b61b-42010a800007', '1d563fda-9700-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('1d4a9d64-9700-11eb-b61b-42010a800007', '1d56466a-9700-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('1d4a9d64-9700-11eb-b61b-42010a800007', '1d56544a-9700-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('154', '20');
INSERT INTO `video_keyword_relationship` VALUES ('1115', '200');
INSERT INTO `video_keyword_relationship` VALUES ('1119', '201');
INSERT INTO `video_keyword_relationship` VALUES ('1120', '202');
INSERT INTO `video_keyword_relationship` VALUES ('1100', '203');
INSERT INTO `video_keyword_relationship` VALUES ('1101', '203');
INSERT INTO `video_keyword_relationship` VALUES ('1125', '203');
INSERT INTO `video_keyword_relationship` VALUES ('2023d2b2-9714-11eb-b61b-42010a800007', '203245da-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('2023d2b2-9714-11eb-b61b-42010a800007', '20324cab-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('2023d2b2-9714-11eb-b61b-42010a800007', '20325639-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('1126', '204');
INSERT INTO `video_keyword_relationship` VALUES ('1128', '205');
INSERT INTO `video_keyword_relationship` VALUES ('1114', '206');
INSERT INTO `video_keyword_relationship` VALUES ('1129', '206');
INSERT INTO `video_keyword_relationship` VALUES ('1169', '206');
INSERT INTO `video_keyword_relationship` VALUES ('1127', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1128', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1129', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1130', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1131', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1132', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1133', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1134', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1135', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1136', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1138', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1139', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1140', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1141', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1142', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1143', '207');
INSERT INTO `video_keyword_relationship` VALUES ('1139', '208');
INSERT INTO `video_keyword_relationship` VALUES ('1140', '208');
INSERT INTO `video_keyword_relationship` VALUES ('1141', '208');
INSERT INTO `video_keyword_relationship` VALUES ('1142', '208');
INSERT INTO `video_keyword_relationship` VALUES ('1143', '208');
INSERT INTO `video_keyword_relationship` VALUES ('1153', '208');
INSERT INTO `video_keyword_relationship` VALUES ('1144', '209');
INSERT INTO `video_keyword_relationship` VALUES ('1158', '213');
INSERT INTO `video_keyword_relationship` VALUES ('1171', '213');
INSERT INTO `video_keyword_relationship` VALUES ('1160', '214');
INSERT INTO `video_keyword_relationship` VALUES ('1162', '214');
INSERT INTO `video_keyword_relationship` VALUES ('1163', '214');
INSERT INTO `video_keyword_relationship` VALUES ('1165', '215');
INSERT INTO `video_keyword_relationship` VALUES ('1173', '215');
INSERT INTO `video_keyword_relationship` VALUES ('1166', '216');
INSERT INTO `video_keyword_relationship` VALUES ('1167', '217');
INSERT INTO `video_keyword_relationship` VALUES ('1168', '218');
INSERT INTO `video_keyword_relationship` VALUES ('1169', '219');
INSERT INTO `video_keyword_relationship` VALUES ('1169', '220');
INSERT INTO `video_keyword_relationship` VALUES ('1170', '220');
INSERT INTO `video_keyword_relationship` VALUES ('1172', '221');
INSERT INTO `video_keyword_relationship` VALUES ('1174', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1176', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1177', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1178', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1179', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1180', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1181', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1182', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1183', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1184', '222');
INSERT INTO `video_keyword_relationship` VALUES ('1175', '223');
INSERT INTO `video_keyword_relationship` VALUES ('1183', '224');
INSERT INTO `video_keyword_relationship` VALUES ('1181', '225');
INSERT INTO `video_keyword_relationship` VALUES ('1184', '225');
INSERT INTO `video_keyword_relationship` VALUES ('1185', '225');
INSERT INTO `video_keyword_relationship` VALUES ('1186', '225');
INSERT INTO `video_keyword_relationship` VALUES ('1165', '226');
INSERT INTO `video_keyword_relationship` VALUES ('1192', '226');
INSERT INTO `video_keyword_relationship` VALUES ('1193', '227');
INSERT INTO `video_keyword_relationship` VALUES ('1117', '228');
INSERT INTO `video_keyword_relationship` VALUES ('1195', '228');
INSERT INTO `video_keyword_relationship` VALUES ('1197', '229');
INSERT INTO `video_keyword_relationship` VALUES ('1198', '229');
INSERT INTO `video_keyword_relationship` VALUES ('1199', '229');
INSERT INTO `video_keyword_relationship` VALUES ('1100', '230');
INSERT INTO `video_keyword_relationship` VALUES ('1102', '231');
INSERT INTO `video_keyword_relationship` VALUES ('1121', '231');
INSERT INTO `video_keyword_relationship` VALUES ('1194', '231');
INSERT INTO `video_keyword_relationship` VALUES ('1104', '232');
INSERT INTO `video_keyword_relationship` VALUES ('1105', '233');
INSERT INTO `video_keyword_relationship` VALUES ('1124', '234');
INSERT INTO `video_keyword_relationship` VALUES ('1100', '235');
INSERT INTO `video_keyword_relationship` VALUES ('1125', '235');
INSERT INTO `video_keyword_relationship` VALUES ('1137', '236');
INSERT INTO `video_keyword_relationship` VALUES ('1144', '237');
INSERT INTO `video_keyword_relationship` VALUES ('1154', '238');
INSERT INTO `video_keyword_relationship` VALUES ('1155', '238');
INSERT INTO `video_keyword_relationship` VALUES ('1156', '238');
INSERT INTO `video_keyword_relationship` VALUES ('1157', '238');
INSERT INTO `video_keyword_relationship` VALUES ('1166', '239');
INSERT INTO `video_keyword_relationship` VALUES ('1166', '240');
INSERT INTO `video_keyword_relationship` VALUES ('1181', '240');
INSERT INTO `video_keyword_relationship` VALUES ('1184', '240');
INSERT INTO `video_keyword_relationship` VALUES ('1192', '241');
INSERT INTO `video_keyword_relationship` VALUES ('1195', '241');
INSERT INTO `video_keyword_relationship` VALUES ('1196', '241');
INSERT INTO `video_keyword_relationship` VALUES ('1200', '242');
INSERT INTO `video_keyword_relationship` VALUES ('1102', '243');
INSERT INTO `video_keyword_relationship` VALUES ('1116', '244');
INSERT INTO `video_keyword_relationship` VALUES ('1132', '245');
INSERT INTO `video_keyword_relationship` VALUES ('1141', '245');
INSERT INTO `video_keyword_relationship` VALUES ('1134', '246');
INSERT INTO `video_keyword_relationship` VALUES ('1135', '246');
INSERT INTO `video_keyword_relationship` VALUES ('1136', '246');
INSERT INTO `video_keyword_relationship` VALUES ('1141', '246');
INSERT INTO `video_keyword_relationship` VALUES ('1139', '247');
INSERT INTO `video_keyword_relationship` VALUES ('1143', '248');
INSERT INTO `video_keyword_relationship` VALUES ('1153', '249');
INSERT INTO `video_keyword_relationship` VALUES ('1186', '250');
INSERT INTO `video_keyword_relationship` VALUES ('2626b98f-980f-11eb-b61b-42010a800007', '2631ecc7-980f-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('2626b98f-980f-11eb-b61b-42010a800007', '2631ecca-980f-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('2626b98f-980f-11eb-b61b-42010a800007', '26323796-980f-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('289254d3-97e5-11eb-b61b-42010a800007', '289d107c-97e5-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('289254d3-97e5-11eb-b61b-42010a800007', '289d107e-97e5-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('289254d3-97e5-11eb-b61b-42010a800007', '289d280d-97e5-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('1152', '29');
INSERT INTO `video_keyword_relationship` VALUES ('2919f959-9713-11eb-b61b-42010a800007', '2927551b-9713-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('2919f959-9713-11eb-b61b-42010a800007', '29276476-9713-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('2919f959-9713-11eb-b61b-42010a800007', '29276644-9713-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('293ab961-9714-11eb-b61b-42010a800007', '29440b19-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('293ab961-9714-11eb-b61b-42010a800007', '294413a9-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('293ab961-9714-11eb-b61b-42010a800007', '2944285a-9714-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('311', '30');
INSERT INTO `video_keyword_relationship` VALUES ('76', '30');
INSERT INTO `video_keyword_relationship` VALUES ('30e41b03-9708-11eb-b61b-42010a800007', '30edfbed-9708-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('30e41b03-9708-11eb-b61b-42010a800007', '30ee54b1-9708-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('30e41b03-9708-11eb-b61b-42010a800007', '30ee5f5f-9708-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('115', '33');
INSERT INTO `video_keyword_relationship` VALUES ('44', '33');
INSERT INTO `video_keyword_relationship` VALUES ('268', '34');
INSERT INTO `video_keyword_relationship` VALUES ('85', '34');
INSERT INTO `video_keyword_relationship` VALUES ('34a549af-9706-11eb-b61b-42010a800007', '34af895a-9706-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('34a549af-9706-11eb-b61b-42010a800007', '34af8e08-9706-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('34a549af-9706-11eb-b61b-42010a800007', '34af9a98-9706-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('178', '38');
INSERT INTO `video_keyword_relationship` VALUES ('178', '40');
INSERT INTO `video_keyword_relationship` VALUES ('4105e506-9828-11eb-b61b-42010a800007', '410fef4a-9828-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('4105e506-9828-11eb-b61b-42010a800007', '411008e0-9828-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('4105e506-9828-11eb-b61b-42010a800007', '41102997-9828-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('311', '50');
INSERT INTO `video_keyword_relationship` VALUES ('76', '50');
INSERT INTO `video_keyword_relationship` VALUES ('1100', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1102', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1106', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1107', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1108', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1109', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1110', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1111', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1112', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1113', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1114', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1115', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1116', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1117', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1118', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1119', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1120', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1121', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1122', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1123', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1124', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1174', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1175', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1176', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1177', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1179', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1180', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1183', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1186', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1187', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1188', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1189', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1190', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1191', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1194', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1197', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1198', '61');
INSERT INTO `video_keyword_relationship` VALUES ('1200', '61');
INSERT INTO `video_keyword_relationship` VALUES ('34', '65');
INSERT INTO `video_keyword_relationship` VALUES ('302', '70');
INSERT INTO `video_keyword_relationship` VALUES ('7b67c6f8-97e0-11eb-b61b-42010a800007', '7b731128-97e0-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('7b67c6f8-97e0-11eb-b61b-42010a800007', '7b733401-97e0-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('7b67c6f8-97e0-11eb-b61b-42010a800007', '7b86d2bf-97e0-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('7fde7cae-97e9-11eb-b61b-42010a800007', '7fea2476-97e9-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('7fde7cae-97e9-11eb-b61b-42010a800007', '7fea2479-97e9-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('7fde7cae-97e9-11eb-b61b-42010a800007', '7fea3ca9-97e9-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('90', '89');
INSERT INTO `video_keyword_relationship` VALUES ('44', '9');
INSERT INTO `video_keyword_relationship` VALUES ('90', '91');
INSERT INTO `video_keyword_relationship` VALUES ('9a16dd92-97f4-11eb-b61b-42010a800007', '9a216526-97f4-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('9a16dd92-97f4-11eb-b61b-42010a800007', '9a21727e-97f4-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('9a16dd92-97f4-11eb-b61b-42010a800007', '9a33bdd0-97f4-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('b00f8e2d-9827-11eb-b61b-42010a800007', 'b01a8e6b-9827-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('b00f8e2d-9827-11eb-b61b-42010a800007', 'b01a8e6e-9827-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('b00f8e2d-9827-11eb-b61b-42010a800007', 'b02df537-9827-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('c1e2da8b-980a-11eb-b61b-42010a800007', 'c1ee5e5c-980a-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('c1e2da8b-980a-11eb-b61b-42010a800007', 'c1ee5e5d-980a-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('c1e2da8b-980a-11eb-b61b-42010a800007', 'c1ee9ee9-980a-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('d34d053b-97f4-11eb-b61b-42010a800007', 'd35803e6-97f4-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('d34d053b-97f4-11eb-b61b-42010a800007', 'd35803e8-97f4-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('d34d053b-97f4-11eb-b61b-42010a800007', 'd3581f7e-97f4-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('e69af6fd-9828-11eb-b61b-42010a800007', 'e6a5037f-9828-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('e69af6fd-9828-11eb-b61b-42010a800007', 'e6a50383-9828-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('e69af6fd-9828-11eb-b61b-42010a800007', 'e6a51934-9828-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('e9e00795-97e8-11eb-b61b-42010a800007', 'e9ea10e9-97e8-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('e9e00795-97e8-11eb-b61b-42010a800007', 'e9ea21fe-97e8-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('e9e00795-97e8-11eb-b61b-42010a800007', 'e9fa3fec-97e8-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('f65b1685-980e-11eb-b61b-42010a800007', 'f6656f5f-980e-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('f65b1685-980e-11eb-b61b-42010a800007', 'f6659299-980e-11eb-b61b-42010a800007');
INSERT INTO `video_keyword_relationship` VALUES ('f65b1685-980e-11eb-b61b-42010a800007', 'f6659a80-980e-11eb-b61b-42010a800007');
COMMIT;

-- ----------------------------
-- Table structure for viewhistory
-- ----------------------------
DROP TABLE IF EXISTS `viewhistory`;
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

-- ----------------------------
-- Records of viewhistory
-- ----------------------------
BEGIN;
INSERT INTO `viewhistory` VALUES ('0577cc5f-982a-11eb-b61b-42010a800007', '2021-04-08 05:19:41', '2', '34');
INSERT INTO `viewhistory` VALUES ('1e07ab9e-9829-11eb-b61b-42010a800007', '2021-04-08 05:13:12', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '136f4ac6-9829-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('2d54503e-980f-11eb-b61b-42010a800007', '2021-04-08 02:07:31', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2626b98f-980f-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('2fea1cd4-97ed-11eb-b61b-42010a800007', '2021-04-07 22:04:13', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '34');
INSERT INTO `viewhistory` VALUES ('45059322-97ed-11eb-b61b-42010a800007', '2021-04-07 22:04:48', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '289254d3-97e5-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('5dcbb855-9827-11eb-b61b-42010a800007', '2021-04-08 05:00:40', '2', '2');
INSERT INTO `viewhistory` VALUES ('6299b61b-9814-11eb-b61b-42010a800007', '2021-04-08 02:44:48', '1', '3');
INSERT INTO `viewhistory` VALUES ('65417dd1-9827-11eb-b61b-42010a800007', '2021-04-08 05:00:53', '2', '1');
INSERT INTO `viewhistory` VALUES ('6d7e22cc-97e2-11eb-b61b-42010a800007', '2021-04-07 20:47:12', '1', '7b67c6f8-97e0-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('87e999fe-97e9-11eb-b61b-42010a800007', '2021-04-07 21:38:02', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '7fde7cae-97e9-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('88081a44-9827-11eb-b61b-42010a800007', '2021-04-08 05:01:51', '2', '3');
INSERT INTO `viewhistory` VALUES ('8b35d774-9814-11eb-b61b-42010a800007', '2021-04-08 02:45:56', '1', '2');
INSERT INTO `viewhistory` VALUES ('a570a921-97f4-11eb-b61b-42010a800007', '2021-04-07 22:57:36', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '9a16dd92-97f4-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('b6189e8f-97df-11eb-b61b-42010a800007', '2021-04-07 20:27:45', '1', '1');
INSERT INTO `viewhistory` VALUES ('b7b237ff-97f6-11eb-b61b-42010a800007', '2021-04-07 23:12:26', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'd34d053b-97f4-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('bd8e02d2-9827-11eb-b61b-42010a800007', '2021-04-08 05:03:21', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'b00f8e2d-9827-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('d0f62a36-980a-11eb-b61b-42010a800007', '2021-04-08 01:36:18', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', 'c1e2da8b-980a-11eb-b61b-42010a800007');
INSERT INTO `viewhistory` VALUES ('d324defe-97f6-11eb-b61b-42010a800007', '2021-04-07 23:13:12', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '3');
INSERT INTO `viewhistory` VALUES ('d82ea7c5-97f6-11eb-b61b-42010a800007', '2021-04-07 23:13:20', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '2');
INSERT INTO `viewhistory` VALUES ('dde76ca0-975b-11eb-b61b-42010a800007', '2021-04-07 04:43:58', 'cbdef4d4-7168-11eb-a09f-f0795907d9ec', '1');
INSERT INTO `viewhistory` VALUES ('ed3b1c1c-981f-11eb-b61b-42010a800007', '2021-04-08 04:07:25', '207047bf-9818-11eb-b61b-42010a800007', '3');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
