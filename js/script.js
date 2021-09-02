const root = new Vue({
    el: "#root",
    data: {
        compilation: [],
        options: [],
        selectedFilter: 'all'

    },
    methods: {

    },

    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((res) => {
                let compilation = res.data.response;
                this.compilation = compilation;
            })

    },

    computed: {
        filteredCompilation() {
            // sort by year
            const sorted = this.compilation.sort((a, b) => {
                return a.year - b.year;
            });

            // filter by genre
            const filtered = sorted.filter((song) => {

                return song.genre === this.selectedFilter || this.selectedFilter == 'all';
            })

            return filtered;
        },

        // generate options 
        renderOptions() {
            this.compilation.forEach(song => {
                if (!this.options.includes(song.genre)) {
                    this.options.push(song.genre);
                };
            });

            return this.options;

        }

    },





})