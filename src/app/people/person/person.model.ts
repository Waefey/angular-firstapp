export class PersonModel {
	constructor(public name: string, public lastname: string) {
	}

	toString(): string {
		return this.name + ' ' + this.lastname;
	}
}