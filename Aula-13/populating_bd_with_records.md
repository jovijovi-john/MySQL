generatedata.com
=> produção de queries de maneira automatica

o mysql suporta que vários values sejam encaminhados em um mesmo INSERT (sintaxe sugar)

-> Clique no BD
-> Clique em SQL
-> Cole:
    CREATE TABLE tb_alunos (
        id_aluno int,
        nome varchar(255) default NULL,
        idade int default NULL,
        interesse varchar(255) default NULL,
        email varchar(255) default NULL,
        estado varchar(255) default NULL
    );

faça o mesmo processo para os INSERT INTO

    