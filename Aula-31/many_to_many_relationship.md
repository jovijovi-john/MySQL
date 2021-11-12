Relacionamento muitos para muitos

    um cliente pode realizar muitos pedidos, e um pedido pode ter muitos produtos. Um mesmo produto pode estar em muitos pedidos diferentes

    entre produto e pedido nós temos uma relação de muitos para muitos

    tb_descricoes_tecnicas e tb_produtos: um para um
    tb_produtos e tb_pedidos_produtos: um para muitos
    tb_pedidos e tb_pedidos_produtos: um para muitos
    tb_clientes e tb_pedidos: um para muitos
    tb_produtos e tb_imagens: um para muitos

    tb_pedidos e tb_produtos: muitos para muitos
        -> um pedido pode ter muitos produtos
        -> um produto pode estar em vários pedidos

    !!! IMPORTANTE:::
        Para estabelecer um relacionamento muitos para muitos é necessário criar uma tabela auxiliar que vai guardar esse relacionamento

## SQL COMMANDS

    1 -> Criando tb_clientes:

        CREATE TABLE tb_clientes (
            id_cliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(100) NOT NULL,
            idade INT(3) NOT NULL
        );

    2 -> Criando a tb_pedidos

        CREATE TABLE tb_pedidos(
            id_pedido INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            id_cliente INT NOT NULL,
            data_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(id_cliente) REFERENCES tb_clientes (id_cliente)
        );

        // o CURRENT_TIMESTAMP guarda a data e hora corrente do SGBD

    3 -> Criando a tb_pedidos_produtos

        CREATE TABLE tb_pedidos_produtos(    
            id_pedido INT NOT NULL,
            id_produto INT NOT NULL,
            FOREIGN KEY(id_pedido) REFERENCES tb_pedidos(id_pedido),
            FOREIGN KEY(id_produto) REFERENCES tb_produtos(id_produto)
        );