import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsArchiveComponent } from './tickets-archive.component';

describe('TicketsArchiveComponent', () => {
  let component: TicketsArchiveComponent;
  let fixture: ComponentFixture<TicketsArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
