SELECT - Funções de Agregação parte 2: SUM, COUNT


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

        => SUM(<coluna>):
            Retorna a soma dos valores de todos os registros com base em uma coluna

        => COUNT(*): Retorna a quantidade de todos os registros de uma tabelas

----------------------------------------------------------------------------

## SQL QUERIES

1 ->

    SELECT
        SUM(investimento)
    FROM 
        tb_cursos
    ;

2 -> 

    SELECT
        SUM(investimento)
    FROM 
        tb_cursos
    WHERE
        ativo = true
    ;

3 ->

    SELECT 
        COUNT(*)
    FROM
        tb_cursos
    WHERE
        ativo = true
    ;
    
    vai retornar quantos registros com ativo = true tem na tabela tb_cursos

4 ->

    SELECT 
        COUNT(*)
    FROM
        tb_cursos
    WHERE
        ativo = false
    ;
    
    vai retornar quantos registros com ativo = false tem na tabela tb_cursos

5 ->

    SELECT 
        COUNT(*)
    FROM
        tb_cursos
    ;
    
    vai retornar quantos registros tem na tabela tb_cursos