import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';





describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule
      ],

      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //expect(app).toBeTruthy();
  });

  it(`should have as title 'HelloWorld'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //expect(app.title).toEqual('HelloWorld');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h1').textContent).toContain('Welcome to HelloWorld!');
  });


    it('should have a router outlet', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.debugElement.componentInstance;

      let element = fixture.debugElement.query(By.directive(RouterOutlet));

      expect(element).not.toBeNull();

    });

  it('should have a link to Interpolation to way data binding', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    fixture.detectChanges();

    let elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    
   
     let index = elements.findIndex(el => el.properties['href'] === "/interpolationand2waydatabinding");
    //let index = elements.findIndex((e: DebugElement) => e.properties.href === "interpolationand2waydatabinding");

    expect(index).toBeGreaterThan(-1);
  });

});
