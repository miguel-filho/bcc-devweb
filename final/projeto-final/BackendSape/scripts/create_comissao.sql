create table if not exists comissao
(
	id     	 int          auto_increment primary key,
	nome   	 varchar(250) not null, 
	evento_id int          not null references evento(id),
	unique(nome, evento_id)
	
);

