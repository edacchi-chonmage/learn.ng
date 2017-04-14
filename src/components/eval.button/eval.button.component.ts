import { Component, Input } from '@angular/core';
import { AbstractButtonComponent } from '../abstract.button/abstract.button.component';
import { Store } from '@ngrx/store';
import { IStates } from '../../states/root.reducer';
import { CalcChangeModeAction } from '../../states/calc/calc.action';

@Component({
  selector: 'calc-eval-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class EvalButtonComponent extends AbstractButtonComponent {
  @Input() public value: string;

  constructor(private store: Store<IStates>) {
    super();
  }

  get label(): string {
    return this.value;
  }

  public onClick(): void {
    this.store.dispatch(new CalcChangeModeAction(this.value));
  }
}