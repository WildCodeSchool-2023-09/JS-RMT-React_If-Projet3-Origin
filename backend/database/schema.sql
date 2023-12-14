CREATE TABLE
    category (
        id int primary key auto_increment not null,
        category VARCHAR(255) NOT NULL,
    );

CREATE TABLE
    vidéo (
        id INTEGER PRIMARY KEY INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL,
        definition VARCHAR(255) NOT NULL,
        years INTEGER,
        url VARCHAR(255),
        FOREIGN key(title) REFERENCES category(id),
    );

CREATE TABLE
    sport (
        id INTEGER PRIMARY KEY INTEGER NOT NULL,
        label VARCHAR(255),
        type VARCHAR(255),
        discipline VARCHAR(255),
        Foreign Key (title) REFERENCES video(id)
    );

INSERT INTO category(category)
VALUES('Athlétisme'),
INSERT INTO
    category(category)
VALUES('Natation'),
INSERT INTO
    category(category)
VALUES('Football'),
INSERT INTO
    category(category)
VALUES('Velo'),
INSERT INTO
    category(category)
VALUES('Ski'),
INSERT INTO
    category(category)
VALUES('Rally'),
INSERT INTO
    category(category)
VALUES('Rally'),
INSERT INTO
    category(category)
VALUES('Formula one'),
INSERT INTO
    category(category)
VALUES('E-sport'),
INSERT INTO
    category(category)
VALUES('E-sport');

INSERT INTO
    video(title, definition, years, url)
VALUES
(
        'Ben Johnson Vs Carl Lewis, 1988 Olympics 100m Semi-Finals Ben Johnson Carl Lewis CBC',
        1988,
        'https://youtu.be/Wcya6ccGfVg?si=FvbI5EobIh5Nb2My'
    ),