import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtondownComponent } from './buttondown.component';

describe('ButtondownComponent', () => {
  let component: ButtondownComponent;
  let fixture: ComponentFixture<ButtondownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtondownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtondownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
