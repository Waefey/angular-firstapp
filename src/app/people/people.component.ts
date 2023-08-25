import { Component, Input } from "@angular/core";
import { PersonModel } from "./person/person.model";

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.css']
})
export class PeopleComponent {
	title: string = 'People App';

	people: PersonModel[] = [
		new PersonModel('Example', 'Person')
	];

	getPeople(person: PersonModel){
		this.people.push(person);
	}
}
