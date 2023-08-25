import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { PersonModel } from "../person/person.model";

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent {
	title: string = '|Form of Person|';

	@Output() person = new EventEmitter<PersonModel>();

	@ViewChild('name') name: ElementRef;
	@ViewChild('lastname') lastname: ElementRef;

	addPerson(): void {
		let person: PersonModel = new PersonModel(
			this.name.nativeElement.value,
			this.lastname.nativeElement.value);
		this.person.emit(person);
	}
}
