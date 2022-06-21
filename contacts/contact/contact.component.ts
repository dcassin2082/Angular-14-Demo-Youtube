import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.resetContactForm();
  }

  resetContactForm(form?: NgForm) {
    if(form != null)
      form.reset();
    this.contactService.resetContact();
  }

  submitContactForm(form: NgForm) {
    debugger;
    if(form.value.ContactId == null) {
      form.value.ContactId = 0;
      this.contactService.postContact(form.value).subscribe(c => {
        this.toastrService.success("Contact Added Successfully", "Add Contact");
        this.contactService.getContacts();
        this.resetContactForm(form);
      })
    }
    else {
      this.contactService.putContact(form.value).subscribe(c => {
        this.toastrService.info("Contact Updated Successfully", "Update Contact");
        this.contactService.getContacts();
        this.resetContactForm(form);
      })
    }
  }
}
