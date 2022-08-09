import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditPost } from 'src/app/models/redditPost';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  posts: RedditPost[] = [];
  page : number = 1;

  after: string
  before: string

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.loadPage({})
  }

  getNextPage = () => {
    this.page = this.page + 1;
    this.loadPage({after: this.after, count: 10*this.page})
  }

  getPreviousPage = () => {
    this.page = this.page - 1;
    this.loadPage({before: this.before, count: 10*this.page})
  }

  loadPage = ({before, after, count} : {before?:string, after?:string, count?:number}) => {
    this.posts = [];
    this.redditService.getPosts({before, after, count}).subscribe((posts) => {
      this.posts = posts.data.children.map(val => val.data)

      console.log(posts.data.before)
      console.log(this.before)
      this.after = posts.data.after
      this.before = posts.data.before
    });
  }

  firstPage = () => {
    return this.before === null 
  }

  lastPage = () => {
    return this.after === null
  }
}
