import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TMode } from '../../declarations/common';
import { CalcSetTextAction } from '../../states/calc/calc.action';
import { getCalcMode, IStates } from '../../states/root.reducer';
import { AbstractButtonComponent } from '../abstract.button/abstract.button.component';

@Component({
  selector: 'calc-num-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class NumberButtonComponent extends AbstractButtonComponent {
  @Input() public value: number;
  private mode$: Observable<TMode>;

  constructor(private store: Store<IStates>) {
    super();
    this.mode$ = this.store.select(getCalcMode);
  }

  get label(): string {
    return String(this.value);
  }

  public onClick(): void {
    this.store.dispatch(new CalcSetTextAction(this.value));
  }
}
