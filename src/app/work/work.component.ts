import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  workExp = [
    {
      title:'Frontend Developer',
      organization: 'Onyx Island Pte Ltd',
      date: 'September 2018 - Present',
      description: 'I develop scalable web applications as well as microsites for various clients using a mix of Javascript (both Vanilla and frameworks like AngularJS and React ), JQuery, CSS and sometimes templating engines like Jekyll. I dabble in Backend development using PHP.',
    },
    {
      title:'Data Technology Developer',
      organization: 'Dentsu Aegis networks',
      date: 'November 2017 - April 2018',
      description: 'I created ETL features for an in-house data warehouse project, and used AngularJS to create the frontend components for a data analytics platform that used the data warehouse. I also created key documentation for end users of the platform as well as the engineers who used it. To that end, I also created guide videos that complimented the documentation.',
    },
    {
      title:'Web Developer',
      organization: 'Alphanova Pte Ltd',
      date: 'August 2017 - October 2017',
      description: 'I worked on creating frontend and backend features for various projects using Javascript and PHP (frameworks include VueJS and Laravel). I used PHPUnit extensively to write unit tests. Leveraged my skills as a Technical Writer to create API documentation.',
    },
    {
      title:'Technical Writer',
      organization: 'Barclays Investment Bank',
      date: 'October 2016 - March 2017',
      description: 'I created key technical documents for end-users and support teams. I also templated and handled the creation of testing documentation for microseervices as well as the portal used by the Global Internal Security department. I also handled testing tasks in order to verify application integrity.',
    },
    {
      title:'Autodesk Asia Pte Ltd',
      organization: 'Onyx Island Pte Ltd',
      date: 'November 2014 - March 2016',
      description: 'I authored topic based content for AutoCAD Mechanical. I added to that by creating video tutorials which are still used today. I carried out a research project where I used a Python framework called Sikuli to automate aspects of the video creation workflow. I had my first taste of web developent working on a cloud platform called AutoCAD IO, where I wrote documentation as well as carried out API testing. I assisted my scrum team by carrying out feature tests as well as writing automated test cases in C# using an in-house framework. The last thing I did was lend my voice to the production of help content, so you might find a video or two with my (younger) voice.',
    }
  ]

  constructor( private meta: Meta) { 
    this.meta.addTag({name:"viewport", content:"width=device-width, initial-scale=1.0"})
  }

  ngOnInit() {
  }

}
