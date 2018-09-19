create table if not exists usuario
(
	id          int          auto_increment primary key,
	nome        varchar(200) not null,
	sobrenome   varchar(200) not null,
	email       varchar(200) not null,
	senha       varchar(100)   not null,
	tipo        varchar(100) not null,
	criado_em   date         not null,
	comissao_id int          references comissao(id)
);