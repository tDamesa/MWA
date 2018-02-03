import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserComponent } from './user/user.component';

const appRoutes = [
  { path: '', component: UserComponent },
  { path: 'thanks', component: ThankyouComponent }
];

@NgModule({
  declarations: [AppComponent, ThankyouComponent, UserComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
