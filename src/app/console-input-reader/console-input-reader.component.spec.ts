import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleInputReaderComponent } from './console-input-reader.component';

describe('ConsoleInputReaderComponent', () => {
  let component: ConsoleInputReaderComponent;
  let fixture: ComponentFixture<ConsoleInputReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleInputReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleInputReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
