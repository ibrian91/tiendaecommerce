import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { addDoc, collection, updateDoc, doc, getDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total, totalCantidad } =
    useContext(CarritoContext);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completar todos los campos");
      return; // el return de aca es para no enviar el formulario
    }

    // validamos que los campos del email coincidan

    if (email !== emailConfirmacion) {
      setError("El mail ingresado no coincide");
      return;
    }

    // creamos un objeto con todos los datos que tienen la compra

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    // actualizar stock de productos y ademas generar una orden de compra

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);

        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docref) => {
            setOrdenId(docref.id);
            vaciarCarrito();
          })
          .catch((error) => {
            setError("Se produjo un error al crear la orden");
          });
      })
      .catch((error) => {
        setError("No se pudo actualizar el stock");
      });
  };

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p> {producto.item.precio} </p>
            <hr />
          </div>
        ))}

        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Telefono</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="">Email Confirmacion</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit"> Confirmar Compra </button>

        {ordenId && (
          <strong>
            Gracias por la compra!! Tu numero de orden es {ordenId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
