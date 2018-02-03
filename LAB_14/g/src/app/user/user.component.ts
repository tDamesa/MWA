import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <div><label for="name" >Name: </label></div>
  <input type="text" formControlName="name" >
  <div><span *ngIf="myForm.controls.name.touched && !myForm.controls.name.valid">required </span> </div>
   <div><label for="email" >Email: </label></div>
   <div> <input type="text" formControlName="email"></div>
   <div><span *ngIf="myForm.controls.email.touched && !myForm.controls.email.valid">required </span> </div>

    <div><label for="email" >Post </label></div>
    <div><textarea cols="20" rows="6" formControlName="post"></textarea></div>
    <div><span *ngIf="myForm.controls.post.touched && !myForm.controls.post.valid">Minimum length 10 </span> </div>

   <div> <button type="submit" [disabled]="!myForm.valid">Submit</button>
     <button type="button" (click)="getData()">Get Data</button></div>
     </form>`,
     styles: [`span { color: red }`]
})
export class UserComponent {
  public myForm: FormGroup;
  userInfo: any;
  postInfo: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.myForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      post: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  onSubmit() {
    console.log(this.myForm.value);
    this.router.navigate(['thanks']);
  }
  getData() {
    this.userService.getEmailName().subscribe(data => {
      this.userInfo = data;
      this.myForm.controls.name.setValue(data.name);
      this.myForm.controls.email.setValue(data.email);
    });
    this.userService.getPost().subscribe(data => {
      this.postInfo = data;
      this.myForm.controls.post.setValue(data[0].body);
    });
  }
}
