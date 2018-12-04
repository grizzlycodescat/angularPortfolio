import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  mainCertificaiton = [
    {
      title: 'Degree in Computer Science',
      institution: 'Nanyang Technological University, Singapore',
      period: '2015 - Present'
    },
    {
      title: 'Diploma in Mechatronics',
      institution: 'Temasek Polytechnic, Singapore',
      period: '2009 - 2012'
    }
  ]
  otherCertification;
  constructor() { }

  ngOnInit() {
  }

}
