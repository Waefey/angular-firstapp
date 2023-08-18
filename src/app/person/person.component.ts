import { Component, Input } from '@angular/core';
import { PersonModel } from "./person.model";

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.css']
})
export class PersonComponent {
	@Input() person: PersonModel;
	@Input() i: number;
}
