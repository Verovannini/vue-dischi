// Attraverso una chiamata ajax all’API di boolean avremo a disposizione una decina di dischi musicali. Stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue (
    {
        el: '#root',
        data: {
            // Array che viene popolato dalla chiamata ajax all'API di Boolean
            albumsList: [],

            // Arrau che viene popolato dai generi musicali
            albumsGenre: [],

            // Selected option
            selected: ''
        },
        methods: {

        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music ')
                .then( (response) => {
                    const result = response.data;
                    this.albumsList = result.response;

                    // Itero l'array di album e pusho in un array il genere di ogni album solamente se non è già presente
                    this.albumsList.forEach(element => {
                        if ( !this.albumsGenre.includes(element.genre) ) {
                            this.albumsGenre.push(element.genre);
                        }
                    });

                    
                });
        }
    }
);