import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
})
export class UiInputComponent implements OnInit {
  constructor() {}

  @Input() name: string;
  @Input() placeholder: string;

  @Output() changeValue = new EventEmitter<string>();

  ngOnInit() {}

  onChange(value: string) {
    this.changeValue.emit(value);
  }
}
