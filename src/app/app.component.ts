import {Component} from '@angular/core';
import {AppRoute} from "./app-routing.module";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  AppRoute = AppRoute;
  FRESH_PLANNER_URL = environment.freshPlannerUrl;
}
