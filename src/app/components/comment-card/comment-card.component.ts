import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { ReplyServiceService } from 'src/app/services/reply-service.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css'],
})
export class CommentCardComponent implements OnInit {
  show: boolean = false;
  remainingText: number = 300;
  @Input()
  comment: Comment = { commentId: 0, texts: '' };
  @Input()
  body: string = '';
  constructor(private rs: ReplyServiceService) {}
  ngOnInit(): void {}
  submitAReply(): void {
    this.rs.submitAReply(this.body, this.comment.commentId);
  }
  viewReplies(): void {
    this.show = !this.show;
  }
  valueChange(body: String): void {
    this.remainingText = 300 - body.length;
  }
}
