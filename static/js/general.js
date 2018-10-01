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
        select_option_default: "Select color",
        menu_style: {
            background: "#fafafa"
        },
        body_style: {
            background: "#fff"
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
            if (bkgColor === "Gray") {
                this.select_option_default = "Default";
                this.menu_style.background = "grey";
                this.body_style.background = "purple";
            }
            else if (bkgColor === "Yellow") {
                this.select_option_default = "Default";
                this.menu_style.background = "yellow";
                this.body_style.background = "orange";
            }
            else if (bkgColor === "Green") {
                this.select_option_default = "Default";
                this.menu_style.background = "green";
                this.body_style.background = "yellow";
            }
            else {
                this.select_option_default = "Select color";
                this.menu_style.background = "#fafafa";
                this.body_style.background = "#fff";
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