
// ->     || -> O -> OR
// ->     && -> Y -> AND
// ->      ! -> NO -> NOT
// ->     == -> IGUAL QUE
// ->     === -> ESTRICTAMENTE IGUAL QUE
// ->      != -> DESIGUAL
// ->       = -> OPERADOR DE ASIGNACION
// ->       < -> MENOR QUE
// ->      <= -> MENOR O IGUAL QUE
// ->       > -> MAYOR QUE
// ->      >= -> MAYOR O IGUAL QUE


const limpiarCuarto = true;
const limpiarCocina = false;

console.log(limpiarCocina || !limpiarCuarto);

console.log(5 < 6);