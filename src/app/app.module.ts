import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';
import { FormsModule } from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { FormComponent } from './people/form/form.component';
import { CalculatorFormComponent } from './calculator/calculator-form/calculator-form.component';
import { CalculatorResultComponent } from './calculator/calculator-result/calculator-result.component';

@NgModule({
	declarations: [
		AppComponent,
		PeopleComponent,
		PersonComponent,
		FormComponent,
		CalculatorComponent,
		CalculatorFormComponent,
		CalculatorResultComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
