const productos = [
  { id: 1, nombre: "Yerba", precio: 500, img: "./img/yerba.jpg", idCat: "1" },
  { id: 2, nombre: "Fideos", precio: 200, img: "./img/fideos.jpg", idCat: "1" },
  { id: 3, nombre: "Arroz", precio: 300, img: "./img/arroz.jpg", idCat: "1" },
  { id: 4, nombre: "Aceite", precio: 900, img: "./img/aceite.jpg", idCat: "2" },
  { id: 5, nombre: "Yerba", precio: 500, img: "./img/yerba.jpg", idCat: "2" },
  { id: 6, nombre: "Fideos", precio: 200, img: "./img/fideos.jpg", idCat: "2" },
  { id: 7, nombre: "Arroz", precio: 300, img: "./img/arroz.jpg", idCat: "3" },
  { id: 8, nombre: "Aceite", precio: 900, img: "./img/aceite.jpg", idCat: "3" },
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
    }, 500);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (item) => item.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
