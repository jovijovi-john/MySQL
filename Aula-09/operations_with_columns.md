ALTER TABLE => Faz parte do conjunto de instruções DDL


    ADD::
        Permite a inclusão de uma nova coluna em uma tabela

    CHANGE::
        Permite a alteração do nome de uma coluna e de suas propriedades, como por exemplo o tipo

    DROP::
        Permite a remoção de uma coluna da tabela

## Interface Gráfica

    ADD::

        -> Clique no BD
        -> Clique na tabela
        -> Expanda a tabela
        -> Expanda as colunas
        -> Clique em new

    CHANGE::

        -> Clique no BD
        -> Clique na tabela
        -> Vá em estrutura
        -> Escolha a coluna
        -> Clique em muda

        // quantidade default de digitos: 11 => 11 é a quantidade máxima de digitos que podem ser inseridos num campo int 
    
    DROP::

        -> Clique no BD
        -> Clique na tabela
        -> Vá em estrutura
        -> Escolha a coluna
        -> Clique em elimina

## Linguagem SQL


    -> Clique no BD
    -> Não necessariamente é preciso estar com a tabela selecionada

    ADD:

        ALTER TABLE table_name ADD COLUMN column_name TIPO_DA_COLUNA;
        ALTER TABLE tb_cursos ADD COLUMN carga_horaria VARCHAR(5) not null;

    CHANGE:

        ALTER TABLE table_name CHANGE column_name new_column_name TIPO_DA_COLUNA;
        ALTER TABLE tb_cursos CHANGE carga_horaria carga_horaria INT(5) NULL;

        IMPORTANTE:

            sempre deve-se passar como primeiro parâmetro o nome da coluna. Caso não queira alterar esse nome, escreva ele novamente em new_column_name. O mesmo vale para o tipo da coluna.
    
    DROP:

        ALTER TABLE table_name DROP column_name;
        ALTER TABLE tb_cursos DROP carga_horaria;
        
        Obs: Se uma coluna tem registros, os dados destes são apagados de maneira permanente caso você use a instrução DROP.
