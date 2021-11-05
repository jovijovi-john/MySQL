SELECT - Filtrando seleções agrupadas (HAVING)
    Ou seja, o HEAVING obrigatoriamente depende da instrução GROUP BY

    Ela serve para aplicar filtros sobre o resultado de colunas agrupadas


    SELECT
        <tabela(s)>
    FROM
        <tabela(s)>
    WHERE
        <filtro(s)>
    GROUP BY
        <agrupamento>
    HAVING
        filtro(s) sobre agrupamento
    ORDER BY
        <ordenação>
    LIMIT
        <offset>, <limit>

    ----------------------------------------------------

    Having -> Filtro realizado sobre o resultado dos agrupamentos (GROUP BY)


## SQL QUERIES

    1->
        SELECT
            estado, COUNT(*) AS total_de_registros_por_estado
        FROM
            tb_alunos
        GROUP BY
            estado
        ;
    2->
        SELECT
            estado, COUNT(*) AS total_de_registros_por_estado
        FROM
            tb_alunos
        GROUP BY
            estado
        HAVING
            total_de_registros_por_estado >= 5
        ;
    3->
        SELECT
            estado, COUNT(*) AS total_de_registros_por_estado
        FROM
            tb_alunos
        GROUP BY
            estado
        HAVING
            estado IN ('SP', 'MG')
        ;
    4->
        SELECT
            estado, COUNT(*) AS total_de_registros_por_estado
        FROM
            tb_alunos
        GROUP BY
            estado
        HAVING
            estado IN ('SC', 'CE') AND total_de_registros_por_estado > 4
        ;
    5->

        SELECT
            estado, COUNT(*) AS total_de_registros_por_estado
        FROM
            tb_alunos
        WHERE
            interesse <> 'Esporte'
        GROUP BY
            estado
        HAVING
            total_de_registros_por_estado > 3
        ;
        
        Selecione todos os registros cujo interesse é diferente de esporte. Na sequência, faça um agrupamento sobre o resultado desses registros para fornecer uma segunda resposta