const Dois = {
    seletor: 'li',
    element() {
        // ao inves de querySelector, voce deve usar querySelectorAll, pois voce quer selecionar um array de li, e nao apenas uma
        return document.querySelectorAll(this.seletor)
    },
    ativo() {
        const selecionado = this.element();

        // como selecionado vai ser um array de li, então voce precisa iterar sobre ele, atribuindo iterar a cada elemento desse array
        selecionado.forEach(element => {
            // forEach itera sobre  array, e o element vai corresponder ao elemento atual, que vai ser uma li
            // 'para cada li, adicione a classe ativar'
            element.classList.add("ativar")
        })
    }
}