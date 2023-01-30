import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { AngularFirestore } from "@angular/fire/compat/firestore";

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

  constructor(private db: AngularFireDatabase, private fs: AngularFirestore) {
    this.db.object<number>('state/counter').valueChanges().subscribe(val => {
      if (val !== null) {
        this.dbCounter = val;
      }
    })

    this.fs.doc<{counter: number}>('stores/state').valueChanges().subscribe(val => {
      if (val !== undefined) {
        this.fsCounter = val.counter;
      }
    })
  }

  incrementDb() {
    if (this.dbCounter) {
      this.dbCounter++
      this.db.object<number>('state/counter').set(this.dbCounter)
    }
  }

  decrementDb() {
    if (this.dbCounter) {
      this.dbCounter--
      this.db.object<number>('state/counter').set(this.dbCounter)
    }
  }

  incrementFs() {
    if (this.fsCounter) {
      this.fsCounter++
      this.fs.doc<{counter: number}>('stores/state').update({counter: this.fsCounter})
    }
  }

  decrementFs() {
    if (this.fsCounter) {
      this.fsCounter--
      this.fs.doc<{counter: number}>('stores/state').update({counter: this.fsCounter})
    }
  }

}
