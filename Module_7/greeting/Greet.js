

function Greet(names) {
    let upperCase = true;
    for(let i = 0; i < names[0].length; i++){
        if(names[0].charAt(i) != names[0].charAt(i).toUpperCase()) {
            upperCase = false;
        }
    }

    let greeting = '';

    if(upperCase === false){
        greeting = 'Hello, ';
        for(let j; j < names.length; j++){
            if(j = names.length - 1){
                greeting += names[j];
                break;
            }
            greeting += names[i] + ', ';
        }

        return greeting;

    } else if(upperCase === true){
        greeting = 'Hello, ';
        for(let j; j < names.length; j++){
            if(j = names.length - 1){
                greeting += names[j];
                break;
            }
            greeting += names[i] + ', ';
        }

        return greeting.toUpperCase();
    }
}

module.export();