import { Component, Input, Output } from '@angular/core';
import { PersonModel } from "./person.model";

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.css']
})
export class PersonComponent {
	title:string = 'List of Person';

	@Input() people: PersonModel[];
}
