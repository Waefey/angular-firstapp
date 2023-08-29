import { Component, Input, Output } from '@angular/core';
import { PersonModel } from "./person.model";
import { PeopleServices } from "../people.services";

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.css']
})
export class PersonComponent {
	title:string = 'List of Person';

	@Input() people: PersonModel[];

	constructor(private peopleService: PeopleServices) {
		this.peopleService.hi.subscribe(
			(index: number) => alert("Index is: " + index)
		);
	}

	sendHi(index: number){
		this.peopleService.hi.emit(index);
	}
}
