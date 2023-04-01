const greet = require('./Greet');

describe('Greet', () => {

    it('should greet Anna', () => {
        const names = ['Anna'];
        expect(Greet(names)).toBeCalled('Hello, Anna');
    });

    it('should shout at Anna', () => {
        const names = ['ANNA'];
        expect(Greet(names)).toBeCalled('HELLO ANNA!');
    });

    it('should greet two people', () => {
        const names = ['Anna', 'Johnny'];
        expect(Greet(names)).toBeCalled('Hello, Anna, Johnny');
    });

    it('should greet any number of people', () => {
        const names = ['Anna', 'Johnny', 'Rachel', 'Phillip', 'Remmy'];
        expect(Greet(names)).toBeCalled('Hello, Anna, Johnny, Rachel, Phillip, Remmy');
    });
});