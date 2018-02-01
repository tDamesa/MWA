import { Component, OnInit } from '@angular/core';
import { Db } from '../db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `<p>name:{{stuInfo.name}}  stuId:{{stuInfo.stuId}}  email:{{stuInfo.email}}</p>`,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public stuInfo;
  constructor(private db: Db, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.stuInfo = this.db.getStudent(id);
  }
}
