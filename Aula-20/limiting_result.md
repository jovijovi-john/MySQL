SELECT - Limitando retorno
    Muito útil em paginações

Basta utilizar a instrução LIMIT para dizer quantos registros deverão ser retornados

O OFFSET serve para dizer a partir de qual registro deverá começar a contagem
    ->Os registros semprem iniciam do 0

O OFFSET serve como um deslocamento

Exemplo:

    SELECT
        <coluna(s)>
    FROM
        <tabela(s)>
    WHERE
        <filtro(s)>
    ORDER BY
        <ordenação>
    LIMIT
        5
    OFFSET
        2
    ;


Podemos usar uma outra opção de sintaxe, omitindo o OFFSET:

    [...]
    LIMIT 2(OFFSET), 5(LIMIT)


## Comandos SQL

    1 ->    
        SELECT
        *
        FROM
        tb_alunos
        LIMIT
            25
        ;

    2 ->    
        SELECT
        *
        FROM
        tb_alunos
        ORDER BY
            id_aluno DESC
        LIMIT
            25
        ;

        OBS: Primeiro vai ordenar todos os registros de tb_alunos de forma decrescente, e somente depois disso recuperará os 25 primeiros, que no caso serão os 25 ultimos.
        Ou seja, primeiro ele ordena os registros, depois ele retorna o limite com base naquela ordenação, e nao o contrario. Tipo, ele  NAO vai pegar os 25 primeiros e depois disso vai ordená-los, NÃO!!!
    
    3 ->    
        SELECT
        *
        FROM
        tb_alunos
        LIMIT
            4
        OFFSET
            0 (INCLUI O 0 => E INCLUSIVE)
        ;

        Isso significa que: a partir do registro 0 da nossa consulta traga o total de 4 registros (NAO QUER DIZER QUE ELE VAI IR ATE O ELEMENTO 4, QUER DIZER Q A PARTIR DO 0 (CONTANDO COM O 0) ELE VAI PEGAR 4 REGISTROS)
        (0, 1, 2, 3)
    4 ->    
        SELECT
        *
        FROM
        tb_alunos
        LIMIT
            4
        OFFSET
            4 (INCLUI O 4 => E INCLUSIVE)
        ;

        Isso significa que: a partir do registro 4 da nossa consulta traga o total de 4 registros
        (4, 5, 6, 7)
    5 ->    
        SELECT
        *
        FROM
        tb_alunos
        LIMIT
            4
        OFFSET
            8 (INCLUI O 8 => E INCLUSIVE)
        ;

        Isso significa que: a partir do registro 0 da nossa consulta traga o total de 4 registros
        (8, 9, 10, 11)
    
    6 ->

        SELECT
        *
        FROM
        tb_alunos
        LIMIT
            12, 4
        ;