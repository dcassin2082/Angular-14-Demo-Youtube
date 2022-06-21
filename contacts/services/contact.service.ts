import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  contact: Contact = new Contact();
  contacts: Contact[] = [];
  apiUrl: string = "https://localhost:7016/api/Contacts";

  getContacts() {
    return this.http.get(this.apiUrl).subscribe(c => {
      this.contacts = c as Contact[];
    })
  }

  postContact(contact: Contact) {
    return this.http.post(this.apiUrl, contact);
  }

  putContact(contact: Contact) {
    return this.http.put(this.apiUrl + '/' + contact.ContactId, contact);
  }

  deleteContact(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  resetContact() {
    this.contact = {
      ContactId: null,
      FirstName: '',
      LastName: '',
      EmailAddress: '',
      Phone: ''
    }
  }
}
