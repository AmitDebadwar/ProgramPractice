import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError } from '../common/errors/not-found-error';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BadInputError } from '../common/errors/bad-input';
 



 
export class DataService {


    constructor(public url: string, private http: HttpClient) { }

    getAll() {

        return this.http.get(this.url).pipe(
            catchError(this.handleError)
        );
    }

    getAllById(id) {

        return this.http.get(this.url + id).pipe(
            catchError(this.handleError)
        );
    }

    get(resource) {

    }

    create(resource) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.post(this.url, resource, httpOptions)
            .pipe(catchError(this.handleError));
    }

    update(resource) {
        return this.http.put(this.url + "/" + resource.id, resource)
            .pipe(this.handleError);
    }

    delete(id) {

    }


    handleError(error: HttpErrorResponse | any) {

        if (error.status === 404) {

            return throwError(new NotFoundError(error));
        }
        else if (error.status === 400) {

            return throwError(new BadInputError(error));
        }

        return throwError(error);
    }
}
