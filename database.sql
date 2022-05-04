

create TABLE PasswordAndLogin (
  idPasswordAndLogin SERIAL PRIMARY KEY NOT NULL,
  Logins VARCHAR(256) NOT NULL,
  Passwords VARCHAR(15) NOT NULL,
  ConfirmationCode VARCHAR(10) NOT NULL,
  DateOfConfirmation DATE NOT NULL,
  DateOfPasswordChange DATE NOT NULL
 );

create TABLE users (
  idUser SERIAL PRIMARY KEY NOT NULL,
  ThePathToTheAvatar VARCHAR(45) NOT NULL,
  Nickname VARCHAR(15) NOT NULL,

  PasswordAndLogin INTEGER,
  FOREIGN KEY (PasswordAndLogin) REFERENCES PasswordAndLogin (idPasswordAndLogin)

);
create TABLE Comments (
  idComments SERIAL PRIMARY KEY NOT NULL,
  idUser INTEGER,
  Description VARCHAR(500) NOT NULL,
  Date_the_comment_was_created VARCHAR(45) NULL,

  FOREIGN KEY (idUser) REFERENCES users (idUser)

);

create TABLE Games (
  idGames SERIAL PRIMARY KEY NOT NULL,
  idComments INTEGER,
  Name_of_the_game VARCHAR(45) NOT NULL,
  Description_of_the_game VARCHAR(1000) NOT NULL,
  Path_to_the_directory VARCHAR(45) NOT NULL,

  FOREIGN KEY (idComments) REFERENCES Comments (idComments)

);

create TABLE Genres (
  idGenres SERIAL PRIMARY KEY NOT NULL,
  Name_of_the_genre VARCHAR(50) NOT NULL
);

create TABLE Library (
  idlibrary SERIAL PRIMARY KEY NOT NULL,
  idGames INTEGER,
  idUser INT NOT NULL,

    FOREIGN KEY (idGames) REFERENCES Games (idGames),

    FOREIGN KEY (idUser) REFERENCES users (idUser)

);

create TABLE GamesAndGenres (
  idGamesAndGenres SERIAL PRIMARY KEY NOT NULL,
  idGames INTEGER NOT NULL,
  idGenres INTEGER NOT NULL,
    FOREIGN KEY (idGames) REFERENCES Games (idGames),
    FOREIGN KEY (idGenres) REFERENCES Genres (idGenres)
);

CREATE TABLE Publisher (
  idPublisher SERIAL PRIMARY KEY NOT NULL,
  PublishersName VARCHAR(100) NOT NULL
);

CREATE TABLE Publisher_And_Games (
  idPublisherAndGames SERIAL PRIMARY KEY NOT NULL,
  idGames INTEGER NOT NULL,
  idPublisher INTEGER NOT NULL,

    FOREIGN KEY (idPublisher) REFERENCES Publisher (idPublisher),
    FOREIGN KEY (idGames) REFERENCES Games (idGames)
);