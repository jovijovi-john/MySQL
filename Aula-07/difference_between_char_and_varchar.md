CHAR =>

    ** Tamanho Fixo em disco
        -> Quando definimos um campo de 10 posições do tipo char, todos os espaços relativos à quantidade de caracteres definidos fica reservado em disco. Independente se inserirmos ou não textos com 10 caracteres, automaticamente os espaços não utilizados em função do tamanho da string ficarão reservados com espaços em branco.

        Ou seja, se definir 10, e preencher com uma string de apenas 5 caracteres, os outros 5 vão ser preeenchidos com espaço em branco e assim serão armazenados no disco. 


        ->> VANTAGEM::
            Mais rápido para pesquisas

        ->> DESVANTAGEM::
            Quando mau utilizado pode reservar espaço em disco de maneira desnecessária


VARCHAR =>

    ** Tamanho Variável em disco
        -> Já no mesmo cenário num campo varchar, o comportamento será diferente. Como o campo varchar é variável, embora sejam definidas as 10 posições, tipos varchar possuem a inteligencia de reservar apenas a quantidade de caracteres utilizados para aquela string. Portanto, ela ocula menos espaço no campo de dados.
        Se a string for menor que os 10 caracteres informados na definição da coluna, teremos menos espaço em disco sendo utilizado.

        
        ->> VANTAGEM::
            Por ser de tamanho variável ocupa apenas o espaço necessário em disco

        ->> DESVANTAGEM::
            Por ser de tamanho variável possui um meta dado com uma instrução de finalização do texto, o que produz, em relação ao CHAR, maior lentidão em pesquisas
 
