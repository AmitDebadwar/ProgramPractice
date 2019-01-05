
import { TodoService } from './todo.service'
import { HttpErrorResponse } from '@angular/common/http';


export interface ToDoListModel{
  id : number;
  body : string;
}


export class TodosComponent { 
  todos: ToDoListModel[]=[];
  message : string; 
  sai : string;
  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.todos = new Array<ToDoListModel>();

    this.service.getTodos().subscribe(t => {
      this.todos = t  as ToDoListModel[];
      
    });
  }

  add() { 
    var newTodo: ToDoListModel = {id: 1 , body:''};
 
    this.service.add(newTodo).subscribe(
      t => {
         this.todos = t as ToDoListModel[];
      }),
      function(err){
       
      };
  }

  // getTodos(){
  //   return this.service.getTodos().subscribe(res=>{

  //   });
  // }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
