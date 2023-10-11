import {sum} from '../core/sum'

test('Suma dos nombres', ()=> {
    //Arrenge, es la preparación de lo que se va a usar.
    const a = 1;
    const b = 2;
    const expected = 3;

    //Act, es la ejecución de la funcion.
    const result = sum(a,b)
    //Assert, esperar que el resultado sea igual al expected.
    expect(result).toBe(expected);
});