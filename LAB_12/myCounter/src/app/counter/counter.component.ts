import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  template: `<button (click)="increment()">+</button>{{counterValue}}<button (click)="decrement()">-</button>
  <br>
  <p> Component Counter Value: {{componentCounterValue}}</p>`,
  styles: []
})
export class CounterComponent implements OnChanges {
  @Output() counterChange = new EventEmitter();
  counterValue: number = 0;
  @Input('counter')
  set counter(counter) {
    this.counterValue = counter;
  }
  @Input() componentCounterValue;
  increment() {
    this.counterValue = this.counterValue + 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  decrement() {
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  ngOnChanges(counterChange) {
    this.componentCounterValue = counterChange.counter.currentValue;
  }
}
