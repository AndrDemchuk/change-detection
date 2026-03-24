import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  counter = 0;

  /*   readonly changeDetector = inject(ChangeDetectorRef);
   */

  calculateValue() {
    console.log('Calculating value');

    return 42;
  }

  doNothing() {

  }

  constructor() {
    setInterval(() => {
      this.counter++;
      console.log('Counter', this.counter);
    }, 3000);

    /*     setInterval(() => {
          this.changeDetector.detectChanges();
          //also inputs, outputs and events`s gonna trigger 
          // the change detection while having onPush
        }, 5000); */
  }


}
