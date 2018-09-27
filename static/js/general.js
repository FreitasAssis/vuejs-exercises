Vue.component('top-bar',{
    template: "#menu"
});

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
        menu_style: {
            background: "#fafafa"
        },
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
        },
        change_color: function () {
            let e = document.getElementById("select");
            let bkgColor = e.options[e.selectedIndex].text;
            console.log(bkgColor);
            if (bkgColor === "Gray") {
                this.menu_style.background = "grey";
            }
            else if (bkgColor === "Yellow") {
                this.menu_style.background = "yellow";
            }
            else if (bkgColor === "Green") {
                this.menu_style.background = "green";
            }
            else { this.menu_style.background = "#fafafa"; }
        }
    }
});
let chat = new Vue({
    el: "#chat",
    data: {
        titulo: ""
    }
});