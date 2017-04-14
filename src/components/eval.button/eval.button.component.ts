import { Component, Input } from '@angular/core';
import { AbstractButtonComponent } from '../abstract.button/abstract.button.component';

@Component({
  selector: 'calc-eval-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class EvalButtonComponent extends AbstractButtonComponent {
  @Input() public value: string;

  get label(): string {
    return this.value;
  }

  public onClick(): void {
  }
}