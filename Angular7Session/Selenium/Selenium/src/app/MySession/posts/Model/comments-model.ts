export class CommentsModel {
 
    body : string;
    email : string;
    name : string;
    id : number;
    postId : number;
    
    constructor(_body : string, _email : string, _name : string, _id : number, _postId : number ){
        this.body = _body;
        this.email = _email;
        this.name = _name;
        this.id = _id;
        this.postId = _postId;
    }
}
