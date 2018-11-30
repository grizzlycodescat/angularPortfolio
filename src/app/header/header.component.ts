import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showFlag = true;
  templateCompName: string;

  constructor() { }

  toggleComponent(value) {
    switch (value) {
      case 1:
        this.templateCompName = "story";
        this.showFlag = false;
        break;
      case 2:
        this.templateCompName = "work";
        this.showFlag = false;
        break;
      case 3:
        this.templateCompName = "certs";
        this.showFlag = false;
        break;
      case 4: 
        this.templateCompName = "contact";
        this.showFlag = false;
        break;
      default:
        break;
    }
    
  }
  
  ngOnInit() {
  }

}
