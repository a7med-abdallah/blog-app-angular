import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';

const httpOtions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  getPost(id: number): Observable<Post> {
    const url = `${this.url}/${id}`;
    return this.http.get<Post>(url)
  }
  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post, httpOtions)
  }
  udpatePost(post: Post): Observable<Post> {
    const url = `${this.url}/${post.id}`;
    return this.http.put<Post>(url, post, httpOtions)
  }
  removePost(post: Post): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<Post>(url, httpOtions)
  }
}
