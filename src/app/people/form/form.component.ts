import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { PersonModel } from "../person/person.model";
import { LoggingService } from "../../LoggingServices.service";
import { PeopleServices } from "../people.services";

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	providers: [LoggingService]
})
export class FormComponent {
	title: string = 'Form of Person';

	@ViewChild('name') name: ElementRef;
	@ViewChild('lastname') lastname: ElementRef;

	constructor(private loggingService: LoggingService, private peopleService: PeopleServices) {
	}

	addPerson(): void {
		let person: PersonModel = new PersonModel(
			this.name.nativeElement.value,
			this.lastname.nativeElement.value);
		this.loggingService.sendMessageToConsole("Person: " + person);
		this.peopleService.addPerson(person);
	}
}
