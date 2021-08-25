import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllResultsComponent } from './COMPONENTS/all-results/all-results.component';
import { ItemDetailsComponent } from './COMPONENTS/item-details/item-details.component';

const routes: Routes = [
  { path: '', component: AllResultsComponent },
  { path: 'item/:item', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
