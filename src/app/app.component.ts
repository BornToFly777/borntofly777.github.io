import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	currentUrl$: Observable<string>;

	constructor(private router: Router) {
	}

	ngOnInit(): void {
		this.currentUrl$ = this.router.events.map(() => this.router.url);
	}
}
