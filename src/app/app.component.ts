import { Component } from '@angular/core';
import { Post } from './post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
   {
      content : 'default public post',
      isPublic: true,
      created: new Date()
    },
    {
      content: 'default private post',
      isPublic: false,
      created: new Date()
    }
  ];
  newPostContent = '';
  newPostPublic = true;

  createPost() : void{
    if(this.newPostContent){
      const newPost = <Post> {
        content : this.newPostContent,
        isPublic: this.newPostPublic,
        created : new Date()
      };
      this.posts.push(newPost);
      this.newPostContent = ''; 
    }
  }
  mutateArray(){
    this.posts = this.posts.concat();
    // const newPostsArray : Post[] = Object.assign([], this.posts);
    // newPostsArray[0].content = 'Bini';
    // this.posts = newPostsArray;
  }
  onMouseMove(){

  }
}
