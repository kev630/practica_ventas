import { 
    obtenerVentas as obtenerVentasmodel,
    registrarVenta as registrarVentamodel,
} from '../models/venta.model';

export const registrarVenta = (req, res)=>{
    const venta = req.body;
    if (!venta.id_cliente || !venta.id_producto || !venta.cantidad ){
        return res.status(400).json({message: 'Faltan campos requeridos '});
    }
    registrarVentamodel(venta, (err, result) => {
    if (err) return res.status(500) .json ({ error: err. message });
    res.status (201).json({mensaje : 'Venta registrada con exito'});
    })
};
export const obtenerVentas = (req, res) => {
    obtenerVentasmodel((err, ventas ) =>{
        if (err) return res.status(500).json({ error: err.message });
    res
});
};