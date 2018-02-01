import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `<h1>{{header}}</h1>
  <h2>About Us</h2>
  <div><p>{{discription+discription1}}</p></div>`,
  styleUrls: []
})
export class HomepageComponent {
  public header = 'Welcom to Maharish Univesity of Managment';
  public discription = 'We come from many places, cultures, and backgrounds,';
  public discription1 = 'but share a strong common commitment to personal inner growth, wellness, sustainability, and positive values.';
}
