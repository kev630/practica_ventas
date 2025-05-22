import { addproducto, getproductos} from '../models/productoModel.js';

export const obtenerproductos= (req,res)=> {
    getproductos((err, resultados) =>{
        if (err) return req.status(500).json ({error: err.massage});
        res.json(resultados_prod);
    });
};
export const crearproductos = (req, res) => {
    const productos  = req.body;
    addproducto(productos, (err, resultado) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({mensaje: 'productos agregado', id:resultado.insertId});
    });
};