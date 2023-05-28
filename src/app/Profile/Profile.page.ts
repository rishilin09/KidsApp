import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './Profile.page.html',
  styleUrls: ['./Profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage {

  constructor() { }

  name: string = "Agastya Pandya";
  details = [
    {
      key: 'Age',
      value: "8"
    },
    {
      key: 'Favourite Color',
      value: "Orange"
    },
    {
      key: 'Favourite Animal',
      value: "Dog"
    },
    {
      key: 'Favourite Fruit',
      value: "Mango"
    },
  ];


}
