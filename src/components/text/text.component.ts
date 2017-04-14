import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'calc-text',
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.scss']
})
export class TextComponent {
  public text$: Observable<string>;
}