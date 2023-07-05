-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
-- Server version	8.0.15-5


DROP TABLE IF EXISTS `classicguess`;
CREATE TABLE `classicguess` (
  `count` int(11) NOT NULL,
  `todayhero` varchar(255) NOT NULL,
  `lasthero` varchar(255) NOT NULL,
  `skillimg` varchar(255) DEFAULT NULL,
  `quote` varchar(255) DEFAULT NULL,
  `audioLink` varchar(255) DEFAULT NULL,
  `skillName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;

DROP TABLE IF EXISTS `generatedclassic`;
CREATE TABLE `generatedclassic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hero` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `generatedquote`;
CREATE TABLE `generatedquote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hero` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `generatedskill`;
CREATE TABLE `generatedskill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hero` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `quoteguess`;
CREATE TABLE `quoteguess` (
  `count` int(11) NOT NULL,
  `todayhero` varchar(255) NOT NULL,
  `lasthero` varchar(255) NOT NULL,
  `quote` varchar(255) NOT NULL,
  `audiolink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `skillguess`;
CREATE TABLE `skillguess` (
  `count` int(11) NOT NULL,
  `todayhero` varchar(255) NOT NULL,
  `lasthero` varchar(255) NOT NULL,
  `skillimg` varchar(255) NOT NULL,
  `skillname` varchar(255) NOT NULL,
  `rotation` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;