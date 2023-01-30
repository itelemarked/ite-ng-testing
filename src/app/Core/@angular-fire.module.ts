import { NgModule } from "@angular/core";

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';



const firebaseConfig = {
  projectId: 'ite-testing',
  appId: '1:981908333776:web:3bdfb5da23e9c4946eead5',
  databaseURL: 'https://ite-testing-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: 'ite-testing.appspot.com',
  apiKey: 'AIzaSyAn5dyub3Tpe2vshhhOj2NgPhYid6fe8BY',
  authDomain: 'ite-testing.firebaseapp.com',
  messagingSenderId: '981908333776',
};

@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
  ]
})
export class AngularFireModule {}
