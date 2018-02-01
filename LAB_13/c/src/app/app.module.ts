import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { myRoute } from './app.route';
import { RouterModule } from '@angular/router';
import { Db } from './db.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProfileGuard } from './guard';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentComponent,
    ProfileComponent,
    ErrorPageComponent
  ],
  imports: [BrowserModule, myRoute],
  providers: [Db, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
