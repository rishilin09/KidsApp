import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaderboardService } from '../leaderboard.service';
import { Leaderboard } from '../interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'Leaderboard.page.html',
  styleUrls: ['Leaderboard.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, RouterModule]
})
export class LeaderBoardPage {

  history: Leaderboard[] = [];
  hisLen: number = 0;

  constructor(private leadServ: LeaderboardService) { }

  ionViewDidEnter() {
    this.history = this.leadServ.getLeaderBoard();
    this.hisLen = this.history.length;
  }

  isEmpty() {
    if (this.hisLen !== 0) {
      return true;
    }
    return false;
  }
}
