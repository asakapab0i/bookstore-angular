import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../service/author.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  author: Author;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id = +params.id;
        this.authorService.findById(id).subscribe(data => {
          this.author = data;
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }

}
