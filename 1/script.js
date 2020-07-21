var appV = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    },
    methods: {
        onMyInput: function (event) {
            this.message = event.target.value;
        }
    }
});