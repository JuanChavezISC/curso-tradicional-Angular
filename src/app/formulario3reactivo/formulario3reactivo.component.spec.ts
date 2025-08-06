import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario3reactivoComponent } from './formulario3reactivo.component';

describe('Formulario3reactivoComponent', () => {
  let component: Formulario3reactivoComponent;
  let fixture: ComponentFixture<Formulario3reactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Formulario3reactivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Formulario3reactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
