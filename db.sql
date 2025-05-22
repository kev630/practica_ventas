CREATE DATABASE IF NOT EXISTS clientes_db;
USE clientes_db;
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20)
);
CREATE DATABASE IF NOT EXISTS productos_db;
USE productos_db;
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreproducto VARCHAR(100),
    stock VARCHAR(100),
    valor INT
);
CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);