import { Component } from "@angular/core";
import { PersonModel } from "../person/person.model";

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.css']
})
export class PeopleComponent {
	disable: boolean = false;
	message: string = 'No person was added.'
	title: string = 'List of Person';
	show: boolean = false;

	people: PersonModel[] = [
		new PersonModel('Juan', 'Perez'),
		new PersonModel('Laura', 'Juarez')
	];

	nameInput:string = '';
	lastnameInput:string = '';

	addPerson(): void {
		let person = new PersonModel(this.nameInput, this.lastnameInput);
		this.people.push(person);
		this.show = true;
		this.message = 'Added a person.';
	}
}
