import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Alphabets, Numbers } from '../interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'Lessons.page.html',
  styleUrls: ['Lessons.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, RouterModule]
})
export class LessonsPage {

  alphabetRows: Alphabets[][];
  numRows: Numbers[][];
  imgSrc: string = "https://img.icons8.com/color/48/";
  alphabets: Alphabets[] = [
    {
      img: this.imgSrc + "a-cute.png",
      desc: "A for APPLE"
    },
    {
      img: this.imgSrc + "b-cute.png",
      desc: "B for BALL"
    },
    {
      img: this.imgSrc + "c-cute.png",
      desc: "C for CAT"
    },
    {
      img: this.imgSrc + "d-cute.png",
      desc: "D for DOG"
    },
    {
      img: this.imgSrc + "e-cute.png",
      desc: "E for ELEPHANT"
    },
    {
      img: this.imgSrc + "f-cute.png",
      desc: "F for FISH"
    },
    {
      img: this.imgSrc + "g-cute.png",
      desc: "G for GOAT"
    },
    {
      img: this.imgSrc + "h-cute.png",
      desc: "H for HAT"
    },
    {
      img: this.imgSrc + "i-cute.png",
      desc: "I for ICE"
    },
    {
      img: this.imgSrc + "j-cute.png",
      desc: "J for JAM"
    },
    {
      img: this.imgSrc + "k-cute.png",
      desc: "K for KITE"
    },
    {
      img: this.imgSrc + "l-cute.png",
      desc: "L for LAMP"
    },
    {
      img: this.imgSrc + "m-cute.png",
      desc: "M for MANGO"
    },
    {
      img: this.imgSrc + "n-cute.png",
      desc: "N for NEST"
    },
    {
      img: this.imgSrc + "o-cute.png",
      desc: "O for OWL"
    },
    {
      img: this.imgSrc + "p-cute.png",
      desc: "P for PEN"
    },
    {
      img: this.imgSrc + "q-cute.png",
      desc: "Q for QUEEN"
    },
    {
      img: this.imgSrc + "r-cute.png",
      desc: "R for ROSE"
    },
    {
      img: this.imgSrc + "s-cute.png",
      desc: "S for SNAIL"
    },
    {
      img: this.imgSrc + "t-cute.png",
      desc: "T for TRAIN"
    },
    {
      img: this.imgSrc + "u-cute.png",
      desc: "U for UMBRELLA"
    },
    {
      img: this.imgSrc + "v-cute.png",
      desc: "V for VAN"
    },
    {
      img: this.imgSrc + "w-cute.png",
      desc: "W for WHALE"
    },
    {
      img: this.imgSrc + "x-cute.png",
      desc: "X for XYLOPHONE"
    },
    {
      img: this.imgSrc + "y-cute.png",
      desc: "Y for YAK"
    },
    {
      img: this.imgSrc + "z-cute.png",
      desc: "Z for ZEBRA"
    }
  ];

  numbers: Numbers[] = [
    {
      img: this.imgSrc + "0-cute.png",
      words: "ZERO"
    },
    {
      img: this.imgSrc + "1-cute.png",
      words: "ONE"
    },
    {
      img: this.imgSrc + "2-cute.png",
      words: "TWO"
    },
    {
      img: this.imgSrc + "3-cute.png",
      words: "THREE"
    },
    {
      img: this.imgSrc + "4-cute.png",
      words: "FOUR"
    },
    {
      img: this.imgSrc + "5-cute.png",
      words: "FIVE"
    },
    {
      img: this.imgSrc + "6-cute.png",
      words: "SIX"
    },
    {
      img: this.imgSrc + "7-cute.png",
      words: "SEVEN"
    },
    {
      img: this.imgSrc + "8-cute.png",
      words: "EIGHT"
    },
    {
      img: this.imgSrc + "9-cute.png",
      words: "NINE"
    }
  ];

  currentRow: any[] = [];

  constructor() {

    this.alphabetRows = [];
    this.numRows = [];
    for (let i = 0; i < this.alphabets.length; i++) {
      this.currentRow.push(this.alphabets[i]);
      if ((i + 1) % 4 === 0) {
        this.alphabetRows.push(this.currentRow);
        this.currentRow = [];
      }
    }
    if (this.currentRow.length > 0) {
      this.alphabetRows.push(this.currentRow);
    }

    //Numbers
    this.currentRow = [];
    for (let i = 0; i < this.numbers.length; i++) {
      this.currentRow.push(this.numbers[i]);
      if ((i + 1) % 3 === 0) {
        this.numRows.push(this.currentRow);
        this.currentRow = [];
      }
    }
    if (this.currentRow.length > 0) {
      this.numRows.push(this.currentRow);
    }

  }
}
