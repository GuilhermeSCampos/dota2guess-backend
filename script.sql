-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
-- Server version	8.0.15-5


DROP TABLE IF EXISTS `classicguess`;
CREATE TABLE
  `classicguess` (
    `count` int NOT NULL,
    `todayhero` varchar(255) NOT NULL,
    `lasthero` varchar(255) NOT NULL,
    `skillimg` varchar(255) DEFAULT NULL,
    `quote` varchar(255) DEFAULT NULL,
    `audioLink` varchar(255) DEFAULT NULL,
    `skillName` varchar(255) DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8

DROP TABLE IF EXISTS `generatedclassic`;
CREATE TABLE
  `generatedclassic` (
    `id` int NOT NULL AUTO_INCREMENT,
    `hero` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 187 DEFAULT CHARSET = utf8

DROP TABLE IF EXISTS `generatedquote`;
CREATE TABLE
  `generatedquote` (
    `id` int NOT NULL AUTO_INCREMENT,
    `hero` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 141 DEFAULT CHARSET = utf8

DROP TABLE IF EXISTS `generatedskill`;
CREATE TABLE
  `generatedskill` (
    `id` int NOT NULL AUTO_INCREMENT,
    `hero` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 141 DEFAULT CHARSET = utf8

DROP TABLE IF EXISTS `quoteguess`;
CREATE TABLE
  `quoteguess` (
    `count` int NOT NULL,
    `todayhero` varchar(255) NOT NULL,
    `lasthero` varchar(255) NOT NULL,
    `quote` varchar(255) NOT NULL,
    `audiolink` varchar(255) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8

DROP TABLE IF EXISTS `skillguess`;
CREATE TABLE
  `skillguess` (
    `count` int NOT NULL,
    `todayhero` varchar(255) NOT NULL,
    `lasthero` varchar(255) NOT NULL,
    `skillimg` varchar(255) NOT NULL,
    `skillname` varchar(255) NOT NULL,
    `rotation` int DEFAULT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8

DROP TABLE IF EXISTS `heroes`;
CREATE TABLE
  `heroes` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `primaryAttr` varchar(255) NOT NULL,
    `attackType` varchar(255) NOT NULL,
    `strength` int NOT NULL,
    `agility` int NOT NULL,
    `intelligence` int NOT NULL,
    `img` varchar(255) NOT NULL,
    `role` varchar(255) DEFAULT NULL,
    `baseHp` int NOT NULL,
    `baseMp` int NOT NULL,
    `baseAttack` varchar(255) NOT NULL,
    `baseDefense` decimal(4, 2) NOT NULL,
    `moveSpeed` int NOT NULL,
    `gender` varchar(255) NOT NULL,
    `skills` longtext,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 125 DEFAULT CHARSET = utf8