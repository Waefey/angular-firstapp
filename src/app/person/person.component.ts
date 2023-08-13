import { Component } from '@angular/core';

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.css']
})
export class PersonComponent {
	name: string = 'Juan';
	lastname: string = 'Perez';
	private age: number = 28;

	getAge(): number {
		return this.age;
	}
}
