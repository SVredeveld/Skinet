import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-inut',
  templateUrl: './text-inut.component.html',
  styleUrls: ['./text-inut.component.scss']
})
export class TextInutComponent implements OnInit, ControlValueAccessor {

  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() type = 'text'; 
  @Input() label: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = control.validator ? [control.validator] : [];
    const asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];

    control.setValidators(validators);
    control.setAsyncValidators(asyncValidators);
    control.updateValueAndValidity();
  }

  onChange(event) {

  }

  onTouched() {

  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
