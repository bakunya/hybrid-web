import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  number: number = 0

  constructor() { }

  ngOnInit() {
  }

  up() {
    this.number += 1
  }

  down() {
    if(this.number < 1) return
    this.number -= 1
  }

}
