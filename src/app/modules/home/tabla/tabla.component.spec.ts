import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComponent } from './tabla.component';
import { Maquina } from 'src/app/models/maquina';
import { of } from 'rxjs';
import { InicioService } from 'src/app/services/inicio-service.service';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;
  let inicioServiceMock: jasmine.SpyObj<InicioService>;

  beforeEach(async () => {
    inicioServiceMock = jasmine.createSpyObj('InicioService', ['getMaquinas2D', 'getMaquinas3D']);

    await TestBed.configureTestingModule({
      declarations: [TablaComponent],
      providers: [{ provide: InicioService, useValue: inicioServiceMock }],
      imports: [
        MatTableModule,
        MatCheckboxModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
