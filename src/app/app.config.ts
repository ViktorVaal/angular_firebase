import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "danotes-fa25c", "appId": "1:545747763194:web:642efdd618fc94ad356e43", "storageBucket": "danotes-fa25c.firebasestorage.app", "apiKey": "AIzaSyD90cDJ3VTHBbly1J8x2KWKC8UksPhExSA", "authDomain": "danotes-fa25c.firebaseapp.com", "messagingSenderId": "545747763194" }))), 
    importProvidersFrom(provideFirestore(() => getFirestore()))]
};
