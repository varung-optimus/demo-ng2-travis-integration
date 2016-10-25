import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let menuItems = [
      {name: 'New..'},
      {name: 'Trends'},
      {name: 'Terminals'},
      {name: 'Card Bases'}
    ];

    return {menuItems};
  }

}
