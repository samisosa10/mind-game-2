// query selector
const card = document.querySelectorAll(".card");
const start = document.querySelector(".start");
const card1 = document.getElementById(1);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
numeros = numeros.sort(() => {
  return Math.random() - 0.5;
});
console.log(numeros);

let tarjetasDestapadas = 0;
let click = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let contadorAciertos = 0;
const destapar = (id) => {
  tarjetasDestapadas++;
  click++;
  moves.innerHTML = click;
  if (tarjetasDestapadas == 1) {
    tarjeta1 = document.getElementById(id);
    primerNumero = numeros[id];
    tarjeta1.innerHTML = primerNumero;

    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    tarjeta2 = document.getElementById(id);
    segundoNumero = numeros[id];
    tarjeta2.innerHTML = segundoNumero;

    tarjeta2.disabled = true;

    if (primerNumero == segundoNumero) {
      tarjetasDestapadas = 0;

      contadorAciertos++;
      aciertos.innerHTML = contadorAciertos;
    } else {
      setTimeout(() => {
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 500);
    }
  }

  if (contadorAciertos == 8) {
    console.log("has ganado");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Has ganado. Felicitacione <3",
      showConfirmButton: true,
    }).then((win) => {
      // location.reload()
    });
  }
};

const iniciarApp = () => {
  for (let i = 0; i < card.length; i++) {
    card[i].disabled = true;
    card[i].classList.add("disabled");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

start.addEventListener("click", () => {
  cronomentro();
  start.disabled = true;
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove("disabled");
  }
});

const desbloquearCards = () => {
  for (let i = 0; i < card.length; i++) {
    card[i].disabled = false;
  }
};
const cronomentro = () => {
  desbloquearCards();
  let tiempo = 3;
  start.classList.add("disable");
  const contador = setInterval(() => {
    tiempo--;
    time.innerHTML = tiempo;
    if (tiempo == 0) {
      clearInterval(contador);
      for (let i = 0; i < card.length; i++) {
        card[i].disabled = true;
        card[i].classList.add("disabled");
      }
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Has perdido",
        showConfirmButton: true,
      }).then((resultado) => {
        if (resultado.isConfirmed) {
          // location.reload()
        }
      });
    } else if (contadorAciertos == 8) {
      time.innerHTML = "";
      tiempo = 0;
    }
  }, 1000);
};

againBtn.addEventListener("click", () => {
  location.reload();
});
