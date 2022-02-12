const vue = new Vue (
    {
        el: '#root',
        data: {
            newToDo: '',
            ToDo: [
                {
                    text: 'Fare Colazione',
                    done: false
                },

                {
                    text: 'Consultare la documentazione',
                    done: false
                },

                {
                    text: 'Programmare',
                    done: false
                },

                {
                    text: 'Pranzare',
                    done: false
                }
            ],

        },
        methods:{
            //funzione per aggiungere un object tramite l'input
            addToDo() {

                if(this.newToDo == ''){
                    alert('Non hai inserito nessun nuovo to do')
                }else{
                    this.ToDo.push({"text": this.newToDo, "done": false});
                }
                
                this.newToDo = '';
            },

            //funzione per rimuovere il to do dalla lista

            removeToDo(index) {
               this.ToDo.splice(index,1);
            },

            //funzione per barrare al click
            lineThrough(index) {

                if (this.ToDo[index].done == true){
                    this.ToDo[index].done = false;
                }else{
                    this.ToDo[index].done = true;
                }
               
            }
        }
    }
);