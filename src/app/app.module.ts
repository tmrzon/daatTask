import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllResultsComponent } from './COMPONENTS/all-results/all-results.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsByTypeComponent } from './COMPONENTS/results-by-type/results-by-type.component';
import { FilerByTitleYearPipe } from './PIPES/filer-by-title-year.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './PIPES/sort.pipe';
import { YearPipe } from './PIPES/year.pipe';
import { ItemDetailsComponent } from './COMPONENTS/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AllResultsComponent,
    ResultsByTypeComponent,
    FilerByTitleYearPipe,
    SortPipe,
    YearPipe,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
