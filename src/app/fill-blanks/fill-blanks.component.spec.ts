import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBlanksComponent } from './fill-blanks.component';

describe('FillBlanksComponent', () => {
  let component: FillBlanksComponent;
  let fixture: ComponentFixture<FillBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
