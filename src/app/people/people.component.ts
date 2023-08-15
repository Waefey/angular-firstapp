import { Component } from "@angular/core";

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.css']
})
export class PeopleComponent {
	disable: boolean = false;
	message: string = 'No person was added.'
	title: string = '';
	show: boolean = false;

	addPerson(): void {
		this.show = true;
		this.message = 'Added a person.';
	}
}
