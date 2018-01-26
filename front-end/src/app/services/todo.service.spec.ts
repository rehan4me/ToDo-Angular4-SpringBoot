import { TestBed, async, inject } from '@angular/core/testing';
import { ToDoService } from './todo.service';
import { ToDo } from '../todo/todo';

describe('ToDoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ToDoService]
        });
    });

    it('should ...', inject([ToDoService], (service: ToDoService) => {
        expect(service).toBeTruthy();
    }));

    describe('#getToDoList()', () => {
        it('should return all todos', inject([ToDoService], (service: ToDoService) => {
            expect(service.getToDoList('/todo-list').subscribe(res =>{
                expect(res.length).toBeGreaterThan(0);
            }));
        }));

    });
});