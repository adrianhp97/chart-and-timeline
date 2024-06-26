import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineScaleComponent } from './timeline-scale.component';

describe('TimelineScaleComponent', () => {
  let component: TimelineScaleComponent;
  let fixture: ComponentFixture<TimelineScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineScaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
