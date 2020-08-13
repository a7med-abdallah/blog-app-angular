import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'post', component: PostComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
