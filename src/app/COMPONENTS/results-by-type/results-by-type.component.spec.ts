import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsByTypeComponent } from './results-by-type.component';

describe('ResultsByTypeComponent', () => {
  let component: ResultsByTypeComponent;
  let fixture: ComponentFixture<ResultsByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
