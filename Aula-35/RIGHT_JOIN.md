RIGHT JOIN: Junção à direita

    Relaciona todos os registros da tabela à direita + CASO EXISTA, todos os registros da tabela à esquerda


## SQL COMMANDS

    Queremos saber quais são os clientes e se esses clientes possuem pedidos

    ==== LEFT-JOIN ====

        SELECT
            *
        FROM 
            tb_clientes LEFT JOIN tb_pedidos ON (tb_clientes.id_cliente = tb_pedidos.id_cliente)
        ;

    ==== RIGHT-JOIN ====

    SELECT
        *
    FROM 
        tb_clientes RIGHT JOIN tb_pedidos ON (tb_clientes.id_cliente = tb_pedidos.id_cliente) 
    ;