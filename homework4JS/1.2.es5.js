'use strict';
function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function(text){
    this.text = text;
}
const post = new Post('Rob', 'Hello my friend', 10.122021);
console.log(post);
post.edit('Good evening');
console.log(post);
function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;    
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}
const attached = new AttachedPost('Ben', 'Hello', 12.122021);
console.log(attached);
attached.makeTextHighlighted();
attached.edit('Good morning');
console.log(attached);