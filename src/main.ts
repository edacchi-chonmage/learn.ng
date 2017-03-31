import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { Components } from './imports/components';
// For states
import { rootReducer } from './states/root.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentStore()
  ],
  declarations: [
    AppComponent,
    Components
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
