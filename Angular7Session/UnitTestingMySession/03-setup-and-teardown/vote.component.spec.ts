import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component : VoteComponent;

  /* In jasmin we have, before each test, beforeEach function will be called, 
   * this function is used to 
   * initialize the objects
   * As the set up
   */ 
  beforeEach(() => {
    component = new VoteComponent();
  });
 
  
  /* This function also gets called before each test, 
   * here you can clean up the objects
   * tear down
   */
  afterEach(() => {
     
     
  });

  
  /* This will be called once before all the tests,
   *
   */
  beforeAll(() => {

  });


  /* This will be called once after all the tests,
   *
   */
  afterAll(() => {
    
  });

  

  it('should increament vote when upVoted', () => {
    //Arrange : Creating system under test

    //Act : Calling a method or function
    component.upVote();

    //Assert
    expect(component.totalVotes).toBe(1);

  });
  
  
  it('should decreament vote when downVoted', () => {
    //Arrange : Creating system under test

    //Act : Calling a method or function
    component.downVote();

    //Assert
    expect(component.totalVotes).toBe(-1);

  });

  it('should d', () => {
  });
});