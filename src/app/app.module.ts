import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {AppEffects} from './store/effects/index.effects';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {reducers} from './store/reducers/index';
import {MaterialModule} from './shared/material.module';
import {SearchService} from './services/search.service';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    EffectsModule.forRoot(AppEffects),
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
