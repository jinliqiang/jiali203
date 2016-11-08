SET NAMES UTF8;
DROP DATABASE IF EXISTS suning;
CREATE DATABASE suning CHARSET=UTF8;
USE suning;

CREATE TABLE user(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(32),
  pwd1 VARCHAR(16),
  phone VARCHAR(11)
);

INSERT INTO user VALUES(NULL,'靳立强','12345678',13161324892);

CREATE TABLE IF NOT EXISTS `fangxin_products` (
  `id` int(11) PRIMARY KEY  AUTO_INCREMENT,
  `name` varchar(100) ,
  `img` varchar(100) 
) ;

INSERT INTO `fangxin_products` (`id`, `name`, `img`) VALUES
(1, '海外购', 'imag/146846084055863770.jpg'),
(2, '众筹', 'imag/146857706508434274.jpg'),
(3, '中华特色','imag/146854796100353472.jpg'),
(4, '智能生活', 'imag/146857647488511173.jpg'),
(5, '新欢', 'imag/146858296626418327.jpg'),
(6, '任性付', 'imag/146857717497962063.jpg'),
(7, '量贩惠', 'imag/146854520902044952.jpg'),
(8, '以旧换新', 'imag/146858067098133446.jpg');

CREATE TABLE pingjia(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  liuyan VARCHAR(10000)
);
INSERT INTO pingjia VALUES(NULL,'做的很好');


SELECT * FROM user;