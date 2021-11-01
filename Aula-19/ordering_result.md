Select - Ordenando Resultado

ORDER BY, assim como o WHERE, é uma instrução opcional
Nele, temos a possibilidade de ordenar os registros por ordem ascendente, ou descendente. Bastando para isso apenas informar o pivô da ordenação dos resultados.

Quando não informamos o método de ordenação, o método ascendente passa ser o default
No processo de ordenação, podemos combinar valores de colunas diferentes.

## SQL COMMANDS

    1->

        SELECT
        *
        FROM
        tb_alunos
        WHERE
            idade BETWEEN 18 AND 59
        ORDER BY
            nome ASC
        ;

    2 ->

        SELECT
        *
        FROM
        tb_alunos
        WHERE
            idade BETWEEN 18 AND 59
        ORDER BY
            nome DESC
        ;

    3 ->

        SELECT
        *
        FROM
        tb_alunos
        WHERE
            idade BETWEEN 18 AND 59
        ORDER BY
            nome ASC, idade DESC, estado ASC
        ;



