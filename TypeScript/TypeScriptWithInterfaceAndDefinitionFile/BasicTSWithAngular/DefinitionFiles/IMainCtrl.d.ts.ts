/// <reference path="angular.d.ts" />

 declare module MainModule {

     interface IMainCtrl extends ng.IScope {
         idNumber: number;
         addStudent: Function;
         studArray: Array<Student>;
    }


     class Student {
        rollNumber: number;
        studentName: string;
    }
}