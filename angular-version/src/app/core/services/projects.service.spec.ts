import { TestBed } from '@angular/core/testing';

import { ProjectTemplateService } from './projects.service';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectTemplateService = TestBed.get(ProjectTemplateService);
    expect(service).toBeTruthy();
  });
});
