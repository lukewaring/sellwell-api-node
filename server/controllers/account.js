import model from '../models';

const { Account } = model;

class Accounts {
    
    static create(req, res) {
        const { name, industry, website, notes } = req.body
        const { userId } = req.params
        
        return Account
            .create({
            name,
            industry,
            website,
            notes,
            userId
            })
            .then(account => res.status(201).send({
            message: `The ${name} account has been created successfully `,
            account
            }))
    }

    static list(req, res) {
        return Account
          .findAll()
          .then(accounts => res.status(200).send(accounts));
    }

}

export default Accounts
