INNER JOIN :    Junção interna
    Prioriza o retorno dos registros cujo relacionamento seja estabelecido. Se nao houver relacionamento entre os registros, estes serão desconsiderados


## SQL COMMANDS

    1 ->

        INSERT INTO tb_produtos(produto, valor) VALUES ('HD Externo Portátil Seagate Expansion 1TB USB 3.0', 274.90);

    2 ->

        Quero ter acesso a uma relação de todos os pedidos conectados, caso exista, à relação de produtos daqueles pedidos. Como para mim é mais importante ter acesso a todos os pedidos e, caso exista, ter a relação dos produtos associados aos pedidos, podemos usar o LEFT JOIN

        SELECT
            *
        FROM 
            tb_pedidos LEFT JOIN tb_pedidos_produtos ON (tb_pedidos.id_pedido = tb_pedidos_produtos.id_pedido)
        ;

    3 -> 
        
        Agora, quero ter aceso a descrição do produto. Basta fazermos mais um LEFT JOIN

        SELECT
            *
        FROM 
            tb_pedidos LEFT JOIN tb_pedidos_produtos ON (tb_pedidos.id_pedido = tb_pedidos_produtos.id_pedido)
            LEFT JOIN tb_produtos ON (tb_pedidos_produtos.id_produto = tb_produtos.id_produto)
        ;

    4 ->
        
        SELECT
            *
        FROM 
            tb_pedidos RIGHT JOIN tb_pedidos_produtos ON (tb_pedidos.id_pedido = tb_pedidos_produtos.id_pedido)
            LEFT JOIN tb_produtos ON (tb_pedidos_produtos.id_produto = tb_produtos.id_produto)
        ;
    
    5 ->
        
        SELECT
            *
        FROM 
            tb_pedidos RIGHT JOIN tb_pedidos_produtos ON (tb_pedidos.id_pedido = tb_pedidos_produtos.id_pedido)
            RIGHT JOIN tb_produtos ON (tb_pedidos_produtos.id_produto = tb_produtos.id_produto)
        ;
    
    6 ->
        
        SELECT
            *
        FROM 
            tb_pedidos INNER JOIN tb_pedidos_produtos ON (tb_pedidos.id_pedido = tb_pedidos_produtos.id_pedido)
        ;
    
    7 ->

        SELECT 
            *
        FROM
            tb_pedidos INNER JOIN tb_pedidos_produtos ON (tb_pedidos.id_pedido = tb_pedidos_produtos.id_pedido)
            INNER JOIN tb_produtos ON (tb_pedidos_produtos.id_produto = tb_produtos.id_produto)
        ;