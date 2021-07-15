const Appointment = require('../models/appointment');

exports.createAppointment = (req, res, next) => {
    const appointment = new Appointment({
        id_doctor: req.body.id_doctor,
        firstname_patient: req.body.firstname_patient,
        lastname_patient: req.body.lastname_patient,
        tel_patient: req.body.tel_patient,
        date_appointment: req.body.date_appointment
    });
    appointment.save().then(
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

exports.deleteAppointment = (req, res, next) => {
    Appointment.deleteOne({ _id: req.params.id }).then(
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

exports.getAllAppointmentByDoctor = (req, res, next) => {
    Appointment.find({
        id_doctor: req.params.iddoctor
    }).then(
        (appointments) => {
            res.status(200).json(appointments);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
