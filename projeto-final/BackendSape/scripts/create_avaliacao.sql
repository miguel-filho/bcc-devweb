create table if not exists avaliacao
(
	id     		   		int          auto_increment primary key,
	nota1   	     			decimal(5,2) not null, 
	nota2   	     			decimal(5,2) not null, 
	nota3   	     			decimal(5,2) not null, 
	nota4   	     			decimal(5,2) not null, 
	nota5   	     			decimal(5,2) not null, 
	nota6   	     			decimal(5,2) not null, 
	nota7   	     	      decimal(5,2) not null, 	
	comissao_trabalho_id int  not null references comissao_trabalho(id),
	avaliador_id int          not null references usuario(id)
);

