import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reply } from '../models/Reply';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReplyServiceService {
  constructor(private http: HttpClient) {}

  /**
   * Constructs a GET request that interprets the body as JSON and returns the response body in an Array of Object Reply.
   * @param comment_id
   * @returns all the replies by their comment IDs
   */
  displayAllRepliesByCommentId(comment_id: number): Observable<Array<Reply>> {
    return this.http.get<Array<Reply>>(
      'http://localhost:8080/replies/' + comment_id
    );
  }
  /**
   * Constructs a POST request that interprets the body as JSON and returns an observable of the response.
   * @param replyInput
   * @param comment_id
   */
  submitAReply(replyInput: String, comment_id: number): void {
    this.http
      .post<String>('http://localhost:8080/replies/' + comment_id, {
        body: replyInput,
      })
      .subscribe((data) => console.log(data));
  }
}
