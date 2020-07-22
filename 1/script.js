var appV = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!',
        isOk: true,
        str: 'My name is Viachestas',
        url: 'https://yandex.ru/',
        link: '<a href="http://google.com">Google</a>',
        counter: 0,
        counter2: 0,
        urlgoogle: "https://google.com",
        text9: 'Initial txt'
    },
    methods: {
        onMyInput: function (event) {
            this.message = event.target.value;
        },
        sayHello: function (e) {
            // console.log(e);
            return "Hello Sergei";
        },
        upCounter: function (num, event) {
            this.counter += num ;

            if (this.counter % 2 === 0) {
                event.target.style.color = 'green';                
            } else {
                event.target.style.color = 'black';
            }
        },
        onHover: function(el) {
            var cL = el.target.classList;
            if (cL.contains("red-b")) {
                cL.remove("red-b");
            } else {
                cL.add("red-b");
            }
        },
        alertValue: function (event) {
            if ( event.keyCode === 13 ) {
                console.log(event.target.value);                
            }
            
        },
        inputText9: function (event) {
            this.text9 = event.target.value;
        }

    }
});