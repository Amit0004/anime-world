import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SassFrameComponent } from './sass-frame/sass-frame.component';
import { SassFrame2Component } from './sass-frame2/sass-frame2.component';

const routes:Routes = [
  { path:'',pathMatch:'full',redirectTo:'home' },
  { path:'home',component: SassFrameComponent },
  { path:'frame', component: SassFrame2Component }
]
@NgModule({
  declarations: [
    AppComponent,
    SassFrameComponent,
    SassFrame2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
