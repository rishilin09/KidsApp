import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaderboardService } from '../leaderboard.service';
import { Animal, Answers } from '../interfaces';
import { Leaderboard } from '../interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'Practice.page.html',
  styleUrls: ['Practice.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, RouterModule]
})

export class PracticePage {

  imgSrc: String = './assets/svg/animals/';

  animals: Animal[] = [
    { name: 'Tiger', letters: ['T', 'I', 'G', 'E', 'R'], img: this.imgSrc + 'tiger.svg' },
    { name: 'Elephant', letters: ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T'], img: this.imgSrc + 'elephant.svg' },
    { name: 'Giraffe', letters: ['G', 'I', 'R', 'A', 'F', 'F', 'E'], img: this.imgSrc + 'giraffe.svg' },
    { name: 'Lion', letters: ['L', 'I', 'O', 'N'], img: this.imgSrc + 'lion.svg' },
    { name: 'Panda', letters: ['P', 'A', 'N', 'D', 'A'], img: this.imgSrc + 'panda.svg' },
    { name: 'Fox', letters: ['F', 'O', 'X'], img: this.imgSrc + 'fox.svg' },
  ];

  currentAnimal: Animal = {} as Animal;
  answerList: Answers[] = [];
  selectedString: String = "";
  score: number = 0;
  selectedButtons: string[] = [];
  letterLen: any;
  selectedltrLen: number = 0;
  feedbackMsg: String = "";
  errorMsg: String = "";
  showError: boolean = false;
  showFeedback: boolean = false;
  showScore: boolean = false;


  constructor(private leadServ: LeaderboardService) { }

  ionViewDidEnter() {
    this.startQuiz();
  }

  startQuiz() {
    this.animals = this.shuffleQuestions(this.animals);
    this.animals.forEach((animal) => {
      this.shuffleArray(animal.letters);
    });
    this.currentAnimal = this.animals[0];
  }

  shuffleQuestions(animals: Animal[]) {
    let currentIndex = animals.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = animals[currentIndex];
      animals[currentIndex] = animals[randomIndex];
      animals[randomIndex] = temporaryValue;
    }
    return animals;
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  isSelectedButton(letter: string): boolean {
    this.selectedltrLen = this.selectedButtons.filter((currentEle) => currentEle == letter).length;
    this.letterLen = this.currentAnimal?.letters.filter((currentEle) => currentEle == letter).length;
    this.showError = false;
    if (this.selectedButtons.includes(letter) && this.letterLen == this.selectedltrLen) {

      return true;
    }
    return false;
  }

  toggleButtonSelection(letter: string) {
    if (this.isSelectedButton(letter)) {
      // Button is already selected, so remove it from the selected buttons array and remove the letter from the selected string
      this.selectedButtons = this.selectedButtons.filter(btn => btn !== letter);
      this.selectedString = this.selectedString.replace(letter, '');
    } else {
      // Button is not selected, so add it to the selected buttons array and add the letter to the selected string
      this.selectedButtons.push(letter);
      this.selectedString += letter;
    }
  }

  checkAnswer() {
    // const enteredLetters = Object.values(this.letterInput).join('');
    if (this.selectedString.length == this.currentAnimal?.name.length) {
      if (this.selectedString === this.currentAnimal?.name.toUpperCase()) {
        this.feedbackMsg = "Correct answer!! It is an " + this.currentAnimal?.name;
        this.score += 20;
      }
      else {
        this.feedbackMsg = "Incorrect answer!! It is an " + this.currentAnimal?.name;
      }
      this.answerList.push({
        name: this.currentAnimal?.name,
        selected: this.selectedString
      });
      this.showFeedback = true;
    }
    else {
      this.errorMsg = "Please selected all the alphabets!!";
      this.showError = true;
    }
  }

  addToSelectedString(letter: string) {
    this.selectedString += letter;
  }

  nextAnimal() {
    const currentIndex = this.animals.indexOf(this.currentAnimal);
    if (currentIndex === this.animals.length - 1) {
      this.showScore = true;
      this.leadServ.addLeaderBoard({
        desc: `You answered ${this.score / 20} out of ${this.animals.length} questions correctly.`,
        date: new Date(),
        answers: this.answerList
      } as Leaderboard);
    } else {
      this.currentAnimal = this.animals[currentIndex + 1];
      this.showFeedback = false;
      this.showError = false;
      this.selectedString = "";
      this.selectedButtons = [];
    }
  }

  restartQuiz() {
    this.showScore = false;
    this.showFeedback = false;
    this.showError = false;
    this.selectedString = "";
    this.selectedButtons = [];
    this.answerList = [];
    this.startQuiz();
  }


}