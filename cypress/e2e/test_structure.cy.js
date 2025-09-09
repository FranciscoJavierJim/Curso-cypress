let suma = (a,b) => a + b;
let resta = (a,b) => a - b;
let divide = (a,b) => a / b;
let multiplica = (a,b) => a * b;

/*
describe o context => Funcionan igual. Se usan para agrupar pruebas relacionadas. Podemos hacer varios “describe” dentro de un “describe”
it o specify => Funcionan igual. Se usan para definir casos de prueba individuales. Tienen la misma función: definir una prueba dentro de un “describe”
expect()to.equal() => Esta función se utiliza a continuación de los “it”. La usaremos para realizar afirmaciones, es decir, verificar que una conducion se
                      cumpla durante una prueba.
*/	

describe('Pruebas unitarias para nuestra aplicacion', () =>{
    describe('Matematicas con numeros positivos', ()=>{
        it('Deberia sumar numeros positivos', ()=>{
            expect(suma(1,2)).to.equal(3);
        });
        it('Deberia restar numeros positivos', ()=>{
            expect(resta(4,2)).to.equal(2);
        });
        it('Deberia dividir numeros positivos', ()=>{
            expect(divide(4,1)).to.equal(4);
        });
        it('Deberia multiplicar numeros positivos', ()=>{
            expect(multiplica(2,3)).to.equal(6);
        });
    });

    describe('Matematicas con numeros decimales', ()=>{
         it('Deberia sumar numeros decimales', ()=>{
            expect(suma(5.1,2.4)).to.equal(7.5);
        });
        it('Deberia restar numeros decimales', ()=>{
            expect(resta(3.5,1.2)).to.equal(2.3);
        });
    });
 })