O operador IN serve para realizar filtros de registros com base numa lista de possibilidades

Exemplo1:

    Isso:
        [...]
        WHERE interesse = 'Jogos' OR interesse = 'Música' OR interesse = 'Esporte';

    Pode escrito assim:
        [...]
        WHERE interesse IN ('Jogos', 'Música', 'Esporte');

Podemos tambem usar o NOT IN, para considerar apenas interesses que não estejam naquela lista especificada. Veja o exemplo 3

## SQL COMMANDS

    1 ->

        SELECT
        *
        FROM
        tb_alunos
        WHERE 
            interesse = 'Jogos' OR interesse = 'Música' OR interesse = 'Esporte'
        ;
            

    2 ->

        SELECT
        *
        FROM
        tb_alunos
        WHERE 
            interesse IN ('Jogos', 'Música', 'Esporte')
        ;

    3 ->
        SELECT
        *
        FROM
        tb_alunos
        WHERE 
            interesse not IN ('Jogos', 'Música', 'Esporte')
        ;