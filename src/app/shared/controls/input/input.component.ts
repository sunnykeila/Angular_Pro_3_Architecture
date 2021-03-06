import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder22: string;
  @Output() changed22 = new EventEmitter<string>();
  value22: string;
  isDisabled22: boolean;

  constructor() {}

  ngOnInit(): void { }

  private propagateChange22: any =  () => { };
  private propagateTouched22: any =  () => { };

  writeValue(value: string): void {
    console.log('--------1');
        this.value22 = value;
  }

  registerOnChange(fn: any): void {
    console.log('--------2');
     this.propagateChange22 = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('--------3');
     this.propagateTouched22 = fn;
  }

  setDisabledState(isDisabled: boolean) {
    console.log('--------4');
      this.isDisabled22 = isDisabled;
  }

   onKeyup22(value: string): void {
    this.value22 = value;
    this.propagateChange22(value);
    this.changed22.emit(value);
   }

   onBlur22(): void {
    this.propagateTouched22();
   }
}
