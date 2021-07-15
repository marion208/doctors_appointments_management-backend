const Staff = require('../models/staff');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = (req, res, next) => {
    Staff.findOne({ pseudo: req.body.pseudo })
        .then(staff => {
            if (!staff) {
                return res.status(401).json({ error: 'Utilisateur non trouvé' });
            }
            bcrypt.compare(req.body.password, staff.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        staffId: staff._id,
                        token: jwt.sign(
                            { staffId: staff._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};