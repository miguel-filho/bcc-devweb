create table if not exists trabalho_autor
(
	id          int          auto_increment primary key,
	trabalho_id int not null,
	autor_id   int not null,
	FOREIGN KEY (trabalho_id) REFERENCES trabalho(id) ON DELETE CASCADE,
	FOREIGN KEY (autor_id) REFERENCES autor(id) ON DELETE CASCADE
);

