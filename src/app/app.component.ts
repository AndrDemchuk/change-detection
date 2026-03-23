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

  readonly changeDetector = inject(ChangeDetectorRef);

  doNothing() {

  }

  constructor() {
    setInterval(() => {
      this.counter++;
      console.log('Counter', this.counter);
    }, 3000);

    setInterval(() => {
      this.changeDetector.detectChanges();
    }, 5000);
  }

}
