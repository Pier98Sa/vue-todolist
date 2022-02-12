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
                    done: true
                }
            ],

        },
        methods:{
            //funzione per aggiungere un object tramite l'input
            addToDo() {

                if(this.newToDo == ''){
                    alert('Non hai inserito nessun nuovo to do')
                }else{
                    this.ToDo.push({"text": this.newToDo, "done": true});
                }
                
                this.newToDo = '';
            },

            //funzione per rimuovere il to do dalla lista

            removeToDo(index) {
               this.ToDo[index].done = false;
            }

        }
    }
);