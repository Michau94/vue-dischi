const root = new Vue({
    el: "#root",
    data: {
        compilation: [],
    },
    methods: {},

    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((res) => {
                let compilation = res.data.response;
                this.compilation = compilation;
            })
    },

    computed: {
        sortedCompilation() {
            const sorted = this.compilation.sort((a, b) => {
                return a.year - b.year;
            })
            return sorted;
        }

    },





})