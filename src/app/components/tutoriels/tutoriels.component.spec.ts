import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorielsComponent } from './tutoriels.component';

describe('TutorielsComponent', () => {
  let component: TutorielsComponent;
  let fixture: ComponentFixture<TutorielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
