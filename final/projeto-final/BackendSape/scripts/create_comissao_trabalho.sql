create table if not exists comissao_trabalho
(
	id     	   int auto_increment primary key,
	comissao_id int not null references comissao(id),
	trabalho_id int not null references evento(id)
);

