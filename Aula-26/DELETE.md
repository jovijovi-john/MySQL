DELETE - Excluindo registros


    DELETE FROM
        <tabela>
    WHERE
        <filtro(s)>

    
    DELETE faz parte do conjunto de instruções SQL conhecida como DML (Data Manipulation Language)

    Caso o WHERE não esteja presente na instrução de remoção de registros, todos os registros da tabela serão removidos.
    
    Geralmente não utiliza-se a instrução DELETE. Nesse caso, é feita uma atualização no registro modificando alguma coluna que represente o estado daquele registro. Usamos isso para fins de LOG, para informações históricas.

## SQL COMMANDS

    1 ->

        DELETE FROM
            tb_alunos
        WHERE
            id_aluno = 5;

    2 ->

        SELECT
            *
        FROM
            tb_alunos
        WHERE
            idade IN (10, 18, 22, 28, 34) AND interesse = 'Esporte'

    3 ->

        DELETE FROM
            tb_alunos
        WHERE
            idade IN (10, 18, 22, 28, 34) AND interesse = 'Esporte'