import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public counter = 7;
  public componentCounterValue;


  display(counter) {
    this.counter = counter;
  }
}
