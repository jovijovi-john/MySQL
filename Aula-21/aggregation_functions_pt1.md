SELECT - Funções de Agregação parte 1: MAX, MIN e AVG


------------------------------------
    SELECT
        funções de agregação
    FROM
        <tabela>
    WHERE
        <filtros>
------------------------------------

    funções de agregação:       
        
        São definidas no bloco SELECT, e seu objetivo é permitir uma operação aritmética sobre os valores de uma determinada de uma coluna em todos os registros de uma tabela. 

        => MIN(<coluna>):
            Retorna o menor valor de todos os registros com base em uma coluna

        => MAX(<coluna>):
            Retorna o maior valor de todos os registros com base em uma coluna

        => AVG(<coluna>):
            Retorna a média de todos os registros com base em uma coluna

----------------------------------------------------------------------------
## SQL QUERIES

    1 ->

        SELECT
            MIN(investimento)
        FROM
            tb_cursos
        ;

        Selecione, de todos os registros de tb_cursos, traga para mim a informação do menor investimento

    2 ->

        SELECT 
            MIN(investimento)
        FROM
            tb_cursos
        WHERE
            ativo = true
        ;

        Selecione todos os registros de tb_curso onde ativo = true. O resultado dessa consulta deve passar por uma função de agregação que vai retornar o menor investimento

    3 ->

        SELECT 
            MAX(investimento)
        FROM
            tb_cursos
        WHERE
            ativo = true
        ;

        Selecione todos os registros de tb_curso onde ativo = true. O resultado dessa consulta deve passar por uma função de agregação que vai retornar o maior investimento

    4 ->

        SELECT 
            AVG(investimento)
        FROM
            tb_cursos
        WHERE
            ativo = true
        ;

        Selecione todos os registros de tb_curso onde ativo = true. O resultado dessa consulta deve passar por uma função de agregação que vai retornar a média dos investimentos