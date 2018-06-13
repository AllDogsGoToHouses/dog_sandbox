DROP DATABASE IF EXISTS all_dogsDB;

CREATE DATABASE all_dogsDB;

USE all_dogsDB;

CREATE TABLE dogs (
  id INT NOT NULL AUTO_INCREMENT,
  dog_name VARCHAR(100) NOT NULL,
  dog_image VARCHAR(200) NOT NULL,
  size VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  activity_level VARCHAR(20) NOT NULL,
  likes VARCHAR(200),
  dislikes VARCHAR(200),
  PRIMARY KEY (id)
);

INSERT INTO dogs (dog_name, dog_image, size, age, activity_level, likes, dislikes)
VALUES 

("Marley", "http://www.toptenz.net/wp-content/uploads/2013/10/rasta-dog.jpg", "Small", 15, "Active", "Weed, Chillin, Small Birds", "Loud Noises, Cops"), 

("Google", "https://i.imgflip.com/1f0068.jpg", "Small", 13, "Playful", "Kids, Big Dogs", "Small Dogs, bugs, bug eyed things"),

("Asher", "http://cdn.ebaumsworld.com/mediaFiles/picture/718392/85044337.jpg", "Small", 7, "Lazy", "Vinyl Records, Kale", "People, trends, happiness"),

("Joker", "https://cdn.trendhunterstatic.com/phpthumbnails/195/195643/195643_1_800.jpeg", "Medium", 9, "Active", "Botox, Joke Shops", "Ugly people"),

("Jensen", "https://cdn.trendhunterstatic.com/phpthumbnails/59/59895/59895_1_800.jpeg", "Large", 10, "Lazy", "Money, Naps", "Americans, Welfare for all"),

("Bruce", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCg2xRxdCoSe_oMoSkV2oqzjXI8C0F4eOPm-Gn_ZJ-2MnRgV9HNQ", "Medium", 8, "Active","Bats, Caves, Underground Lairs", "Penguins, Riddles, People with parents"),

("Myrtle", "http://growingfruit-images.s3-us-west-2.amazonaws.com/original/3X/7/4/743fc05b491f23207a2e2c4681bf3f66419c61c2.jpg", "Large", 15 , "Playful", "Long walks on the beach, rom-coms", ""),

("Lila", "https://image.ibb.co/fWrKv8/01.jpg", "Medium", 4, "Active", "Kong Toys, cuddles", "Sharing, Dry Food"),

("Ali", "https://image.ibb.co/kc0q2o/02.jpg", "Medium", 7, "Active", "Boxing, Smooth Talkin", "Yoga"),

("Krooger", "https://image.ibb.co/b36V2o/04.jpg", "Large", 14, "Playful", "Nightmares, Children", "Fire, Parents"),

("Mila", "https://image.ibb.co/ifiooT/05.jpg", "Small", 9, "Lazy", "Fashion, Ballet", "Natalie Portman"),

("Scrappy", "https://image.ibb.co/g8tXF8/06.jpg", "Small", 1, "Active", "Mysteries, Snacks", "People in Masks"),

("Wishbone", "https://image.ibb.co/b06xho/08.jpg", "Medium", 10, "Playful", "Books, Dressing in period costumes", "TV, Video Games"),

("Superfly", "https://image.ibb.co/mqbKv8/09.jpg", "Large", 9, "Lazy", "Cold Chillin, Old School Gold Chains, Soundtrack to the A-Team", "Fools"),

("Oliver", "https://image.ibb.co/gLKuTT/10.jpg", "Large", 12, "Active", "Coffee, Books, Feeling Superior", "Two black men minding their own business"),

("Ryder", "https://preview.ibb.co/kVKuTT/13.jpg", "Small", 5, "Playful", "Leather, Using motorcycle to mask insecurities", "Cars, Suede"),

("Madame Geroux", "https://preview.ibb.co/mfQONo/15.jpg", "Large", 8, "Lazy", "Martinis, Barking at the help", "Youth, Dogs that are more attractive"),

("Max", "https://preview.ibb.co/ktMKv8/16.jpg", "Large", 7, "Playful", "Ruining plans, Eating at the table", "Cats"),

("Bond", "https://preview.ibb.co/g3Q18T/17.jpg", "Large", 11, "Playful", "Martinis, Bitches", "British Super Villians")


-- Shelter Info:
-- Dog Name:
-- Image of dog: URL
-- Size: Small, Medium or Large
-- Age:
-- Activity Level: Active, Playful, Couch Potato
-- Likes: Kids, Other Dogs
-- Doesn't Like: Fireworks, Cats



-- http://i.imgur.com/mktp8WL.jpg
-- https://www.telegraph.co.uk/content/dam/video_previews/r/v/rvmjg1nze6z4vd2gj6owhh9jc6xvdmhk-xlarge.jpg
-- https://pbs.twimg.com/profile_images/2677749134/52f49fade80c0f71eab0ee68a905ca9e_400x400.jpeg
-- https://cbsnews1.cbsistatic.com/hub/i/r/2011/09/29/9b4f45e5-a643-11e2-a3f0-029118418759/resize/620x465/3b1eaf34514222b91efa34aaaa9bf64a/1-etsy-youngurbanpuppy.jpg
-- http://2.bp.blogspot.com/-LyVF_sJMJkA/Tzu-8bxH00I/AAAAAAAAH5I/23faMTa8Lu0/s1600/3-headed-dog-costume.jpg
-- http://www.samorzady.org/upload/2018/01/10/dogs-in-costumes-httpwwwnamecombloggeneralfun-funny-costumes-for-dogs-s-2133cab2ebb6f08f.jpg
-- https://timidberemy.files.wordpress.com/2014/10/frog.jpg
-- https://petfriendlysites.com/wp-content/uploads/2018/02/need-more-proof-that-life-with-dogs-is-the-best-watch-this-and-smile.jpg
-- https://i.ytimg.com/vi/HJig6yxU5gY/maxresdefault.jpg
