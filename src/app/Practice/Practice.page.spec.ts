import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticePage } from './Practice.page';

describe('Tab1Page', () => {
  let component: PracticePage;
  let fixture: ComponentFixture<PracticePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
