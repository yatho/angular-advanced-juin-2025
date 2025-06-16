import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { postResolver } from './post-resolver';
import { PostData } from './services/post';

describe('postResolver', () => {
  const executeResolver: ResolveFn<PostData> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => postResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
