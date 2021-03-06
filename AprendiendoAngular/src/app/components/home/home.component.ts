import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]

})
export class HomeComponent implements OnInit {
  public articles: Article[];
  public url: string;
  public title: string;

  constructor(
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
    this.title = 'Últimos artículos';
  }

  ngOnInit() {
    this._articleService.getArticles(true).subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        } else {

        }
      },
      error => {
        console.log(error);
      }
    );
  }

}