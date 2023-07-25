import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @ViewChild('refId') elementRefId: ElementRef = new ElementRef('hola');
  @Input() idOrder: string | number = 0;
  @Input() items: Array<any> = [];

  constructor() {}

  sendData(): void {

  }
}