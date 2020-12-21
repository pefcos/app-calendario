CREATE DATABASE calendario;

CREATE TABLE usuarios (
    userid SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    userpass VARCHAR(33) NOT NULL
);

CREATE TABLE atividades (
    ativid SERIAL NOT NULL PRIMARY KEY,
    ativuser INTEGER NOT NULL,
    nome VARCHAR(255) NOT NULL,
    dataini DATE NOT NULL,
    datafim DATE NOT NULL
);