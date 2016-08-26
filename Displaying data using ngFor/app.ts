import { bootstrap } from "@angular/platform-browser-dynamic"; 
import { Component } from "@angular/core";


@Component({
  selector: 'hello-world',
  template: `
  <ul>
  	<li *ngFor = "Print name of names"> Hello {{name}}</li>
  </ul>
`
})

class HelloWorld {
	name: string[];

	constructor(){
		this.name = ['Philips','Aaron','Chelsey'];
	}
}

bootstrap(HelloWorld);