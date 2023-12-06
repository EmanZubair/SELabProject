import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingGuideComponent } from './sizing-guide.component';

describe('SizingGuideComponent', () => {
  let component: SizingGuideComponent;
  let fixture: ComponentFixture<SizingGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SizingGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SizingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
