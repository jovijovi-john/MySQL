INSERT - Inserindo registros em tabela

## Interface Gráfica

    -> Clique no BD
    -> Clique na tabela
    -> Clique em insere
        Vai aparecer um formulário para preenchermos as colunas e assim inserir um registro

## SQL Language

    -> Selecione o BD
    -> Não precisa selecionar a tabela

    INSERT INTO nome_da_tabela(colunas da tabela que queremos preencher) VALUES (valores)
    INSERT INTO tb_cursos(ativo, carga_horaria, data_cadastro, id_curso, imagem_curso, investimento, nome_curso, resumo) VALUES()

    !!! Os valores serão respectivos à ordem das colunas

    datetime: são passadas como strings e o formato é o formato internacional definido pela ISO 8601:
        'AAAA-MM-DD HH:MM:SS'
        USE ASPAS SIMPLES

**Não é possivel inserir dois registros em duas tabelas diferentes ao mesmo tempo, por exemplo**