import { MovieTvBase } from './../../core/models/movie-tv-base';
import { Observable } from 'rxjs';
import { TmdbApiService } from './../../core/services/tmdb-api/tmdb-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {

  detail$!: Observable<MovieTvBase>

  constructor(
    private route: ActivatedRoute,
    private tmdbApi: TmdbApiService
  ) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.detail$ = this.tmdbApi.getDetailById(id, 'tv')
  }

}
