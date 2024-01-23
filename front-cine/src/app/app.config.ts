import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"proyecto-cine-2b39d","appId":"1:513667850378:web:5c3ba2cd9cc4678c6e8d73","storageBucket":"proyecto-cine-2b39d.appspot.com", "apiKey":"AIzaSyBtgW4KbHNr7RS1EGW75ZWckqt_RM5qTjw","authDomain":"proyecto-cine-2b39d.firebaseapp.com","messagingSenderId":"513667850378"}))), importProvidersFrom(provideStorage(() => getStorage()))]
};
