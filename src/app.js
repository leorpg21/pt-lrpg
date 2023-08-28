const express = require('express');
const database = require('./database');
const cors = require('cors');



const app = express();
app.use(cors());


const PUERTO = process.env.PORT || 3000;




app.listen(PUERTO, () => {
     console.log(`Server on port ${PUERTO}`);
});

app.get('/productos',  async (req, res) => {
     const conexion = await database.getConnection();
     const result = await conexion.query(`
     SELECT p.producto_id, c.categoria, p.nombre, s.silueta, e.equipo, p.url_img, p.precio 
	FROM  producto p
	LEFT JOIN categoria c ON p.categoria = c.categoria_id
	LEFT JOIN silueta s ON p.silueta = s.silueta_id
	LEFT JOIN equipo e ON p.equipo = e.equipo_id`)
     console.log(result);
     res.json(result);
   });
