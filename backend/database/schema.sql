CREATE TABLE
    category (
        id int primary key auto_increment not null,
        name VARCHAR(255) NOT NULL
        );

CREATE TABLE
    sport (
        id int primary key auto_increment not null,
        name VARCHAR(255) NOT NULL
    );

CREATE TABLE
    video (
        id int primary key auto_increment not null,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        year int,
        url VARCHAR(255),
        category_id int NOT NULL,
        sport_id int not null,
        FOREIGN key (category_id) REFERENCES category(id),
        FOREIGN key (sport_id) REFERENCES sport(id)
    );

INSERT INTO category(name) VALUES("Les plus grands exploits sportif");
INSERT INTO category(name) VALUES("Les meilleurs moment du sport");
INSERT INTO category(name) VALUES("E-sport");

insert into sport(name) VALUES("Athlétisme");
insert into sport(name) VALUES("Natation");
insert into sport(name) VALUES("Football");
insert into sport(name) VALUES("Vélo");
insert into sport(name) VALUES("Ski");
insert into sport(name) VALUES("Rally");
insert into sport(name) VALUES("Formula one");
insert into sport(name) VALUES("E-sport");

INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("Ben Johnson Vs Carl Lewis", "1988 Olympics 100m Semi-Finals Ben Johnson Carl Lewis CBC", 1988, "https://youtu.be/Wcya6ccGfVg?si=FvbI5EobIh5Nb2My", 1, 1);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("Michauel Phelps", "Enjoy this look back at Michael Phelps historic performance at the Summer Olympic Games 2008 in Beijing, China.Before Phelps became the most decorated Olympian of all time, he set the record for the single most Gold medals at any single Olympic Games, the USA swimmer finished with 8 Gold medals at the Beijing 2008 Games.", 2008, "https://youtu.be/3o7I0FxFNeQ?si=gUunN2mnLn0ecH40", 1, 2);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("Brazil team", "Brazil s Neymar scores the final penalty in the shoot-out against Germany, winning his country s first gold medal in Olympic football.", 2016, "https://youtu.be/-Jmjn_dJt_4?si=e3tSbaeeosOsIuMc", 2,3);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("Bernard Hinault Vs Greg LeMond", "Stage 18: Briançon - Alpe d'Huez, Bernard Hinault and Greg LeMond confiscate the Tour in this great alpine stage (Galibier, Croix de Fer, Alpe d'Huez), Urs Zimmermann is rejected at 5 minutes, the others, at much more...", 1986, "https://youtu.be/1oIkVNykuuE?si=Ko5AXCahqf3C3fWN", 2, 4);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("Perrine Laffond", "OLYMPIC GAMES PYEONGCHANG 2018. FREECYCLE SKIING. She was expected, here she is finally. The first gold medal for the French clan. After achieving the best score in qualifying, Perrine Laffont confirmed and won the OLYMPIC TITLE in mogul skiing, the first French medal of this Olympics and the most beautiful metal! S U B L I M E. Bravo pepette! Go Blues! The Games are fully underway for the French delegation.", 2018, "https://youtu.be/rEjq_YSg2T8?si=9LWc4kHOERnf0qtt", 2 , 5);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("Ari Vatanen 205 T16", "WRC Group B Peugeot 205T16 Supercar Ari Vatanen, Timo Salonen, Bruno Saby, Juha Kankkunen", 2008, "https://www.youtube.com/watch?v=YeC34x_4F_g", 2,6);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("Sébastien Loeb", "Running the Var rally with a Peugeot 306 Maxi? It was the dream of Sébastien Loeb, nine-time world champion.", 2018, "https://youtu.be/Bki5qrgu2dM?si=apHnhdEXSRMsCcKf", 2, 7);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("Renault Nigel Mansell", "Track: Hungaroring - Car: Williams FW14 - Engine: Renault V10", 1991, "https://youtu.be/EzQxfBsBLs8?si=pvxeHSIzaeISKven", 1, 8);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("E_sport", "The 1st French Championship will take place tomorrow at the Esterel Aréna in Saint Raphaël, everything is ready!. Thanks again to all our partners: The town of Saint-Raphaël, the Parisian Hado Passion arena as well as the We are sports arena in Lyon. Thanks also to our sponsors La SALLE Saint Raphael and HAWK FUEL.", 2019, "https://youtu.be/kTqWfzMVi3k?si=1kMmwjEc6viooMNg", 3,8);
INSERT INTO video(title, description, year, url, category_id, sport_id) VALUES("E-sport", "Through the 19th edition of the Gamers Assembly, Poitiers is one of the 7 cities which will host competitions for the French League of Legends championship, the most popular video game in the world.", 2018, "https://youtu.be/JprnQe1nHGk?si=NdUhI2oTGqhT6IzZ", 3, 8);