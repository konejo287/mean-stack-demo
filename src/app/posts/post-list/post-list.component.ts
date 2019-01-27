import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent implements OnInit, OnDestroy {
  // @Input() posts: Post[] = [];
  // postsService: PostsService;
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {
    // this.postsService = postService;
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
