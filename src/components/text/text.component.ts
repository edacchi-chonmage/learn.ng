import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getCalcText, IStates } from '../../states/root.reducer';

@Component({
  selector: 'calc-text',
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.scss']
})
export class TextComponent {
  public text$: Observable<string>;

  constructor(private store: Store<IStates>) {
    this.text$ = this.store.select(getCalcText);
  }
}