const Absence = require('../models/absence');

exports.createAbsence = (req, res, next) => {
    const absence = new Absence({
        id_doctor: req.body.id_doctor,
        date_begin: req.body.date_begin,
        date_end: req.body.date_end
    });
    absence.save().then(
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

exports.deleteAbsence = (req, res, next) => {
    Absence.deleteOne({ _id: req.params.id }).then(
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

exports.getAllAbsenceByDoctor = (req, res, next) => {
    Absence.find({
        id_doctor: req.params.id_doctor,
        date_begin: { $lt: req.params.date_begin },
        date_end: { $gt: req.params.date_end }
    }, ['_id', 'date_begin', 'date_end'],
        {
            sort: { date_begin: 1 }
        }).then(
            (absences) => {
                res.status(200).json(absences);
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
};
