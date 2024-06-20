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

select* from resposta;
insert into formulario values 
(default, 'Formulario CelloConnect', '2024-05-24');


insert into resposta values
(1, 1, 1, 'A', 'C', 'D', 'B', 'D', 'A', 'B');

 
truncate usuario;
SELECT * FROM usuario LIMIT 100;
SELECT * FROM usuario WHERE email = "lhr.alves2006@gmail.com" AND senha = "luis123456" LIMIT 100;
SELECT idUsuario, nome, cpf, email FROM usuario WHERE email = 'lhr.alves2006@gmail.com' AND senha = 'luis1234567';
select * from usuario;

