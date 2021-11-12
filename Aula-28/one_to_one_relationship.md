Projeto loja virtual - Relacionamento um para um 

## SQL COMMANDS

    1 -> CRIANDO O BANCO

        CREATE DATABASE db_loja_virtual;

    2 -> CRIANDO A TABELA  tb_produtos

        CREATE TABLE tb_produtos(
            id_produto INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
            produto VARCHAR(200) NOT NULL,
            valor FLOAT(8, 2) NOT NULL                        
        )

        // Precisamos de forma explicita indicar para o SGBD (na criação ou na atualização da tabela) qual é o campo que será a chave primária. Para isso, basta escrever o comando PRIMARY KEY na coluna

        // Campos do tipo AUTO_INCREMENT são gerenciados pelo próprio banco de dados, de modo que ao inserir um novo registro, a informação que será atribuida àquela coluna com base no último valor inserido + 1. Logo, nos INSERT's  não precisaremos informar qual será o valor dessa coluna porque o próprio banco de dados terá a inteligencia de inserir a informação de maneira incremental.        
    
    3 -> CRIANDO A TABELA  tb_descricoes_tecnicas

        CREATE TABLE tb_descricoes_tecnicas (
            id_descricao_tecnica INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            id_produto INT NOT NULL,
            descricao_tecnica TEXT NOT NULL,
            FOREING KEY(id_produto)
        );
        
        como o relacionamento é 1 pra 1, a descricao tecnica so vai existir caso haja um produto correspondente. Logo, ela é not null, senao a descricao tecnica em si nao precisaria existir

        id_produto  // foreing key que relaciona a tb_descricoes_tecnicas com os registros da tb_produtos
        para indicar que esse produto é uma chave estrangeira, na criação da tabela, basta passar uma instrução final:
            FOREING KEY(nome da coluna dentro da tabela que será utilizada como chave estrangeira) REFERENCES tb_origem(id_produto) 
            
            traduzindo: existe uma primary key chamada id_produto dentro da tabela tb_produtos. Essa primary key deve ser utilizada como referencia através do campo id_produto que será criado como a foreing key.
            Ou seja, id_produto representa a chave estrangeira que vem de tb_produtos id_produto.
            
            -> referencia de chave estrangeira // de onde ela vem, e para onde ela vai