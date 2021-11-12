Relacionamento muitos para muitos - Populando tabelas

## INSERINDO em tb_clientes

    1 ->

        INSERT INTO tb_clientes(nome, idade) VALUES('John', 19);

    2 ->

        INSERT INTO tb_clientes(nome, idade) VALUES ('Victor', 21);

## INSERINDO em tb_pedidos

    1 ->
        
        INSERT INTO tb_pedidos(id_cliente) VALUES(1);

    2 ->

        INSERT INTO tb_pedidos(id_cliente) VALUES(1); // O mesmo cliente está fazendo um novo pedido

    3 ->

        INSERT INTO tb_pedidos(id_cliente) VALUES(2); // um novo cliente está fazendo um novo pedido

## INSERINDO em tb_pedidos_produtos

    1 ->

        INSERT INTO tb_pedidos_produtos(id_pedido, id_produto) VALUES(1, 2);
        // 1-> Pedido 1
        // 2-> Produto 2 (Smartv)

    2 ->

        INSERT INTO tb_pedidos_produtos(id_pedido, id_produto) VALUES(1, 3);
        // 1-> Pedido 1
        // 3-> Produto 3 (Smartphone)

    ------------------------------------------------------------------------------------------------
    O mesmo pedido (1) está associado a 2 produtos diferentes
    ------------------------------------------------------------------------------------------------

    3 ->

        INSERT INTO tb_pedidos_produtos(id_pedido, id_produto) VALUES (2, 3);
        // o mesmo produto(3), esta cadastrado em 2 pedidos diferentes;
    
    4 ->

        INSERT INTO tb_pedidos_produtos(id_pedido, id_produto) VALUES(3, 1);
        // O produto 1 está associado ao pedido 3