LEFT JOIN:  Junção à esquerda

    Seleciona todos os registros da tabela à esquerda + CASO EXISTA + todos os registros da tabela à direita

    * para fazer uma junção entre tabelas é necessário estabelecer um pivô de relacionamento entre os registros dessas tabelas.

## SQL COMMANDS

    1 ->

        SELECT 
            *
        FROM
            tb_clientes LEFT JOIN tb_pedidos ON (tb_clientes.id_cliente = tb_pedidos.id_cliente)
        ;

    2 -> Quantos produtos possuem imagens?

        SELECT
            *
        FROM
            tb_produtos LEFT JOIN tb_imagens ON (tb_produtos.id_produto = tb_imagens.id_produto)
        ;