import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresfinancierosComponent } from './indicadoresfinancieros.component';

describe('IndicadoresfinancierosComponent', () => {
  let component: IndicadoresfinancierosComponent;
  let fixture: ComponentFixture<IndicadoresfinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadoresfinancierosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndicadoresfinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
