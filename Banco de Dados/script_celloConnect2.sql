create database celloconnect;
use celloconnect;

create table usuario
(
idUsuario int primary key auto_increment,
nome varchar(200),
cpf char(11),
email varchar(100),
senha varchar(20)
);

select * from usuario;

create table formulario
(
idFormulario int primary key auto_increment,
respostaCorreta int,
respostaIncorreta int,
fkUsuario int,
foreign key (fkUsuario)
references usuario(idUsuario)
);

create table video(
idVideo int primary key auto_increment,
video1 varchar(20),
video2 varchar(20),
video3 varchar(20),
video4 varchar(20),
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario)
);




