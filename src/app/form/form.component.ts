import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  url = 'http://localhost:8090/api/library/book/save'
  bookForm = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    publicationDate: new FormControl(''),
    price: new FormControl(''),
    available: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post<any>(this.url, this.bookForm.value).subscribe(data => {
      console.log(data);
    })
  }

}
