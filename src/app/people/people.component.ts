import { Component } from "@angular/core";
import { PersonModel } from "../person/person.model";

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.css']
})
export class PeopleComponent {
	message: string = 'No person was added.'
	show: boolean = false;
	title: string = 'List of Person';

	people: PersonModel[] = [
		new PersonModel('Juan', 'Perez'),
		new PersonModel('Laura', 'Juarez')
	];

	addPerson(person: PersonModel): void {
		this.people.push(person);
		this.show = true;
		this.message = 'Added a person.';
	}
}
