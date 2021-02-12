import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  url = "http://localhost:8090/api/library/book/all/";
  books = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.http.get<any>(this.url).subscribe(data => {
        this.books = data.value;
    })
  }

}
