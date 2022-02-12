const vue = new Vue (
    {
        el: '#root',
        data: {
            newToDo: '',
            ToDo: [
                {
                    text: 'Fare Colazione',
                    done: true
                },

                {
                    text: 'Consultare la documentazione',
                    done: true
                },

                {
                    text: 'Programmare',
                    done: true
                },

                {
                    text: 'Pranzare',
                    done: false
                }
            ],

        },
        methods:{

        }
    }
);