import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TablaComponent } from './tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    TablaComponent,
  ],
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
})
export class HomeModule {}
