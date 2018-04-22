import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BocaUrnaComponent } from './boca-urna.component';

describe('BocaUrnaComponent', () => {
  let component: BocaUrnaComponent;
  let fixture: ComponentFixture<BocaUrnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BocaUrnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BocaUrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
