import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public contactService: ContactService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.contactService.getContacts();
  }

  loadContact(contact: Contact) {
    this.contactService.contact = Object.assign({}, contact);
  }

  deleteContact(id: number) {
    if(confirm("Are you sure you want to delete this contact?")) {
      this.contactService.deleteContact(id).subscribe(c => {
        this.toastrService.warning("Contact Deleted Successfully", "Delete");
        this.contactService.getContacts();
        this.contactService.resetContact();
      })
    }
  }
}
