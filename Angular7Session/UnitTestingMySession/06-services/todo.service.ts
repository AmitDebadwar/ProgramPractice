 import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ToDoListModel } from './todos.component';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo : ToDoListModel) {
    return this.http.post('...', todo);
  }

  getTodos() { 
    return this.http.get('...').map(r => r);
  }

  delete(id) {
    return this.http.delete('...').map(r => r);
  }
}