import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-class-previous',
  templateUrl: './class-previous.component.html',
  styleUrls: ['./class-previous.component.css']
})
export class ClassPreviousComponent implements OnInit {
  angForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
