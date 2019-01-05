import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Home Integration Testing', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    // beforeEach(async(() => {
    //   TestBed.configureTestingModule({
    //     declarations: [GreeterIntegrationTestingComponent]
    //   })
    //     .compileComponents();
    // }));

    beforeEach(() => {

        /**
         * In the first beforeEach, we are telling angular to configure module
         * The components template is in a different file, we need to instruct angular to 
         * compile the template as well as stylesheet with the component implementation.
         * the above compileComponents() so we have. All the components with the declaration array,
         * need to be compiled.
         * 
         * As we are using webpack, we already have components compiled template in 
         * one js file, so no need to explicitely load the files with asynch
         */


        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [HttpClientTestingModule]
        });



        fixture = TestBed.createComponent(HomeComponent);

        component = fixture.componentInstance;

        component.totalVotes = 20;

        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render total votes to 20', () => {
        
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.vote-count'));
        /** de : for debug element */

        let el: HTMLElement = de.nativeElement;

        let value = el.innerText;

        expect(+value).toBe(20);
    });

    it('should apply class highlighted when user upvoted', () => {
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.vote-count'));
        let el : HTMLElement = de.nativeElement;

        expect(el.classList).toContain('highlighted');
    });


    it('should increase the total votes when clicking on upvote button', () => {
        let button = fixture.debugElement.query(By.css('.upVoteClass'));
        button.triggerEventHandler('click', null);

        expect( component.totalVotes).toBe(21);
    });


});
