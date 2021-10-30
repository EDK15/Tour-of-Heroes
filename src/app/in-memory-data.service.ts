import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'EDK' },
      { id: 2, name: 'Saliou' },
      { id: 3, name: 'Moussa' },
      { id: 4, name: 'Khassi' },
      { id: 5, name: 'Soda' },
      { id: 6, name: 'Ousmane' },
      { id: 7, name: 'Ousseynou' },
      { id: 8, name: 'Khadim' },
      { id: 9, name: 'Dimé' },
      { id: 10, name: 'Tapha' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
