import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li *ngFor="let item of strArr"> {{item}}</li>
  <p  appUpper> I have changed to uppercase</p>
  <p [appMyVisibility]="false" > I am hidden</p>
  <p appMyColor> I am changing my background color</p>

  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public strArr: string[] = ['a', 'b', 'c'];
}
