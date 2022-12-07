import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrujComponent } from './registruj.component';

describe('RegistrujComponent', () => {
  let component: RegistrujComponent;
  let fixture: ComponentFixture<RegistrujComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrujComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
