import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent {
  operatorA: number;
  operatorB: number;

  @Output() result = new EventEmitter<number>;

  sum(): void {
    let sum:number = this.operatorA + this.operatorB;
    this.result.emit(sum)
  }
}
