import { compute } from './compute';

describe('compute', ()=>{

    it('should be zero if negative value provided',()=>{
        const result = compute(-786);

        expect(result).toBe(0);
    });
   
    it('should increament the number if input is positive',()=>{
        const result = compute(1);

        expect(result).toBe(2);
    });

    


})