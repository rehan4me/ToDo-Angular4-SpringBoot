import { Component, OnInit } from '@angular/core';

import { ToDoService } from '../services/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.html'
})
export class ToDoComponent implements OnInit{

    constructor(
        private toDoService: ToDoService
    ) {}

    newTodo = {status:"pending"};
    todos = [];

    ngOnInit(){
        this.getToDoList();
    }

    //Get todo list
    private getToDoList() {
        let me = this;
        me.toDoService
            .getToDoList('/todo-list')
            .subscribe(res => {
                me.todos = res;
            },
            (err) => { });

    }

    //add new todo
    protected addTodo(){
        let me = this;
        me.toDoService.createToDo('/new-todo', this.newTodo)
            .subscribe( res => {
                if(res){
                    me.getToDoList();
                    me.newTodo = { status: "pending" };
                }
            })
    }

    //Updating the todo
    protected updateToDo(doc,event){
        doc.status = (event.target.checked)?"completed":"pending";
        this.toDoService.updateToDo("/todo/"+doc.id, doc)
            .subscribe(res => {

        })
    }

    //Delete todo
    protected deleteTodo(doc){
        let me = this;
        me.toDoService.deleteToDo("/todo/"+doc.id)
        .subscribe(res => {
            me.getToDoList();
        })
    }

    protected pendingItems():number{
        return this.todos.filter(elem => {
            return elem.status != "completed";
        }).length;
    }
}
