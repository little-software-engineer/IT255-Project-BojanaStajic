import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoranViewComponent } from './restorani-view.component';

describe('RestoraniViewComponent', () => {
  let component: RestoranViewComponent;
  let fixture: ComponentFixture<RestoranViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoranViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoranViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
