create table if not exists trabalho_usuario
(
	id     	   int auto_increment primary key,						
	usuario_id  int not null references usuario(id),
	trabalho_id int not null references trabalho(id),
	FOREIGN KEY (trabalho_id) REFERENCES trabalho(id) ON DELETE CASCADE,
	FOREIGN KEY (usuario_id)  REFERENCES usuario (id) ON DELETE CASCADE
	
);

