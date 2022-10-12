import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ReplyCardComponent } from './components/reply-card/reply-card.component';
import { ReplyListComponent } from './components/reply-list/reply-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CommentCardComponent,
    CommentListComponent,
    ReplyCardComponent,
    ReplyListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
