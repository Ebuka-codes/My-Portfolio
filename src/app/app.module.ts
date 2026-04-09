import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [AppComponent, ToastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [ToastComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
