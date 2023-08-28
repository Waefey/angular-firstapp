import { Component, Input, OnInit } from "@angular/core";
import { PersonModel } from "./person/person.model";
import { LoggingService } from "../LoggingServices.service";
import { PeopleServices } from "./people.services";

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.css'],
	providers: [ LoggingService, PeopleServices ]
})
export class PeopleComponent implements OnInit{
	title: string = 'People App';

	people: PersonModel[] = [];

	constructor(private loggingService: LoggingService,
	            private peopleService: PeopleServices) {
	}

	ngOnInit() {
		this.people = this.peopleService.people;
	}

	getPeople(person: PersonModel) {
		this.peopleService.addPerson(person);
	}
}
