'use strict';
class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text){
        this.text = text;
    }
}
const post = new Post('Bill', 'Fancy', 11.122021);
console.log(post);
post.edit('Good');
console.log(post);
class AttachedPost extends Post {
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}
const attached = new AttachedPost('Tom', 'Good like', 12.122021);
console.log(attached);
attached.makeTextHighlighted();
attached.edit('Hi');
console.log(attached);