import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, interval, map } from 'rxjs';

type Options = Record<string, string>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly options$ = new BehaviorSubject<Options>({ 'r': 'Red', 'g': 'Green', 'b': 'Blue' });
  readonly selectedKey$ = new BehaviorSubject<string>('b');
  readonly selectedvalue$ = combineLatest([this.options$, this.selectedKey$]).pipe(
    debounceTime(0),
    map(([options, key]) => options[key]),
  );

  switchOptions() {
    this.options$.next({ 'm': 'Magenta', 'y': 'Yellow', 'c': 'Cyan' });
    this.selectedKey$.next('c');
  }

  constructor() {
    this.selectedvalue$.subscribe(console.log);
  }
}
