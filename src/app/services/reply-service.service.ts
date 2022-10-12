import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reply } from '../models/reply';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReplyServiceService {
  constructor(private http: HttpClient) {}
  displayAllReplies(): Observable<Reply[]> {
    return this.http.get<Array<Reply>>('http://localhost:8080/replies');
  }
  displayAllRepliesByCommentId(comment_id: number): Observable<Reply[]> {
    return this.http.get<Array<Reply>>(
      'http://localhost:8080/replies' + comment_id
    );
  }
  submitAReply(replyInput: String, comment_id: number): void {
    this.http
      .post<String>('http://localhost:8080/replies/' + comment_id, {
        texts: replyInput,
      })
      .subscribe((data) => console.log(data));
  }
}
