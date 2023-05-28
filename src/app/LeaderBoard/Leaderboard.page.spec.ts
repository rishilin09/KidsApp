import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LeaderBoardPage } from './Leaderboard.page';

describe('LeaderBoardPage', () => {
  let component: LeaderBoardPage;
  let fixture: ComponentFixture<LeaderBoardPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(LeaderBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
