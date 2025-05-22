import { db } from '../config/db.js';

export const getproductos = (callback) => {
    db.query(`select * from productos`, callback);
};
export const addproducto = (cliente, callback) => {
    db.query(`insert into productos set ?`, producto, callback);
};