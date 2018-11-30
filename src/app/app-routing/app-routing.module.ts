import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//components
import { CoverpageComponent } from '../coverpage/coverpage.component';
import { StoryComponent } from '../story/story.component';
import { HeaderComponent } from '../header/header.component';
import { CertificationComponent } from '../certification/certification.component';
import { ContactComponent } from '../contact/contact.component';
import { WorkComponent } from '../work/work.component';



const appRoutes = [
  { path: '', component: CoverpageComponent},
  { path: 'story', component: StoryComponent},
  { path: 'work', component: WorkComponent},
  { path: 'certification', component: CertificationComponent},
  { path: 'contact', component: ContactComponent},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
