import { Component, Input, OnInit } from '@angular/core';
import { ReplyServiceService } from 'src/app/services/reply-service.service';
import { Reply } from 'src/app/models/Reply';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.css'],
})
export class ReplyListComponent implements OnInit {
  @Input()
  comments: Comment = { commentId: 0, texts: '' };
  listOfReplies: Array<Reply> = [];
  constructor(private rs: ReplyServiceService) {}

  ngOnInit(): void {
    this.rs
      .displayAllRepliesByCommentId(this.comments.commentId)
      .subscribe((data) => (this.listOfReplies = data));
  }
}
