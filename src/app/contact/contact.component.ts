import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


declare var firebase: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  emails: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.emails = db.list('emails').valueChanges();
   }

  ngOnInit() {
  }

  processForm() {
    // const allInfo = `My name is ${this.name}. My email is ${this.email}, and my message is ${this.message}`;
    // alert(allInfo)

    //get all info from from

    const allInfo = { 
      "name": this.name,
      "email": this.email,
      "message": this.message,
    }
    //Use API to send to firebase DB
    this.db.list('/emails').push({content: allInfo});
  }

  resetForm() {
    this.name = "";
    this.email = "";
    this.message = "";
  }

}
