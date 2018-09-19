create table if not exists trabalho
(
	id     			int          auto_increment primary key,
	titulo   		varchar(200) not null,
	resumo  			varchar(400) not null,
	palavra_chave1 varchar(100),
	palavra_chave2 varchar(100),
	palavra_chave3	varchar(100)
);

