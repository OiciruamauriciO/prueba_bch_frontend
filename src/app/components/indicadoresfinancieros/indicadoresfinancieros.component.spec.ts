import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicadoresfinancierosComponent } from './indicadoresfinancieros.component';
import { IndicadoresFinancierosService } from '../../services/indicadores-financieros.service';
import { AppComponent } from '../../app.component';

describe('IndicadoresfinancierosComponent', () => {

  let componentApp: AppComponent;
  let fixtureApp: ComponentFixture<AppComponent>;
  let componentIndicadoresFinancieros: IndicadoresfinancierosComponent;
  let fixtureIndicadoresFinancieros: ComponentFixture<IndicadoresfinancierosComponent>;
  let service: IndicadoresFinancierosService;

  
  beforeEach( () => {
    
    TestBed.configureTestingModule({
      imports: [
        IndicadoresfinancierosComponent,
        AppComponent,
      ],
      providers: [
        IndicadoresFinancierosService,
      ]
    })
    .compileComponents();

    fixtureApp = TestBed.createComponent(AppComponent);
    componentApp = fixtureApp.componentInstance;
    fixtureApp.detectChanges();
    
    fixtureIndicadoresFinancieros = TestBed.createComponent(IndicadoresfinancierosComponent);
    componentIndicadoresFinancieros = fixtureIndicadoresFinancieros.componentInstance;
    fixtureIndicadoresFinancieros.detectChanges();

  });

  it('should create the component AppComponent', () => {
    const fixtureApp = TestBed.createComponent(AppComponent);
    const componentApp = fixtureApp.debugElement.componentInstance;
    expect(componentApp).toBeTruthy();
  });

  it(`should have as title 'prueba-bch-frontend in AppComponent'`, () => {
    const fixtureApp = TestBed.createComponent(AppComponent);
    const componentApp = fixtureApp.debugElement.componentInstance;
    expect(componentApp.title).toEqual('prueba-bch-frontend');
  });

  it('should render title in a h1 tag on AppComponent', () => {
    const fixtureApp = TestBed.createComponent(AppComponent);
    fixtureApp.detectChanges();
    const compiled = fixtureApp.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello, prueba-bch-frontend');
  });

  it('should create the component IndicadoresFinancierosComponent', () => {
    const fixtureIndicadoresFinancieros = TestBed.createComponent(IndicadoresfinancierosComponent);
    const componentIndicadoresFinancieros = fixtureIndicadoresFinancieros.debugElement.componentInstance;
    expect(componentIndicadoresFinancieros).toBeTruthy();
  });
  
});
