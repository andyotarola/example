import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageExampleComponent } from './components/page-example/page-example.component';


const routes: Routes = [
  {
    path: 'page-example',
    component: PageExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
