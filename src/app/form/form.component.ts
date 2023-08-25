import { Component, EventEmitter, Output } from '@angular/core';
import { PersonModel } from "../person/person.model";

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent {
	title: string = 'Form of Person';

	@Output() person = new EventEmitter<PersonModel>();

	addPerson(name: HTMLInputElement, lastname: HTMLInputElement): void {
		let person: PersonModel = new PersonModel(name.value, lastname.value);
		this.person.emit(person);
	}
}
