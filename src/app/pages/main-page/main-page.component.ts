import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/app/models/Comment';
import { CommentServiceService } from 'src/app/services/comment-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  remainingText: number = 350;
  @Input()
  texts: String = '';
  constructor(private http: HttpClient, private cs: CommentServiceService) {}
  listOfComments: Array<Comment> = [];
  ngOnInit(): void {
    this.cs
      .displayAllComments()
      .subscribe((data) => (this.listOfComments = data));
  }
  postANewComment(): void {
    this.cs.submitAComment(this.texts);
  }
  valueChange(texts: String): void {
    this.remainingText = 350 - texts.length;
  }
}
