import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipecreateComponent } from './recipecreate/recipecreate.component';

const routes: Routes = [
  {
    path: '',
    component: RecipecreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
