import model from '../models';

const { User } = model;

class Users {
    
    static signUp(req, res) {
        const { name, email, password } = req.body
        
        return User
        .create({
            name,
            email,
            password
        })
        .then(userData => res.status(201).send({
            success: true,
            message: 'User successfully created',
            userData
        }))
    }
}

export default Users;
