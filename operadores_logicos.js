'use strict'

let numero1;
let numero2;
let numero3;
let operador;
let resultado;

function limpar() {
    document.querySelector('#numero1').value = '';
    document.querySelector('#numero2').value = '';
    document.querySelector('#numero3').value = '';
    document.querySelector('#slcOperador').value = '';
}

function verificar() {

    numero1 = document.querySelector('#numero1').value;
    numero2 = document.querySelector('#numero2').value;
    numero3 = document.querySelector('#numero3').value;
    operador = document.querySelector('#slcOperador').value;

    if (!(testarNumeros())) {
        // AÇÃO SE NÃO FOREM DIGITADOS NÚMEROS VÁLIDOS
        return false;

    } else {
        numero1 = parent(numero1);
        numero2 = parent(numero2);
        numero3 = parent(numero3);

        if (operador == 'or') {
            // AÇÃO DO OPERADOR LÓGICO 'OR'
            operadorOr();
        } else {
            // AÇÃO DO OPERADOR LÓGICO 'AND'
            operadorAnd();
        }
        document.querySelector('#resultado').innerHTML = resultado
    }
}

// FUNÇÃO DE TEST SE NÃO SÃO VAZIOS
function testarNumeros() {
    if (numero1 == '') {
        document.querySelector('#numero1').focus();
        return false;

    } else if (numero2 == '') {
        document.querySelector('#numero2').focus();
        return false;

    } else if (numero3 == '') {
        document.querySelector('#numero3').focus();
        return false;

    } else {
        return true;
    }
}

// FUNÇÃO DO OPERADOR OR
function operadorOr() {
    if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3) {
        resultado = 'PELO MENOS DOIS DOS TRÊS NÚMEROS SÃO IGUAIS!';

    } else {
        resultado = 'OS NÚMEROS SÃO DIFERENTES!';
    }
}

// FUNÇÃO OPERADOR AND
function operadorAnd() {
    if (numero1 == numero2 && numero1 == numero3 && numero2 == numero3) {
        resultado = 'OS NÚMEROS SÃO IGUAIS!';

    } else {
        resultado = 'PELO MENOS UM DOS NÚMEROS É DIFERENTE!';
    }
}