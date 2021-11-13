## 1

    SELECT 
    *
    FROM
        tb_clientes AS cl
    WHERE
        cl.idade >= 29
    ORDER BY
        cl.idade ASC
    ;

## 2
    
    a)
        ALTER TABLE tb_clientes ADD COLLUMN sexo CHAR(1) NOT NULL;
    b)
        ALTER TABLE tb_clientes ADD COLUMN endereço VARCHAR(150);
## 3

    UPDATE
        tb_clientes AS c
    SET
        c.sexo = 'M'
    WHERE
        c.id_cliente IN (1, 2, 3, 6, 7)
    ;
        

## 4

    UPDATE
        tb_clientes AS c
    SET
        c.sexo = 'F'
    WHERE
        c.id_cliente BETWEEN 4 AND 5 OR c.id_cliente BETWEEN 8 AND 10
    ;

## 5

    SELECT
        c.id_cliente,
        c.nome,
        c.idade,
        pr.produto,
        pr.valor
    FROM
        tb_clientes AS c INNER JOIN tb_pedidos AS p ON (c.id_cliente = p.id_cliente) 
        INNER JOIN tb_pedidos_produtos AS pp ON (p.id_pedido = pp.id_pedido) LEFT JOIN tb_produtos AS pr ON (pp.id_produto = pr.id_produto)
    ;
            

