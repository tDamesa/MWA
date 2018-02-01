import { Component, OnInit } from '@angular/core';
import { Db } from '../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  template: `<ul><li *ngFor= "let item of stuInfo; let i=index ">
  <a [routerLink]="['/profile',stuInfo[i].stuId]">{{stuInfo[i].name}}</a>
  </li>

    </ul>`,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public stuInfo;
  constructor(private db: Db, private router: Router) {}

  ngOnInit() {
    this.stuInfo = this.db.getStudents();
  }
}
