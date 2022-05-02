

create TABLE PasswordAndLogin (
  idPasswordAndLogin INT SERIAL PRIMARY KEY NOT NULL,
  Login VARCHAR(256) NOT NULL,
  Password VARCHAR(15) NOT NULL,
  ConfirmationСode VARCHAR(10) NOT NULL,
  DateOfConfirmation DATETIME NOT NULL,
  DateOfPasswordChange DATETIME NOT NULL)
 

create TABLE User (
  idUser INT SERIAL PRIMARY KEY NOT NULL,
  ThePathToTheAvatar VARCHAR(45) NOT NULL,
  Nickname VARCHAR(15) NOT NULL,
  --INDEX `fk_User_PasswordAndLogin_idx` (`PasswordAndLogin(FK)` ASC) VISIBLE,
  --CONSTRAINT `fk_User_PasswordAndLogin`
  PasswordAndLogin INTEGER,
  FOREIGN KEY (PasswordAndLogin) REFERENCES PasswordAndLogin (idPasswordAndLogin))
  --ON DELETE NO ACTION
  --ON UPDATE NO ACTION

create TABLE Comments (
  idComments INT SERIAL PRIMARY KEY NOT NULL,
  idUser INTEGER,
  Description VARCHAR(500) NOT NULL,
  Date_the_comment_was_created VARCHAR(45) NULL,
  --INDEX `fk_Comments_User1_idx` (`idUser(FK)` ASC) VISIBLE,
  --CONSTRAINT `fk_Comments_User1`
  FOREIGN KEY (idUser) REFERENCES User (idUser))
  --ON DELETE NO ACTION
  --ON UPDATE NO ACTION)


create TABLE Games (
  idGames INT SERIAL PRIMARY KEY NOT NULL,
  idComments INTEGER,
  Name_of_the_game VARCHAR(45) NOT NULL,
  Description_of_the_game VARCHAR(1000) NOT NULL,
  Path_to_the_directory VARCHAR(45) NOT NULL,
  --INDEX `fk_Games_Comments1_idx` (`idComments(FK)` ASC) VISIBLE,
  --CONSTRAINT `fk_Games_Comments1`
  FOREIGN KEY (idComments) REFERENCES Comments (idComments))
  --ON DELETE NO ACTION
  --ON UPDATE NO ACTION)


create TABLE Genres (
  idGenres INT SERIAL PRIMARY KEY NOT NULL,
  Name_of_the_genre VARCHAR(50) NOT NULL)


create TABLE Library (
  idlibrary INT SERIAL PRIMARY KEY NOT NULL,
  idGames INTEGER,
  idUser INT NOT NULL,
  --INDEX `fk_library_Games1_idx` (`idGames(FK)` ASC) VISIBLE,
  --INDEX `fk_library_User1_idx` (`idUser(PK)` ASC) VISIBLE,
  --CONSTRAINT `fk_library_Games1`
    FOREIGN KEY (idGames) REFERENCES Games (idGames),
    --ON DELETE NO ACTION
    --ON UPDATE NO ACTION,
  --CONSTRAINT `fk_library_User1`
    FOREIGN KEY (idUser) REFERENCES User (idUser))
    --ON DELETE NO ACTION
    --ON UPDATE NO ACTION)


create TABLE GamesAndGenres (
  idGamesAndGenres INT SERIAL PRIMARY KEY NOT NULL,
  idGames INTEGER NOT NULL,
  idGenres INTEGER NOT NULL,
  --INDEX `fk_GamesAndGenres_Games1_idx` (`idGames(FK)` ASC) VISIBLE,
  --INDEX `fk_GamesAndGenres_Genres1_idx` (`idGenres(FK)` ASC) VISIBLE,
  --CONSTRAINT `fk_GamesAndGenres_Games1`
    FOREIGN KEY (idGames) REFERENCES Games (idComments)
    --ON DELETE NO ACTION
    --ON UPDATE NO ACTION,
  --CONSTRAINT `fk_GamesAndGenres_Genres1`
    FOREIGN KEY (idGenres) REFERENCES Genres (idGenres)
    --ON DELETE NO ACTION
    --ON UPDATE NO ACTION)


CREATE TABLE Publisher (
  idPublisher INT SERIAL PRIMARY KEY NOT NULL,
  PublishersName VARCHAR(100) NOT NULL)


CREATE TABLE Publisher_And_Games (
  idPublisherAndGames INT SERIAL PRIMARY KEY NOT NULL,
  idGames INTEGER NOT NULL,
  idPublisher INTEGER NOT NULL,
  --INDEX `fk_Publisher_and_Games_Publisher1_idx` (`idPublisher(FK)` ASC) VISIBLE,
  --INDEX `fk_Publisher_and_Games_Games1_idx` (`idGames(FK)` ASC) VISIBLE,
  --CONSTRAINT `fk_Publisher_and_Games_Publisher1`
    FOREIGN KEY (idPublisher) REFERENCES Publisher (idPublisher)
    --ON DELETE NO ACTION
    --ON UPDATE NO ACTION,
  --CONSTRAINT `fk_Publisher_and_Games_Games1`
    FOREIGN KEY (idGames) REFERENCES Games (idGames)
    --ON DELETE NO ACTION
    --ON UPDATE NO ACTION)
