import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {

  @Input() isEdit: boolean;
  @Input() currentPost: Post;
  @Output() newPost = new EventEmitter<Post>();
  @Output() updatedPost = new EventEmitter<Post>();

  constructor(private postsService: PostsService) { }

  ngOnInit() { }

  addPost(title, body) {
    if (!title || !body) {
      alert('Enter Title and Description, Please');
    } else {
      this.postsService.savePost({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      })
    }
  }

  updatePost() {
    this.postsService.udpatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    })
  }
}
