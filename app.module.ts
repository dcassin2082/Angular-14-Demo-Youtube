import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactComponent } from './contacts/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      progressAnimation: 'increasing',
      progressBar: true,
      timeOut: 1000
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
