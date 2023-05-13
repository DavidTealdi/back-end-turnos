const {Login} = require('../database/db')

const getLoginUser = async (user, password) => {

    const response = await Login.findAll({
        where: {
          user: user,
          password: password
        }
    });

    return response
}


const postUser = async (data) => {
    
    const { user, password } = data;
    
    const newuser = await Login.create({ user, password })
    
    return newuser
}


module.exports = {
    getLoginUser,
    postUser
}