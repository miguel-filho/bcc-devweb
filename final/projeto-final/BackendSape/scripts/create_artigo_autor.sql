create table if not exists trabalho_autor
(
	id        int          auto_increment primary key,
	artigo_id int not null references artigo(id),
	autor_idl int not null references autor(id)
);

