 function createList(){
  
   let tasks = [];

   function addList(desc,prefer){

    let newTasks = {desc,prefer};

    tasks.push(newTasks);

   }

   function showTasks(){

    console.log('Lista de Tarefas :');

     tasks.forEach((task,index) =>{
      console.log(`${index+1}- ${task.desc} - [Prioridade : ${task.prefer}]`);
     });

   }
   
    return {
      addList,
      showTasks

    };

 }
 
const listTasks = createList();

listTasks.addList('estudar js','alta');
listTasks.addList('trabalhar na area','media');
listTasks.addList('aprender outras tecnologias', 'baixa');

listTasks.showTasks();