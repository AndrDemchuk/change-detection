import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly counter$ = interval(1000);

  /*   readonly changeDetector = inject(ChangeDetectorRef);
   */

  calculateValue() {
    console.log('Value is calculated');
    return 42;
  }


  constructor() {
  }


}
