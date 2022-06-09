import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadedatosComponent } from './listadedatos.component';

describe('ListadedatosComponent', () => {
  let component: ListadedatosComponent;
  let fixture: ComponentFixture<ListadedatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadedatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadedatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
