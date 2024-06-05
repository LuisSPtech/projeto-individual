-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE celloconnect;

use celloconnect;

create table usuario
(
idUsuario int primary key auto_increment,
nome varchar(200),
cpf char(11),
email varchar(100),
senha varchar(20)
);

create table formulario
(
idFormulario int primary key auto_increment,
nomeFormulario varchar(100),
dtCriacao date
);

create table resposta
(
idResposta int,
fkFormulario int,
fkUsuario int,
resposta1 char(1),
resposta2 char(1),
resposta3 char(1),
resposta4 char(1),
resposta5 char(1),
resposta6 char(1),
resposta7 char(1),
constraint pkResposta primary key (fkFormulario, fkUsuario, idResposta),
constraint fkFormularioResposta foreign key (fkFormulario) references formulario(idFormulario),
constraint fkUsuarioResposta foreign key (fkUsuario) references usuario(idUsuario) 
);