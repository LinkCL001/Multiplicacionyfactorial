const num = prompt("ingrese un numero del 1 al 20");
var result = 0;

let verificar = (num) => {
  if (num >= 1 && num <= 20) {
    alert("numero dentro de rango");
    function factorial(x) {
      if (x > 1) {
        return x * factorial(x - 1);
      } else {
        return x;
      }
    }
    for (i = 1; i <= 20; i++) {
      var resultado = num * i;
      document.write(num + " x " + i + " Es Igual a:" + resultado + "<br>");
    }

    document.write(`el factorial del numero ${num} es: ${factorial(num)}`);
  } else {
    alert(`numero ${num} fuera de rango `);
  }
};
verificar(num);

