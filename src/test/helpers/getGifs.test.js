import { describe, expect } from '@jest/globals';
import { getGifs } from '../../helpers/getGifs';


describe('tests to getGifs fetch', () => {
     
    test('should return 15 elements', async () => {
     
        const gifs = await getGifs('One piece');
        const REQUESTSIZE = 15;
        
        expect( gifs.length ).toBe( REQUESTSIZE );
    });
    
    test('if you dont pass the prop category should return 0 elements', async () => {
     
        const gifs = await getGifs('');
        const REQUIREDSIZE = 0;
        
        expect( gifs.length ).toBe( REQUIREDSIZE );
    });
});