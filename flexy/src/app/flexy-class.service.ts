import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FlexyClassService {
  uri = 'http://localhost:4000/flexy';
  constructor(private http: HttpClient) { }
  addClass(Name, Description, Topics) {
    const obj = {
      Name,
      Description,
      Topics
    };
    console.log(obj);
  // flexy/grade/{gradeId}/subject/{subjectId}/classes
    this.http.post(`${this.uri}/grade/1/subject/2/classes`, obj)
      .subscribe(res => console.log('Done'));
  }
}
