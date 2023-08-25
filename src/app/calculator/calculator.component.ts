import { Component } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
	title: string = '[Calculator App]';

	result: number;

	getResult(result: number){
		this.result = result;
	}
}
