create table if not exists autor
(
	id    int          auto_increment primary key,
	nome  varchar(200) not null,
	email varchar(200) not null,
	cpf	varchar(14)  not null unique
);

