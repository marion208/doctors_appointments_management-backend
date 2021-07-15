const Doctor = require('../models/doctor');

exports.createDoctor = (req, res, next) => {
    const doctor = new Doctor({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    doctor.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteDoctor = (req, res, next) => {
    Doctor.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllDoctor = (req, res, next) => {
    Doctor.find({}, ['_id', 'firstname', 'lastname'], { sort: { firstname: 1, lastname: 1 } }).then(
        (doctors) => {
            res.status(200).json(doctors);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};