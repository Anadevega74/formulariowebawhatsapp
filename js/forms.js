document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "699701100";
  
    const cliente = document.querySelector("#cliente").value;
    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const empleado = document.querySelector("#empleado").value;
    const servicio = document.querySelector("#servicio").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_MI NEGOCIO_*%0A
          *Reservas*%0A%0A
          *¿Cómo te llamas?
          ${cliente}%0A
          *¿Cuándo quieres reservar?*%0A
          ${fecha}%0A
          *¿A qué hora quieres reservar?*%0A
          ${hora}%0A
          *Empleado de preferencia*%0A
          ${empleado}%0A
          *¿Qué servicio quieres realizar?*%0A
          ${servicio}`;
  
    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });