import { getCurrencies } from './getCurrencies';


describe('getCurrencies',()=>{

    it('should return the supported currencies', ()=>{
        //Arrange: Creating system under test
        const result= getCurrencies();

        //Act
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});