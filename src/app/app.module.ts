import { RickandmortyService } from './services/rickandmorty.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ListadedatosComponent } from './components/listadedatos/listadedatos.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, ListadedatosComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [RickandmortyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
