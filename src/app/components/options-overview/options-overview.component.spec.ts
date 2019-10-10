import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsOverviewComponent } from './options-overview.component';

describe('OptionsOverviewComponent', () => {
  let component: OptionsOverviewComponent;
  let fixture: ComponentFixture<OptionsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
