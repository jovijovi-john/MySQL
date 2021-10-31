SELECT - Filtros com o operador BETWEEN

    O operador BETWEEN é utilizado quando precisamos filtrar registros cujo valor de uma determinada coluna está em um intervalo específico. Sendo que os valores contidos nessa coluna podem ser do tipo NUMBER ou do tipo DATE. 

    o BETWEEN funciona como uma sintaxe sugar para estabelecer filtros com a finalidade de pesquisa de intervalos.

    Exemplo:

        Isso:
            [...]
            WHERE idade >= 18 AND idade <= 21;
        
        Pode ser escrito assim:
            [...]
            WHERE idade BETWEEN 18 AND 21

    Outro Exemplo:

        Isso:
            [...]
            WHERE data >= '2018-07-01' AND data <=  '2018-07-31'
       
        Pode ser escrito assim:
            [...]
            WHERE data BETWEEN '2018-07-01' AND '2018-07-31'

!!!  Aliás, é importante que é um intervalo fechado, ou seja, inclui os extremos
## Comandos SQL

        1 ->

            SELECT
            *
            FROM
            tb_alunos
            WHERE
            idade BETWEEN 18 AND 25
            ;
            