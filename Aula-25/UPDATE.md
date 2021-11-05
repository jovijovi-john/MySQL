UPDATE - Atualizando registros
    
    UPDATE faz parte do subconjunto do SQL conhecido como DML (Data Manipulation Language)

    Nós podemos atualizar uma única informação de uma coluna de um registro em específico,  ou podemos atualizar ao mesmo tempo várias colunas do mesmo registro ou de vários registros ao mesmo tempo.

    É importante separar os pares de conjunto e valor por vírgula
    IMPORTANTE: Caso o WHERE seja omitido, todos os registros da tabela serão atualizados. Ou seja, aquelas colunas daquela respectiva tabela terão o mesmo valor que estão sendo aplicados na instrução SET

    Caso não houver nenhum retorno em função do filtro do WHERE que estabelecemos, o UPDATE não afeta nenhum registro e nenhuma modificação de registro será feita dentro da tabela.

    Sintaxe:

        UPDATE
            <tabela>
        SET
            <coluna> = <valor>, <coluna> = <valor>, <coluna> = <valor>
        WHERE
            <filtro(s)>

## SQL COMMANDS

    1 ->

        UPDATE
            tb_alunos
        SET
            nome = 'João'
        WHERE
            id_aluno = 13
        ;

        // Altere o nome do aluno com id_aluno = 13 para 'João'
        
    2 ->

        SELECT * FROM tb_alunos WHERE idade >= 80;
    
    3 ->

        UPDATE
            tb_alunos
        SET
            interesse = 'Saúde'
        WHERE
            idade >= 80
        ;

        todos os registros que tem idade >= 80 terão o interesse alterado para 'Saúde' 
        Aliás, se o campo já possuir interesse = 'Saúde', ele não será afetado.
    
    4 ->

        UPDATE
            tb_alunos
        SET
            nome = 'José', idade = 25, email = 'jose@gmail.com'
        WHERE
            id_aluno = 18
        ;
    
    5 ->

        SELECT 
            *
        FROM
            tb_alunos
        WHERE
            idade BETWEEN 18 AND 25 AND estado = 'PA'
        ;
    6 ->

        UPDATE
            tb_alunos
        SET
            nome = 'Maria'
        WHERE
            idade BETWEEN 18 AND 25 AND estado = 'PA'
        ;