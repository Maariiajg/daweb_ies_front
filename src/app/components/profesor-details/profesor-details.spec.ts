import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorDetails } from './profesor-details';

describe('ProfesorDetails', () => {
  let component: ProfesorDetails;
  let fixture: ComponentFixture<ProfesorDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesorDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
