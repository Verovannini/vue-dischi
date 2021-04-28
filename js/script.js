var app = new Vue (
    {
        el: '#root',
        data: {
            albumsList: []
        },
        methods: {

        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music ')
                .then( (response) => {
                    const result = response.data;
                    this.albumsList = result.response;
                });
        }
    }
);