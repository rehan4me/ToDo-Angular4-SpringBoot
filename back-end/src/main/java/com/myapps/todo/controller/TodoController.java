package com.myapps.todo.controller;

import java.util.List;
import javax.validation.Valid;

import com.myapps.todo.model.Todo;
import com.myapps.todo.repositories.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TodoController {

    @Autowired
    TodoRepository totoRepository;

    // Get all todos from todos db
    @GetMapping("/todo-list")
    public List<Todo> getTodos() {
        return totoRepository.findAll();
    }

    // Create new todo document
    @PostMapping("/new-todo")
    public Todo createTodo(@Valid @RequestBody Todo todo) {
        return totoRepository.save(todo);
    }

    // Update todo
    @PutMapping(value="/todo/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable("id") String id,
                                           @Valid @RequestBody Todo todo) {
        Todo todoData = totoRepository.findOne(id);
        if(todoData == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        todoData.setStatus(todo.getStatus());
        todoData.setTitle(todo.getTitle());
        
        Todo updatedTodo = totoRepository.save(todoData);
        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

    // Delete todo
    @DeleteMapping(value="/todo/{id}")
    public ResponseEntity<Todo> deleteTodo(@PathVariable("id") String id) {
        totoRepository.delete(id);
        return new ResponseEntity<Todo>(HttpStatus.NO_CONTENT);
    }
}
