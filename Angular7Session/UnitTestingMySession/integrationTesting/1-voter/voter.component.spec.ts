import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';


describe('VoterComponent', () => {

  let component : VoterComponent;
  let fixture : ComponentFixture<VoterComponent>;

  beforeEach(() => {

    /**
     * In integration tests, we dont create component using new, new is for writing unit tests
     * In integration testing, we need to tell angular that components needs to be created 
     * 
     */

     TestBed.configureTestingModule({
       declarations:[VoterComponent]
     });

     /**
      * With component fixure we get the access to both, the component and its template
      */
      fixture = TestBed.createComponent(VoterComponent);
      component = fixture.componentInstance;

      /**
       * root of the template 
       */
      //fixture.nativeElement

      /**
       * It also has debugElement, which is the wrapper over nativeElement
       * this provides some usefull methods to query the html elements
       */
       //fixture.debugElement;

       

  });

  it('', () => {
  });
});
