import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { GitComponent } from './components/git/git.component';

const routes: Routes = [
  { path: 'rxjs', component: RxjsComponent },
  { path: '',   redirectTo: '/rxjs', pathMatch: 'full' }, // redirect to `first-component`
  {path:'git', component:GitComponent}  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
