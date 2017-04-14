import { Component, Input } from '@angular/core';
import { AbstractButtonComponent } from '../abstract.button/abstract.button.component';

@Component({
  selector: 'calc-num-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class NumberButtonComponent extends AbstractButtonComponent {
  @Input() public value: number;

  get label(): string {
    return String(this.value);
  }

  public onClick(): void {
  }
}
