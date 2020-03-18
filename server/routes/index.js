import Users from '../controllers/user';
import Accounts from '../controllers/account'

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Sellwell API!'
    }));

    app.post('/api/users', Users.signUp); // API route for user to signup

    app.post('/api/users/:userId/accounts', Accounts.create); // API route for user to create an account
    app.get('/api/accounts', Accounts.list); // API route for user to get all accounts in the database
};
