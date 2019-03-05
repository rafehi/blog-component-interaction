import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoContainerComponent as Ex1TodoContainer } from './ex-1/todo-container/todo-container.component';
import { TodoItemComponent as Ex1TodoItem } from './ex-1/todo-item/todo-item.component';
import { AddTodoComponent as Ex1AddTodo } from './ex-1/add-todo/add-todo.component';
import { TodoContainerComponent as Ex2TodoContainer } from './ex-2/todo-container/todo-container.component';
import { TodoItemComponent as Ex2Todo } from './ex-2/todo-item/todo-item.component';
import { AddTodoComponent as Ex2AddTodo } from './ex-2/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1TodoContainer, Ex1TodoItem, Ex1AddTodo,
    Ex2TodoContainer, Ex2Todo, Ex2AddTodo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
