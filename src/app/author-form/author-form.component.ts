import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Author } from '../model/author';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  author: Author;

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private authorService: AuthorService) { }

  ngOnInit() {
    this.author = new Author();
    this.updateAddButton();
  }

  onSubmit() {
    this.saveAuthor();
  }

  saveAuthor() {
    console.log(this.author);
    this.authorService.save(this.author).subscribe(result => this.gotoAuthorList());
  }

  gotoAuthorList() {
    this.router.navigate(['/authors']);
  }
  updateAddButton() {
    setTimeout(() => {
      this.appComponent.addButtonLabel = 'Author';
      this.appComponent.addButtonRoute = '/author';
    });
  }


}
