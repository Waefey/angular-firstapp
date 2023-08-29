import { PersonModel } from "./person/person.model";
import { LoggingService } from "../LoggingServices.service";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class PeopleServices {
	people: PersonModel[] = [
		new PersonModel('Example', 'Person')
	];

	hi = new EventEmitter<number>();

	constructor(private loggerService: LoggingService) {
	}

	addPerson(person: PersonModel) {
		this.loggerService.sendMessageToConsole("Add this person: " + person);
		this.people.push(person);
	}
}