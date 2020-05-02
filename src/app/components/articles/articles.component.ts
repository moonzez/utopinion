import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles:Article[];

  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getArticles().subscribe(res => this.articles = res);
  }
}
