import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustafaComponent } from './view.component';

describe('MustafaComponent', () => {
  let component: MustafaComponent;
  let fixture: ComponentFixture<MustafaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustafaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
