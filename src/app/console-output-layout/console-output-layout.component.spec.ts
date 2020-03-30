import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleOutputLayoutComponent } from './console-output-layout.component';

describe('ConsoleOutputLayoutComponent', () => {
  let component: ConsoleOutputLayoutComponent;
  let fixture: ComponentFixture<ConsoleOutputLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleOutputLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleOutputLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
