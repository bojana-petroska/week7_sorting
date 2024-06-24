console.log('bo')

const hashOutput = document.getElementById('hash-output');
const passwordInput = document.getElementById('password');

function simpleHash(string) {
    let hash = 0;

    for (let char of string) {
       hash +=  (hash * 37) + char.charCodeAt(0);
    }
    return hash;
}

// function simpleHash(string) {
//     let hash = '';

//     for (let char of string) {
//        hash += `${String.fromCharCode(char.charCodeAt(0))} ` + '';
//     }
//     return hash;
// }

const generateHash = () => {
    const password = passwordInput.value;
    const hash = simpleHash(password);
    hashOutput.innerHTML = `Hash: ${hash}`;
}