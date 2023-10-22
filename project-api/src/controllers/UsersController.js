const AppError = require('../utils/AppError')




class UsersController {
/**
 * Métodos utilizados em controllers:
 * index - GET para listar vários registros.
 * show - GET para exibir um registro específico.
 * create - POST para criar um resgistro.
 * update - PUT para atualizar um registro.
 * delete - DELETE para remover um registro.
 */
  create(request, response){
    const {name, email, password} = request.body
    
    if(!name){
      throw new AppError('Nome é obrigatório!')
    }

    response.status(201).json({name, email, password})
  }

}

module.exports = UsersController