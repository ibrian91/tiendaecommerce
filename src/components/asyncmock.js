const productos = [
  {
    id: "1",
    nombre: "Silla Nordica",
    precio: 500,
    img: "../img/silla1.png",
    idCat: "1",
  },
  {
    id: "2",
    nombre: "Silla Paradiso",
    precio: 200,
    img: "../img/sillados.jpg",
    idCat: "1",
  },
  {
    id: "3",
    nombre: "Silla Lenga Fueguina",
    precio: 300,
    img: "../img/silla3.jpg",
    idCat: "1",
  },
  {
    id: "4",
    nombre: "Mesa Cromada Vidrio",
    precio: 900,
    img: "../img/mesa1.jpg",
    idCat: "2",
  },
  {
    id: "5",
    nombre: "Mesa Comedor Oslo",
    precio: 900,
    img: "../img/mesa2.jpg",
    idCat: "2",
  },
  {
    id: "6",
    nombre: "Mesa Tolix Madera",
    precio: 900,
    img: "../img/mesa3.jpg",
    idCat: "2",
  },
  {
    id: "7",
    nombre: "Mesa Eames",
    precio: 900,
    img: "../img/mesa4.jpg",
    idCat: "2",
  },
  {
    id: "8",
    nombre: "Mesa Industrial",
    precio: 500,
    img: "../img/mesa5.jpg",
    idCat: "2",
  },
  {
    id: "9",
    nombre: "Escritorio Nordico",
    precio: 300,
    img: "../img/escritorio1.jpg",
    idCat: "3",
  },
  {
    id: "10",
    nombre: "Escritorio Recto",
    precio: 900,
    img: "../img/escritorio2.jpg",
    idCat: "3",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((item) => item.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (item) => item.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
