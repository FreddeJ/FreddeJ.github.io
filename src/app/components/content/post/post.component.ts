import { Component, Input, OnInit } from '@angular/core';
import { RedditPost } from 'src/app/models/redditPost';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() redditPost: RedditPost;

  displayText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText = () => {
    this.displayText = !this.displayText
  }

  getThumbnailLink = () => {
    return this.redditPost.thumbnail.includes('https://') ? this.redditPost.thumbnail : '';
  }
}
