CREATE TABLE
    category (
        id int primary key auto_increment not null,
        category VARCHAR(255) NOT NULL,
    );

CREATE TABLE
    vidéo (
        id INTEGER PRIMARY KEY INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL,
        définition VARCHAR(255) NOT NULL,
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