import { Component } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
	title: string = '[Calculator App]';
	operatorA: number = 0;
	operatorB: number = 0;
	result: number = 0;

	sum(): void {
		this.result = this.operatorA + this.operatorB;
	}
}
