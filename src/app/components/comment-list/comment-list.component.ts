import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentServiceService } from 'src/app/services/comment-service.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  commentList: Array<Comment> = [];
  constructor(private cs: CommentServiceService) {}
  /**
   * displays all the comments from the service layer
   */
  ngOnInit(): void {
    this.cs.displayAllComments().subscribe((data) => (this.commentList = data));
  }
}
