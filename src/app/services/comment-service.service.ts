import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentServiceService {
  constructor(private http: HttpClient) {}
  displayAllComments(): Observable<Comment[]> {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments');
  }
  submitAComment(commentInput: String): void {
    this.http
      .post<String>('http://localhost:8080/comments', {
        texts: commentInput,
      })
      .subscribe((data) => console.log(data));
  }
}
