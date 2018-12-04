import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WorkComponent } from './work/work.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CoverpageComponent,
    HeaderComponent,
    StoryComponent,
    WorkComponent,
    CertificationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
