Nessa aula trabalharemos com tabelas e definições dos tipos de dados de forma prática.
Nós definiremos uma estrutura de dados, portanto, os comandos utilizados nesse processo serão comandos da categoria DDL do SQL

# Interface visual

    1 - Clique no banco de dados onde queremos criar a tabela
    2 - Digite o nome  da table e selecione o numero de colunas (nada impede que mais adiante novos campos sejam incluidos ou removidos)
    3 - No campo predefinido, a opção none é para ser obrigatorio o preenchimento, NULL para o contrário.
        Não definir como NULL implicitamente significa que é not NULL
    4 - O campo id_curso é um valor numérico inteiro, logo seu tipo é int
    5 - O campo imagem_curso é um texto de 100 caracteres, portanto, é um VARCHAR
    6 - O campo nome_curso é um texto de 50 caracteres (fixos), logo é um CHAR
    7 - O campo resumo é um texto longo, portanto é um TEXT
    8 - O campo data_cadastro vai armazenar a hora e o dia do registro, logo será do tipo DATETIME
    9 - O campo ativo é uma coluna que vai armazenar um tipo de dado booleano (0 ou 1), portanto é BOOLEAN.
        No caso da coluna predefinido, marcaremos um valor. 
            -> clique em as defined para que seja possível definir um valor caso nada seja informado no momento de inserção do registro. Defina como 1
    10 - O campo investimento é um numero fracionado, logo será do tipo FLOAT. O valor predefinido será 0
    11 - Agora clique em guardar

    // para remover uma tabela

    clique no BD, selecione a tabela, clique em operações, clique em delete the table. Isso vai executar a  DROP TABLE

# Instruções SQL

    CREATE TABLE nome_da_tabela(

        nome_da_coluna1 TIPO_DA_COLUNA not null, // esse not null é que nao pode ter valor vazio
        nome_da_coluna2 TIPO_DA_COLUNA

        ...

        id_curso int not null,
        imagem_curso varchar(100) not null,
        nome_curso char(50) not null,
        resumo text null,
        data_cadastro datetime not null,
        ativo boolean default true,
        investimento float(8, 2) default 0
    );

    default => é para definir uma informação padrão de um campo
    null => o campo pode ser vazio
    not null => o campo tem de ser preenchido
    
    float(param1, param2)
        param1=> quantidade de digitos de determinado numero
        param2=> quantidade de digitos correspondente à fracao desse respectivo numero (da direita pra esquerada)
    ex: 
        125.44


    ## PARA DELETAR UMA TABLE:

        DROP TABLE nome_da_tabela;

    
    boolean é um aliasing para o tipo tinyint em MySQL;
     tinyint é um tipo de dado que aceita valores do range de 1 bit.
        se o valor do registro for 0, o valor é tratado como false. Qualquer outro valor, é tratado como true 