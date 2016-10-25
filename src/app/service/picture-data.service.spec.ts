/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PictureDataService } from './picture-data.service';

describe('Service: PictureData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PictureDataService]
    });
  });

  it('should ...', inject([PictureDataService], (service: PictureDataService) => {
    expect(service).toBeTruthy();
  }));
});
