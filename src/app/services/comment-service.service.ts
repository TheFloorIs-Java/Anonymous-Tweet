import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/Comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentServiceService {
  constructor(private http: HttpClient) {}
  /**
   * Constructs a GET request that interprets the body as JSON and returns the response body in an Array of Object Comment
   * @returns all the comments
   */
  displayAllComments(): Observable<Comment[]> {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments');
  }
  /**
   * Constructs a POST request that interprets the body as JSON and returns an observable of the response.
   * @param commentInput
   */
  submitAComment(commentInput: String): void {
    this.http
      .post<String>('http://localhost:8080/comments', {
        texts: commentInput,
      })
      .subscribe((data) => console.log(data));
  }
}
