bancos de dados são coleções organizadas de dados que se relacionam de algum modo. A ideia de um banco de dados consiste em agrupar registros de um domínio específico. Não existe apenas um jeito certo de criar um banco de dados.

No PHPMyAdmin temos duas maneiras de trabalhar. Geralmente, essas duas formas de trabalho existem em qualquer client que se comunique com um sgbd. A não ser que seja um client via comand line.

Nós podemos controlar esse SGBD via instruções SQL ou através de interfaces gráficas.

No SQL, todas as instruções são imperativas

# Linguagem SQL 
    
   **Sempre use ; no final de cada instrução**

   > Comando da subcategoria DDL (CREATE DATABASE)
        
        CREATE DATABASE nome_do_bd ;

        Para apagar:

        DROP DATABASE nome_do_bd ;

# Interface do PHPMyAdmin

    para criar:

        1 - clicar em new
        2 - nome_do_bd
        3 - clicar em criar
    
    para apagar:

        1 - clique no bd
        2 - clique em operações
        3 - clique em apagar a base de dados
