import { Injectable } from '@angular/core';
import { Leaderboard } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class LeaderboardService {
  constructor() { }
  leaderboard: Leaderboard[] = [];
  // leaderboard: Leaderboard[] = [{
  //   desc: `You answered 6 out of 6 questions correctly.`,        
  //   date: new Date(),
  //   answers: [
  //     {
  //       name: 'Lion',
  //       selected: 'LION'
  //     },
  //     {
  //       name: 'Tiger',
  //       selected: 'TIGER'
  //     },
  //     {
  //       name: 'Elephant',
  //       selected: 'ELEPHANT'
  //     },
  //     {
  //       name: 'Elephant',
  //       selected: 'ELEPHANT'
  //     },
  //     {
  //       name: 'Elephant',
  //       selected: 'ELEPHANT'
  //     },
  //     {
  //       name: 'Elephant',
  //       selected: 'ELEPHANT'
  //     },
  // ]
  // }];
  
  addLeaderBoard(leaderboard: Leaderboard){
    this.leaderboard.push(leaderboard);
  }

  getLeaderBoard(){
    console.log(this.leaderboard);
    return this.leaderboard;
  }


}
