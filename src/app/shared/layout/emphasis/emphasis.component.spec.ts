import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphasisComponent } from './emphasis.component';

describe('EmphasisComponent', () => {
  let component: EmphasisComponent;
  let fixture: ComponentFixture<EmphasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmphasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmphasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
