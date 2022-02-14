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
            //aggiunta la funzione trim per eliminare gli spazi in più, prima e dopo ogni stringa
            addToDo() {

                if(this.newToDo.trim() == ''){
                    alert('Non hai inserito nessun nuovo to do');
                }else{
                    this.ToDo.push({"text": this.newToDo.trim(), "done": false});
                }
                
                this.newToDo = '';
            },

            //funzione per rimuovere il to do dalla lista
            removeToDo(index) {
               this.ToDo.splice(index,1);
            },

            //funzione per barrare al click e con un secondo click eliminarlo
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