import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthpageComponent } from './fourthpage.component';

describe('FourthpageComponent', () => {
  let component: FourthpageComponent;
  let fixture: ComponentFixture<FourthpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
