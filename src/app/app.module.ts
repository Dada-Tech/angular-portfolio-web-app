import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalModule } from './_modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

import { PostsService } from './services/posts.service';
import { FollowlinkService } from './services/followlink.service';
import { FormpostService } from './services/formpost.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ModalModule,
    RouterModule,
    NgxSpinnerModule,
    RecaptchaV3Module,
  ],
  providers: [
    PostsService,
    FollowlinkService,
    FormpostService,
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LeZSrcUAAAAAO9LyRi-nBVEH2dANXdGthVBSZg0' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
