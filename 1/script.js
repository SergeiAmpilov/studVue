var appV = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!',
        isOk: true,
        str: 'My name is Viachestas',
    },
    methods: {
        onMyInput: function (event) {
            this.message = event.target.value;
        },
        sayHello: function (e) {
            console.log(e);
            return "Hello Sergei";
        }

    }
});