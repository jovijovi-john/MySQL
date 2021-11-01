Permite realizar filtros com base em uma pesquisa de caracteres dentro de uma coluna textual

Caracteres curingas:

    % Indica que pode haver a existência de qualquer conjunto de caracter no texto
    _ Indica que pode haver a existência de um ou mais caracteres em uma posição específica do texto

    [...] WHERE nome LIKE 'Evelyn'
    [...] WHERE nome LIKE '%e'
    [...] WHERE nome LIKE '%a%'
    [...] WHERE nome LIKE 'C%'

    [...] WHERE nome LIKE '_riel'
    [...] WHERE nome LIKE '_ru_'
    [...] WHERE nome LIKE 'I__'

    [...] WHERE nome LIKE '%tt_'

Pelo que eu entendi, o like serve para quando precisamos buscar por caracteres dentro do texto, e não com um =. Lembra muito as regras de produção de gramáticas de LFA

## QUERIES SQL

    1 ->

        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome = 'Evelyn'
        ;

    2 ->

        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE 'Evelyn'
        ;

    3 ->

        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE '%e'
        ;
    
        nesse caso, quer dizer que esta selecionando todos os nomes que iniciam por qualquer conjunto de caracteres e que obrigatoriamente terminam em 'e'

    4 ->
        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE '%ne'
        ;

        nesse caso, quer dizer que esta selecionando todos os nomes que iniciam por qualquer conjunto de caracteres e que obrigatoriamente terminam em 'ne'
        

    5 ->
        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE '%a%'
        ;

        nesse caso, quer dizer que esta selecionando todos os nomes que iniciam por qualquer conjunto de caracteres e que terminam em um conjunto qualquer de caracteres, mas que obrigatoriamente tem um caractere 'a' entre esses dois conjuntos.

    6 ->
        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE '%a%'
        ;

        nesse caso, quer dizer que esta selecionando todos os nomes que iniciam com 'C' e que em seguida tem um conjunto qualquer de caracteres

    7 ->
        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE '_riel'
        ;

        vai retornar todos os nomes que possuem APENAS UM CARACTERE INDEFINIDO À ESQUERDA e que terminam em riel.
        exemplos de retorno:
            ariel
            uriel
            driel

    8 ->
        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE '_ru_'
        ;

        vai retornar todos os nomes que possuem APENAS UM CARACTERE INDEFINIDO À ESQUERDA e APENAS UM CARACTERE INDEFINIDO NO FINAL,  e entre eles tem a string ru.
        exemplos de retorno:
            Cruz
            bruc
            cruc

    9 ->
        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE 'I__'
        ;

        nesse caso, quer dizer que esta selecionando todos os nomes que iniciam com 'I' e que em seguida tem APENAS 2 CARACTERES INDEFINIDOS.


    10 ->
        SELECT
        *
        FROM 
        tb_alunos
        WHERE
            nome LIKE '%tt_'
        ;

        nesse caso, quer dizer que esta selecionando todos os nomes que iniciam com qualquer conjunto de caracteres à esquerda, seguidos de tt e finalizando com APENAS UM CARACTERE INDEFINIDO.