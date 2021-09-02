const root = new Vue({
    el: "#root",
    data: {
        compilation: null,
    },
    methods: {},
    created() {

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((res) => {
                const compilation = res.data.response;
                console.log(compilation);
                this.compilation = compilation;
            })
    }





})