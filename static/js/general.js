let cont = 0;

let container = new Vue({
    el: "#container",
    data: {
        titulo: "Testes com VueJS",
        message: 'Você carregou esta página em ' + new Date().toLocaleString(),
        inputvalue: "Testes com Vue",
        seen: true,
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Criar algo incrível' }
        ],
        button_name: "Aperte para esconder",
    },
    methods: {
        esconder: function () {
            if (cont === 0) {
                this.seen = false;
                this.button_name = "Agora para mostrar";
                cont++;
            }
            else {
                this.seen = true;
                this.button_name = "Aperte para esconder";
                cont--;
            }
        }
    }
});
let chat = new Vue({
    el: "#chat",
    data: {
        titulo: ""
    }
});