import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioStudyComponent } from './folio-study.component';

describe('FolioStudyComponent', () => {
  let component: FolioStudyComponent;
  let fixture: ComponentFixture<FolioStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolioStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolioStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
