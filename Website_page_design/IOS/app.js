const ustpen = document.querySelector("#ustpen");
let altpen = document.querySelector("#altpen");
const button = document.querySelectorAll(".button");


button[0].addEventListener("click", () => {
  ustpen.value = "";
    altpen.value = 0;
});

button[1].addEventListener("click", () => {
  altpen.value *= (-1);
});

button[2].addEventListener("click", () => {
  altpen.value = altpen.value.substring(0, altpen.value.length - 1);
});


// button[2].addEventListener("click", () => {
//   ustpen.value =  "√ " + altpen.value + " =";
//     altpen.value = ustpen.value.split(" ")[1] ** (0.5);
// });

button[3].addEventListener("click", () => {
    if (ustpen.value == "" ) {
      ustpen.value = altpen.value + " /";
    } else {
      if (ustpen.value.includes("=")) {
        ustpen.value = altpen.value + " /";
      } else if (ustpen.value.includes("/") && altpen.value != "") {
        ustpen.value = ustpen.value.split(" ")[0] / altpen.value + " /";
      } else {
        ustpen.value = ustpen.value.slice(0, -2) + " /";
      }
    }
    altpen.value = "";
  });

  button[7].addEventListener("click", () => {
    if (ustpen.value == "" ) {
      ustpen.value = altpen.value + " *";
    } else {
      if (ustpen.value.includes("=")) {
        ustpen.value = altpen.value + " *";
      } else if (ustpen.value.includes("*") && altpen.value != "") {
        ustpen.value = ustpen.value.split(" ")[0] * altpen.value + " *";
      } else {
        ustpen.value = ustpen.value.slice(0, -2) + " *";
      }
    }
    altpen.value = "";
  });

  button[11].addEventListener("click", () => {
    if (ustpen.value == "" ) {
      ustpen.value = altpen.value + " -";
    } else {
      if (ustpen.value.includes("=")) {
        ustpen.value = altpen.value + " -";
      } else if (ustpen.value.includes("-") && altpen.value != "") {
        ustpen.value = ustpen.value.split(" ")[0] - altpen.value + " -";
      } else {
        ustpen.value = ustpen.value.slice(0, -2) + " -";
      }
    }
    altpen.value = "";
  });
  button[15].addEventListener("click", () => {
    if (ustpen.value == "" ) {
      ustpen.value = altpen.value + " +";
    } else {
      if (ustpen.value.includes("=")) {
        ustpen.value = altpen.value + " +";
      } else if (ustpen.value.includes("+") && altpen.value != "") {
        ustpen.value = parseFloat(ustpen.value.split(" ")[0]) + parseFloat(altpen.value) + " +";
      } else {
        ustpen.value = ustpen.value.slice(0, -2) + " +";
      }
    }
    altpen.value = "";
  });

for (let i = 4; i < 17; i++) {
    button[i].addEventListener("click", () => {
      if ([4, 5, 6, 8, 9, 10, 12, 13, 14, 16].includes(i)) {
        if (altpen.value == 0 && !altpen.value.includes(".")) {
          altpen.value = button[i].textContent;
        } else {
          altpen.value += button[i].textContent;
        }
      }
    });
}

button[17].addEventListener("click", () => {
    if (altpen.value != "" && !altpen.value.includes(".")) {
      altpen.value += ".";
    }
});

button[18].addEventListener("click", () => {
    if (ustpen.value == "" || ustpen.value == altpen.value) {
      ustpen.value = altpen.value + " =";
    } else if (ustpen.value.includes("=") && ustpen.value.split(" ").length > 2) {
      ustpen.value = altpen.value;
      if (ustpen.value.includes("/")) {
        altpen.value = ustpen.value.split(" ")[0] / ustpen.value.split(" ")[2];
      } else if (ustpen.value.includes("-") && !ustpen.value.includes("+")) {
        altpen.value = ustpen.value.split(" ")[0] - ustpen.value.split(" ")[2];
      } else if (ustpen.value.includes("+")) {
        altpen.value = parseFloat(ustpen.value.split(" ")[0]) + parseFloat(ustpen.value.split(" ")[2]);
      }
    } else if (!ustpen.value.includes("=") && altpen.value != ""){
      ustpen.value = ustpen.value + " " + altpen.value + " =";
      if (ustpen.value.includes("/")) {
        altpen.value = ustpen.value.split(" ")[0] / altpen.value;
      } else if (ustpen.value.includes("*")) {
        altpen.value = ustpen.value.split(" ")[0] * altpen.value;
      } else if (ustpen.value.includes("-") && !ustpen.value.includes("+")) {
        altpen.value = ustpen.value.split(" ")[0] - altpen.value;
      } else if (ustpen.value.includes("+") || ustpen.value.includes("-")) {
        altpen.value = parseFloat(ustpen.value.split(" ")[0]) + parseFloat(altpen.value);
      }
    }
  });






