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

	nameInput: string = '';
	lastnameInput: string = '';

	addPerson(): void {
		let person = new PersonModel(this.nameInput, this.lastnameInput);
		this.person.emit(person);
	}
}
