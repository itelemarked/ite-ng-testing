import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Home
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>Counter (from database): {{ dbCounter }}</p>
      <ion-button (click)="decrementDb()">-</ion-button>
      <ion-button (click)="incrementDb()">+</ion-button>

      <p>Counter (from firestore): {{ fsCounter }}</p>
      <ion-button (click)="decrementFs()">-</ion-button>
      <ion-button (click)="incrementFs()">+</ion-button>
    </ion-content>
  `,
  styles: [``]
})
export class HomeComponent {

  dbCounter: number | null = 10;
  fsCounter: number | null = 20;

  incrementDb() {
    if (this.dbCounter) {
      this.dbCounter++
    }
  }

  decrementDb() {
    if (this.dbCounter) {
      this.dbCounter--
    }
  }

  incrementFs() {
    if (this.fsCounter) {
      this.fsCounter++
    }
  }

  decrementFs() {
    if (this.fsCounter) {
      this.fsCounter--
    }
  }

}
