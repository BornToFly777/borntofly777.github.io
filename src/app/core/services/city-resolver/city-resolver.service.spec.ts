/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityResolverService } from './city-resolver.service';

describe('CityResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityResolverService]
    });
  });

  it('should ...', inject([CityResolverService], (service: CityResolverService) => {
    expect(service).toBeTruthy();
  }));
});
