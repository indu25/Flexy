import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FlexyClassService} from '../flexy-class.service';

@Component({
  selector: 'app-class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.css']
})
/*export class ClassScheduleComponent1 implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private flexyClassService: FlexyClassService) {
    this.scheduleClass();
  }
  scheduleClass() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required ],
      Description: ['', Validators.required ],
      Topics: ['', Validators.required ]
    });
  }

  addClass(Name, Description, Topics) {
    this.flexyClassService.addClass(Name, Description, Topics);
  }
  ngOnInit(): void {
  }
}*/


export class ClassScheduleComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  selected = '';

  constructor(private fb: FormBuilder, private flexyClassService: FlexyClassService) {
  }

  addClass(Name, Description, Topics) {
    this.flexyClassService.addClass(Name, Description, Topics);
  }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.fb.group({
     thirdCtrl: ['', Validators.required]
    });
  }
}

