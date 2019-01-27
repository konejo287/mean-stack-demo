import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  newPost = 'No content';
  postButtonText = 'Save Post';
  private mode = 'create';
  private postId: string;
  post: Post;

  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService, public route: ActivatedRoute) {
    // this.postsService = postService;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.post = this.postsService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    })
  }

  onAddPost(form: NgForm) {
    // this.newPost = this.enteredTitlentent;
    if (form.invalid) {
      return;
    }

    if(this.mode === "create") {
      this.postsService.addPost(form.value.title, form.value.content);
    } else {
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
      );
    }
    /*const post: Post = {
      title: form.value.title,
      content: form.value.content
    };*/

    // this.postCreated.emit(post);
    form.resetForm();
  }

  onAddPostBinding(postInput: HTMLTextAreaElement) {
    alert('local');
  }

}
