import {pool} from '../db.js'

export const getHuespedes = async(req,res) => {
    try{
        
         const [rows] = await pool.query('SELECT * FROM Certificados')
         res.json(rows)
       
    } catch (error) {
        return res.status(500).json({
            message: 'ALGO ESTA MAL CON EL SERVIDOR O LA BASE DE DATOS'
        })

    }





   
   


}

export const getHuesped = async (req, res) =>{
    
   try {
    const [rows] = await pool.query('SELECT * FROM Certificados WHERE id = ?',[req.params.id])
   if(rows.length <= 0) return res.status(404).json({

    message: 'PASAJERO NO ENCONTRADO'

   })
    res.send(rows[0])
    
   } catch (error) {
    return res.status(500).json({
        message: 'ALGO ESTA MAL CON EL SERVIDOR O LA BASE DE DATOS'
    })
    
   }
}


export const postHuespedes = async (req,res) => {
    try {
        const {id,dispositivo,patente,rut,fecha_vencimiento} = req.body
   const [rows] = await pool.query('INSERT INTO Certificados (id,dispositivo,patente,rut,fecha_vencimiento) VALUES (?,?, ?, ?, ?)', [id,dispositivo,patente,rut,fecha_vencimiento])
    
    res.send({
       
        id,dispositivo,patente,rut,fecha_vencimiento
       
    })
        
    } catch (error) {
        return res.status(500).json({
            message: 'ALGO ESTA MAL CON EL SERVIDOR O LA BASE DE DATOS'
        })
    }
}


export const putHuespedes = async(req,res) => {
    const {rut} = req.params
    const {dispositivo,patente,fecha_vencimiento} = req.body
    const [result] = await pool.query('UPDATE Certificados SET dispositivo = ?, patente = ?, rut= ?, fecha_vencimiento = ? WHERE rut = ?', [dispositivo,patente,fecha_vencimiento])
    console.log(result)
    
    if (result.affectedRows === 0) return res.status(404).json  ({
        message : 'Employee not found'
    })

    const [rows] = await pool.query('SELECT * FROM Certificados WHERE rut = ?', [rut])

    res.json(rows[0])


}



export const deleteHuesped = async(req,res) => {

  try {
    const [result]=  await pool.query('DELETE FROM Certificados WHERE id = ?',[req.params.id])

  if(result.affectedRows <= 0) return res.status(404).json({
    message: 'Employee not found'
  })

  console.log(result)
  res.sendStatus(204)
    
  } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })


  }


}

