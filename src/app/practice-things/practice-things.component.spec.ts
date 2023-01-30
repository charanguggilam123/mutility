import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeThingsComponent } from './practice-things.component';

describe('PracticeThingsComponent', () => {
  let component: PracticeThingsComponent;
  let fixture: ComponentFixture<PracticeThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeThingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
