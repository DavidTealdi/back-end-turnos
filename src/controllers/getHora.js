const {User} = require('../database/db')

const getHora = async () => {
    
    const hora = await User.findAll({
        attributes: ['dia', 'hora']
    })
    
    return hora
}


module.exports = {
    getHora
}