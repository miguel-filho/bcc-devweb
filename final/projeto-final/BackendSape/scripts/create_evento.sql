create table if not exists evento
(
	id     			int          auto_increment primary key,
	nome   			varchar(200) not null,
	resumo  			varchar(300) not null,
	dt_inicio   	date     	 not null,
	dt_termino  	date 			 not null,
	local 			varchar(100),
	endereco    	varchar(100) not null,
	cidade      	varchar(100) not null,
	estado 			varchar(100)  not null,
	pais 				varchar(100) not null,
	organizado_por varchar (200), 
	campus_id      int not null references campus(id)
);

