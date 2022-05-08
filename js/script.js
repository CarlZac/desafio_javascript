let userName = prompt('Ingresá tu nombre');
let userAge = parseInt(prompt('Ingresá tu edad'));
let userOption = '';

do {
    userOption = prompt(userName + ' elegí una opción:\n1- Tu edad en 10 años.\n2- Tu edad hace 5 años.\n3- Cuánto te falta para los 50 años.\n4- Escribe ESC para salir.');
    if (userOption != '1' && userOption != '2' && userOption != '3' && userOption != 'ESC'){
        alert('Entrada Inválida');
        continue;
    }
    switch (userOption){
        case '1':
            let ageInTen = userAge + 10;
            alert('Tu edad en 10 años sería ' + ageInTen);
            break;
        case '2':
            let ageFive = userAge -5;
            alert('Tu edad hace 5 años era ' + ageFive);
            break;
        case '3':
            if (userAge <= 50){
                let ageInFifty = 50 - userAge;
                alert('Para que cumplas los 50 faltan ' + ageInFifty);
            }else{
                let agePastFifty = userAge - 50;
                alert('Para que cumplas los 50 te pasaste por ' + agePastFifty + ' años.');
            }
            break;
        default:
            break;
    }
} while (userOption != 'ESC');

alert('Gracias por "jugar" con este invento raro.\nSaludos!')