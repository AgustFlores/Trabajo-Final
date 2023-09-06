var mayor = prompt("Ingresa tu edad");

if (mayor >= 18) {
    alert("Bienvenidos a nuestro sitio")
} else {
    alert("Atención, estás entrando a un sitio para adultos")
}



window.onbeforeunload = function(e) {
return 'Please press the Logout button to logout.';
};

  