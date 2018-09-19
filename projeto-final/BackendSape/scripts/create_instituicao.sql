create table if not exists instituicao
(
	id     int          auto_increment primary key,
	nome   varchar(250) not null unique,
	sigla  varchar(10)  not null
);