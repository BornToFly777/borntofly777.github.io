/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OptionsOverriderService } from './options-overrider.service';

describe('OptionsOverriderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionsOverriderService]
    });
  });

  it('should ...', inject([OptionsOverriderService], (service: OptionsOverriderService) => {
    expect(service).toBeTruthy();
  }));
});
