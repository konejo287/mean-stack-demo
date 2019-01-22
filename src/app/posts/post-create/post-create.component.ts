import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  newPost = 'No content';
  postButtonText = 'Save Post';
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {
    // this.postsService = postService;
  }

  onAddPost(form: NgForm) {
    // this.newPost = this.enteredTitlentent;
    if (form.invalid) {
      return;
    }

    /*const post: Post = {
      title: form.value.title,
      content: form.value.content
    };*/

    // this.postCreated.emit(post);
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

  onAddPostBinding(postInput: HTMLTextAreaElement) {
    alert('local');
  }

}
