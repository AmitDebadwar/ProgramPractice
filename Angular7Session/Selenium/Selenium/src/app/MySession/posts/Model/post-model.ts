import { CommentsModel } from './comments-model';

export class PostModel {

    public _id : number;
    public _userId :  number;
    public _body : string;
    public _title : string;
    public _allComments : Array<CommentsModel>;

    constructor(public id:number, public userId : number, public title: string, public body: string, public allComments : Array<CommentsModel>){
        this._id = id;
        this._userId = userId;
        this.body = body;
        this.title = title;
        this.allComments = this._allComments;
    }
}
