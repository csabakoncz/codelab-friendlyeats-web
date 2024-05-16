import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"ftg-2020","appId":"1:64702379780:web:a970eb2af3cd66f4e60251","databaseURL":"https://ftg-2020.firebaseio.com","storageBucket":"ftg-2020.appspot.com","locationId":"europe-west","apiKey":"AIzaSyBeHf1AtD-ox2sTPzVUvHtpJywhUHMUmTY","authDomain":"ftg-2020.firebaseapp.com","messagingSenderId":"64702379780","measurementId":"G-E0Q5EZDDTB"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
