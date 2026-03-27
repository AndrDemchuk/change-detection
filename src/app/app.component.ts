import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, firstValueFrom, interval, map } from 'rxjs';

type Options = Record<string, string>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly a$ = new BehaviorSubject<number>(1);
  readonly b$ = new BehaviorSubject<number>(2);
  readonly sum$ = combineLatest([this.a$, this.b$]).pipe(map(([a, b]) => a + b));

  async incA() {

    const sum = await firstValueFrom(this.sum$);
    if (sum < 10) {
      this.a$.next(this.a$.value + 1);
    }
    // only increment A if A+B is less than 10
  }




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
