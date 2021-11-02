SELECT - Agrupando seleção de registros

    MUITO UTILIZADO PARA RESPONDER:

        - Total de vendas por mÊs
        - Quantidade de alunos por curso
        - Quantidade total de cliques por anúncio
        - Total de reclamações por categoria
        - Total de chamadas por número de telefone
    
        Repare que de um lado temos uma função de agregação (soma, totalizador) e do outro lado temos uma relação agrupada (meses, tipos, números, categorias)

    O GROUP BY está posicionado em um local específico da contrução da query. Ele pode ser colocado logo após o FROM, ou o WHERE. Portanto, quando o WHERE estiver declarado, nós informamos o GROUP BY após o WHERE.
    O GROUP BY vem sempre antes do ORDER BY e do LIMIT 
--------------------------------------------
    SELECT
        <tabela(s)>
    FROM
        <tabela(s)>
    WHERE
        <filtro(s)>
    GROUP BY
        agrupamento
    ORDER BY
        <ordenação>
    LIMIT
        <offset>, <limit>
--------------------------------------------

    agrupamento: Agrupa os registros com base em uma ou mais colunas cujos valores sejam iguais. Permite realizar funções de agregação em cada subconjunto agrupado de registros

## SQL QUERIES

    => quantos registros de alunos temos agrupados por interesse?

            SELECT
            *
            FROM
            tb_alunos
            GROUP BY
                interesse
            ;

        isso vai retornar 5 registros dos 100 (note que há 5 interesses). O retorno de cada uma dessas informações distintas representa um subgrupo.
        Como essa consulta traz todas as colunas, o banco de dados traz como informações das demais colunas, o primeiro valor de cada um dos grupos que estamos consultando.
        Isso significa que em cada um dos grupos nos podemos usar funções de agregação.
        Ou seja, podemos retornar o total de registros existentes em cada um dos tipos de interesse de uma vez só.
    
        
            SELECT
            *, COUNT(*)
            FROM
            tb_alunos
            GROUP BY
                interesse
            ;

        MELHORANDO A CONSULTA:

            SELECT
                interesse, COUNT(*)
            FROM
            tb_alunos
            GROUP BY
                interesse
            ;

        Podemos trocar o nome / apelido que é a dada pra coluna retornada na consulta (count(*)) usando a instrução AS para aplicar um ALIAS(apelido)

        SELECT
            interesse, COUNT(*) AS total_por_interesse
        FROM
        tb_alunos
        GROUP BY
            interesse
        ;

    => Retornar os registros agrupados por estado:

        SELECT 
        *
        FROM
        tb_alunos
        GROUP BY
            estado
        ;

        teremos 27 registros sendo retornados. Cada um desses 27 registros corresponde ao primeiro registro em cada um desses subgrupos. Nós podemos, a partir desses subgrupos de agrupamentos, realizar funções de agregação:

        Identificar quantos registros temos por estado

        SELECT 
            estado, COUNT(*) AS total_por_estado
        FROM
        tb_alunos
        GROUP BY
            estado
        ;
        

        Consultando MA

        SELECT
            *
        FROM
        tb_alunos
        WHERE
            estado = 'MA'
        ;