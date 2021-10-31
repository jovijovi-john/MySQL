SELECT - Filtros com operadores lógicos


## SQL COMMANDS

    1->

        SELECT
            *
        FROM
            tb_alunos
        WHERE
            interesse = 'Jogos' AND idade > 45
        ;


    2->

        SELECT
            *
        FROM
            tb_alunos
        WHERE
            interesse = 'Jogos' AND idade > 45 and estado = 'RN'
        ;

    3->

        SELECT
	        *
        FROM
            tb_alunos
        WHERE
            interesse = 'Jogos' OR idade > 45
        ;