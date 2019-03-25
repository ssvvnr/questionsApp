import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { 
  MatRadioModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';

// Components
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';

// Services
import { QuestionsService } from './questions.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'questions',
        component: QuestionsComponent
      }
    ])
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
