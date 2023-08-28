import { PersonModel } from "./person/person.model";

export class PeopleServices {
	people: PersonModel[] = [
		new PersonModel('Example', 'Person')
	];

	addPerson(person: PersonModel){
		this.people.push(person);
	}
}