import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurfComponent } from './surf/surf.component';
import { QuizComponent } from './quiz/quiz.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
export const routes: Routes = [
 
  
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'surf', component: SurfComponent },
  { path: 'quiz', component: QuizComponent },
  {path:'signin',component:SigninComponent},
  {path:'signout',component:SignoutComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SurfComponent,
    QuizComponent,
    SignoutComponent,
    SigninComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,MatSnackBarModule,
 MatFormFieldModule,MatInputModule,MatProgressSpinnerModule,MatTableModule,
	MatFormFieldModule,MatInputModule,MatProgressSpinnerModule,MatTableModule,BrowserAnimationsModule,MatButtonModule,
   MatToolbarModule,MatCardModule,MatIconModule,MatSidenavModule,MatListModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
