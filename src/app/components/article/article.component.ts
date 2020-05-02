import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticlesService } from '../../services/articles.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleLoaded:boolean = false;
  article:Article;

  constructor(
    private articlesService:ArticlesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }

  getArticle(id) {
    return this.articlesService.getArticles().subscribe(res => {
      this.article = res.find(article => article.id == id);
      this.articleLoaded = true;
    });
  }
}
