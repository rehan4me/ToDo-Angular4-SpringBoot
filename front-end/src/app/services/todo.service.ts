import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { ToDo } from '../todo/ToDo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ToDoService {
    constructor(
        private http: Http
    ) { }

    private baseUrl = 'http://localhost:8080/api';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    getToDoList(apiUrl: string): Observable<ToDo[]> {
        return this.http
            .get(this.baseUrl + apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    createToDo(url: string, data: any): any {
        return this.http
            .post(this.baseUrl + url, data)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateToDo(url: string, data: any): any {
        return this.http
            .put(this.baseUrl + url, data)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteToDo(apiUrl: string): any {
        return this.http
            .delete(this.baseUrl + apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data;
        if (res) {
            data = res.json();
        }
        return data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg;
        if (error.status !== 0) {
            const err = error.json()['message'];
            if (err === undefined || err === '') {
                errMsg = `${error.status} - ${error.statusText}`;
            } else {
                errMsg = err;
            }
        } else {
            errMsg = 'There was an unknown error, please try again in a few minutes.';
        }
        return Observable.throw(errMsg);
    }
}
