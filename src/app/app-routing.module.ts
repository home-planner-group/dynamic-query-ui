import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueryComponent} from "./components/query/query.component";

export enum AppRoute {
  QUERY = 'query'
}

const routes: Routes = [
  {path: '', redirectTo: AppRoute.QUERY, pathMatch: 'full'},
  {path: AppRoute.QUERY, component: QueryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
