import { Component, Input, OnInit } from '@angular/core';
import { Reply } from 'src/app/models/Reply';

@Component({
  selector: 'app-reply-card',
  templateUrl: './reply-card.component.html',
  styleUrls: ['./reply-card.component.css'],
})
export class ReplyCardComponent implements OnInit {
  @Input()
  replies: Reply = { id: 0, body: '' };
  constructor() {}

  ngOnInit(): void {}
}
