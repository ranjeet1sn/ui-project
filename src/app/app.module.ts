import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FilterComponent,
  HeaderComponent,
  MapViewComponent,
  ListViewComponent,
} from './components';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from './shared/shared.module';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MapViewComponent,
    ListViewComponent,
    HeaderComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsFurg-VtJDRaPIrKaKsj0LPtS4dsuwKo',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
