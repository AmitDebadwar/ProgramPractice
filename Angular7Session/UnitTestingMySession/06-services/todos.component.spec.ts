import { TodosComponent, ToDoListModel } from './todos.component';
import { TodoService } from './todo.service';
   
import { of, empty, throwError, Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/Observable'
 

describe('TodosComponent', () => {
  let service: TodoService;
  let component: TodosComponent;

  beforeEach(() => {
     service = new TodoService(null);
     component = new TodosComponent(service);
  });

  it('should set todo properties returned by the service', () => {

    let toDo : ToDoListModel = {id:0, body:"something" };

    // control over the method, chanding the behaviour of the method.

    /*
     * much eaiser than callfake method so use, return value
     */
    //spyOn(service, 'getTodos').and.returnValue(of([{ id: 1, title: 'a' }]));
   
    spyOn(service, 'getTodos').and.callFake(() => {

      /* here we need to stimulate the array as coming from the backend.
       * whenever we call the getToDos(), the function defined within callFake will be called, 
       * when executing under the test environment
       */
       
      return of([toDo]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos).toContain(toDo);

  });


   it('should call the server AddService method',() => {
 
    let spy = spyOn(service, 'add').and.callFake( t => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
 
   });

   
   it('should add a new todo',() => {
     
    let toDo : ToDoListModel = {id:0, body:"something" };

    let spy = spyOn(service, 'add').and.returnValue(
      of([
        toDo
      ])
    );

    component.add();
    
    expect(component.todos.indexOf(toDo)).toBeGreaterThan(-1);
    expect(component.todos.length).toBeGreaterThan(-1);
    
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
   
  });

  xit('should set error message if server sends error message',() => {
    let errorMessage = "there is a problem in network";

    spyOn(service , 'add').and.returnValue(Observable.throw({status:404}));



     

    component.add();

     

  });


});