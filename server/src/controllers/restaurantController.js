const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tb_usuario', (err, restaurantes) => {
            if (!err) {
              res.status(200).json(restaurantes);
            } else {
              res.status(500).json({mensaje:'Error al lista los restaurantes'});
            }
        })
    })
}

controller.edit = (req, res) => {
    const { id } = req.params
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tb_usuario WHERE idusuario = ?', [id], (err, rows) => {
            if (!err) {
              res.status(200).json(rows);
            } else {
              res.status(500).json({mensaje:'Error al obtener el restaurante'});
            }
        })
    })
}

module.exports = controller