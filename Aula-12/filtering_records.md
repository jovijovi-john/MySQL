Aula sobre como utilizar filtros para limitar as consultas, atualizações e remoções de registros.
Filtros nos permitem especificar o que queremos obter.

Em BDs, utilizamos a cláusula WHERE para isso.

Exemplos:

   SELECT id_curso, nome_curso FROM tb_cursos WHERE investimento < 500.00;
   SELECT id_curso, nome_curso FROM tb_cursos WHERE investimento < 500.00 AND carga_horaria > 30;
   

## Operadores de comparação:    [...] WHERE investimento < 500

    =  Valor da esquerda igual ao valor da direita
    <  Valor da esquerda menor que o valor da direita
    <= Valor da esquerda menor ou igual ao valor da direita
    >  Valor da esquerda maior que o valor da direita
    >= Valor da esquerda maior ou igual ao valor da direita

## Operadores Lógicos:  [...] WHERE investimento < 500 AND carga_horaria > 30

    AND  => Todas as operações de comparação devem ser verdadeiras
    OR   => Pelo menos uma das operações de comparação deve ser verdadeira
    
