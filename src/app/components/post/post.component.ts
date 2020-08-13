import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/Post';
import { PostsService } from 'src/app/services/posts.service';
 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute, private postService: PostsService) { }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.postService.getPost(id).subscribe(post => this.post = post);
  }
}