new Vue({
    el: '#app',
    data: {
        activeColors: ['red', 'white', 'rose'],
    },
    methods: {
        getActiveColorClass: function (className) {
            let isOk = this.activeColors.filter(
                function(item) {
                    return item === className
                }
            ).length == 0 ? true : false;
            return {
                'd-none': isOk,
            };
        },
    }
});
