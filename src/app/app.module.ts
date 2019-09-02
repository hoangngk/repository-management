import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposDetailsComponent } from './components/repos-details/repos-details.component';
import { ReposEditComponent } from './components/repos-edit/repos-edit.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReposListComponent,
    ReposDetailsComponent,
    ReposEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
