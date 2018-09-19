create table if not exists campus
(
	id     		   int          auto_increment primary key,
	nome   	     	varchar(250) not null unique, 
	instituicao_id int          not null references instituicao(id)
);

