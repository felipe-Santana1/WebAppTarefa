import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { TarefasComponent } from './component/tarefas/tarefas.component';
//import { UsuarioComponent } from './modules/Usuario/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TarefasComponent,
   

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
