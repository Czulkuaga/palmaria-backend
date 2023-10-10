const InterlocutorService = {}
const FormInfo = require('../models/FormInfo')

InterlocutorService.saveFormData = async (formData) => {
    let formInfo = {
        fullname: formData.fullname,
        email:formData.email,
        phone: parseInt(formData.phone),
        authorization: formData.acept,
        matricula: formData.matricula,
        metros: parseFloat(formData.metros)
    }
    await FormInfo.create(formInfo);
}

module.exports = InterlocutorService