import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './SplashScreen.page.html',
  styleUrls: ['./SplashScreen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class SplashScreenPage {

  constructor(private router: Router) { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigateByUrl('/tabs/Practice');
    }, 5000); // Navigate to the tabs page after a delay of 5 seconds
  }
}

