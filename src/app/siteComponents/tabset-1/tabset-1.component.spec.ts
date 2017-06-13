import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabset1Component } from './tabset-1.component';

describe('Tabset1Component', () => {
  let component: Tabset1Component;
  let fixture: ComponentFixture<Tabset1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabset1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabset1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
