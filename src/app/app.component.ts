import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  fistDisplay = false;
  secondDisplay = false;
  thirdDisplay = false;
  empData: any;
  collegeName = "K J Somaiya College";

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get("/assets/json/userData.json").subscribe((data: any) => {
      this.empData = data.list;
    });
  }

  display(str) {
    if (str == 'First') {
      this.fistDisplay = true;
      this.secondDisplay = false;
      this.thirdDisplay = false;
    } else if (str == 'Two') {
      this.fistDisplay = false;
      this.secondDisplay = true;
      this.thirdDisplay = false;
    } else if(str == 'Three') {
      this.fistDisplay = false;
      this.secondDisplay = false;
      this.thirdDisplay = true;
    }
  }

  showName() {
    //let str = "My name is Shruti , I belongs to " + this.collegeName + " College";
    let str = `My Name is Shruti, I belongs to ${this.collegeName}`;
    return str;
  }
}
