import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' , },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Bobba' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'Dr. FreeMan' },
      { id: 17, name: 'IshakMan', protection_from_holy_damage: 24,
        protection_from_darkness: 32, the_level_of_insight: 41, power: "PPPPOWERRANGEEEERS",
        isLegendary: true, isIshak: true},
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Leonardo' }
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


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/