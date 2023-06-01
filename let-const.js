var lastName = 'Luigi';
lastName = 'Mario';
console.log(lastName);

let lastName = 'Luigi';
lastName = 'Mario';
console.log(lastName);

const lastName = 'Luigi';
lastName = 'Mario';
console.log(lastName);

const nombres = () => {
    if(true) {
        var yo = 'Mario'; // function scope
        let hermano = 'Luigi'; // block scope
        const mami = 'Peach'; // block scope
    }
    console.log(yo);
    console.log(hermano);
    console.log(mami);
    }

    nombres();

 