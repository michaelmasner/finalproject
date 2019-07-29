-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: fs_bnb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bookings` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `dateFrom` varchar(255) NOT NULL,
  `dateTo` varchar(255) NOT NULL,
  `userId` int(6) unsigned NOT NULL,
  `propertyId` int(6) unsigned NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId_idx` (`userId`),
  KEY `propertyId_idx` (`propertyId`),
  CONSTRAINT `propertyId` FOREIGN KEY (`propertyId`) REFERENCES `property` (`id`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,'2019-07-27T13:02:21.087Z','2019-07-27T13:02:21.087Z',6,1,'REJECTED'),(4,'2019-07-27T13:02:21.087Z','2019-07-27T13:02:21.087Z',6,1,'REJECTED'),(6,'2019-07-28T18:38:17.408Z','2019-07-28T18:38:17.408Z',6,1,'ACCEPTED'),(10,'2019-07-29T02:54:22.026Z','2019-07-29T02:54:22.026Z',5,1,'NEW'),(11,'2019-07-29T02:54:22.026Z','2019-07-29T02:54:22.026Z',5,1,'NEW'),(12,'2019-07-29T02:54:22.026Z','2019-07-29T02:54:22.026Z',5,1,'NEW'),(17,'2019-07-29T13:28:16.125Z','2019-07-29T13:28:16.125Z',5,3,'NEW'),(20,'2019-07-29T13:28:55.452Z','2019-07-29T13:28:55.452Z',5,1,'NEW'),(22,'2019-07-29T13:29:26.012Z','2019-07-29T13:29:26.012Z',5,3,'NEW');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `property` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `providerId` int(6) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `providerId_idx` (`providerId`),
  CONSTRAINT `providerId` FOREIGN KEY (`providerId`) REFERENCES `provider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (1,'Modern, Chic Penthouse with Mountain, City & Sea ','Cape Town, South Africa','https://www.countrylife.co.za/wp-content/uploads/2016/09/ElephantHouseFinal-800x445.jpg','1173',1),(3,'WOW','Texas','https://insideguide.co.za/app/uploads/sites/2/2017/03/airbnb-cape-town-1.jpg','400',2),(9,'Unwind in a Bright, Airy Space with Rustic Accents','Cape Town, South Africa','https://s-ec.bstatic.com/images/hotel/max1024x768/665/66592701.jpg','529',1),(10,'Mediteranean style villa apartment','Cape Town, South Africa','https://img.capetownetc.com/wp-content/uploads/2016/08/airbnb-10.jpg','743',1),(11,'Sunny Central Apartment with Style','Cape Town, South Africa','https://insideguide.co.za/app/uploads/sites/2/2017/03/airbnb-cape-town-1.jpg','461',1),(12,'Clifton Beach Apartment','Cape Town, South Africa','http://www.capevillacollection.com/wp-content/uploads//2014/01/201.jpg','1150',1);
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provider`
--

DROP TABLE IF EXISTS `provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `provider` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `cellphone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider`
--

LOCK TABLES `provider` WRITE;
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
INSERT INTO `provider` VALUES (1,'Mike','Masner','9173536541','michaelmasner@gmail.com','password','provider'),(2,'jes','Blake','917353652','jes@gmail.com','password','provider'),(3,'mike','Blake','917353652','black@gmail.com','password','provider'),(4,'dsofoisadfoif','sadofinsoifniofna','2341432321','lol@gmail.com','password','provider'),(6,'admin','admin','123132123','admin@gmail.com','1','provider'),(7,'admin','admin','21312312','abc@gmail.com','1','provider'),(8,'okmfkoamkomf','afomapogmofp','123123','asw@gmail.com','1','provider'),(9,'pfdmapmfp','aopfmapsf','21312312','22@gmail.com','1','provider'),(10,'akfka','fdafampsf','123123','e@gmail.com','1','provider'),(11,'asdopadas','ksadkad','adkmnaodmas','opasmdas','asklmdasd','provider'),(12,'sldmaopdmadskad','aldmalsd','asdomad','1@gmail.com','1','provider'),(13,'sadmasdopm','spdmamd','123123123','3@gmail.com','1','provider'),(14,'sadpoasdopasd','sopdmoaspdm','apodmasopd','toto@gmail.com','1','provider');
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_mapping_model`
--

DROP TABLE IF EXISTS `role_mapping_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `role_mapping_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_mapping_model`
--

LOCK TABLES `role_mapping_model` WRITE;
/*!40000 ALTER TABLE `role_mapping_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_mapping_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `cellphone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'Michael','Masner','9173536541','michaelmasner@gmail.com','password','user'),(6,'afondsofoasf','sadofgsoaignag','2134231123','lol@gmail.com','password','user'),(7,'SDSDADADS','SAKDMDSK','21314234214','wow@gmail.com','password','user'),(8,'sdfsdfsf','sdfsdsdf','sdfsdfsf','','aasd','user'),(9,'sasdplmaspdmapd','aspdmadmpsdo','213123','1@gmail.com','1','user'),(10,'123213','123123','123213','2@gmail.com','1','user'),(11,'adasdasd','asdasda','asd','3@gmail.com','1','user'),(12,'smdiasndia','asfmdaskf jas','123213123','4@gmail.com','1','user'),(13,'smdiasndia','asfmdaskf jas','123213123','5@gmail.com','1','user'),(14,'smdiasndia','asfmdaskf jas','123213123','6@gmail.com','1','user'),(15,'smdiasndia','asfmdaskf jas','123213123','7@gmail.com','1','user'),(16,'smdiasndia','asfmdaskf jas','123213123','8@gmail.com','1','user'),(17,'smdiasndia','asfmdaskf jas','123213123','9@gmail.com','1','user'),(18,'asdasd','asdasd','asdasd','10@gmail.com','1','user'),(19,'qdasdsa','sadasd','asdasdas','11@gmail.com','1','user'),(20,'asdaposdpoas','admaksodo','123123123','13','1','user'),(21,'adpamdsa','apdoamsdopa','123123','15','1','user'),(22,'isamdimadi','adosmasodima','asdomaodk','18@gmail.com','1','user'),(23,'asdkasdo','asasdko','ad askod ','19@gmail.com','1','user'),(24,'dmpasmdoa','asdpmads','asdono','20@gmail.com','1','user'),(25,'pamspdomasd','asdaosdmpo','asdasd','21@gmail.com','1','user'),(26,'asdpmasopd','asdpmasdpm','aspdmsapd','22@gmail.com','1','user'),(27,'admasdasdmo','adklmaskdl askdka','asdpoamdpomad','afmopadfm','1','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-29 23:47:56
