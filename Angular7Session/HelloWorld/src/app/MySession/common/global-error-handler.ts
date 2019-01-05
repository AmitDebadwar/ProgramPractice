
import { ErrorHandler } from '@angular/core';

export class GlobalErrrorHandler implements ErrorHandler{
    
    handleError(error: any): void {
        console.log("Global Error occured: ");
        console.log(error);
    }

}