const {User} = require('../database/db')


// Trae todos los registros
const getUsers = async () => {
    
    const user = await User.findAll()
    
    return user
}

// Trae todos los dias viernes
const getUsersByDayViernes = async () => {
    
    const response = await User.findAll({
        where: {
          dia: 'Viernes'
        }
    });

    return response
};
  
const getUsersByDaySabado = async () => {
    
    const response = await User.findAll({
        where: {
          dia: 'Sabado'
        }
    });

    return response
};

// Trae un registro por el id
const getUserById = async (id) => {
    
    const user = await User.findByPk(id)

    return user
}

// Crea un registro
const postUser = async (data) => {
    
    const { name, lastName, number, dia, hora } = data;
    
    const user = await User.create({ name, lastName, number, dia, hora })
    
    return user
}

// Elimina un registro por el id
const deleteUser = async (id) => {
    
    const model = await User.findByPk(id)
    await model.destroy()

    return {deleted: true}
}


module.exports = {
    getUsers,
    getUsersByDayViernes,
    getUsersByDaySabado,
    getUserById,
    postUser,
    deleteUser
};