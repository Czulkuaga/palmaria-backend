const ScrapingController = {}
const axios = require('axios');
const InterlocutorService = require('../services/InterlocutorService')
// const cheerio = require('cheerio');

const verifyCaptchUrl = "https://www.google.com/recaptcha/api/siteverify"

ScrapingController.obtainCbml = async (req, res) => {
  const url = req.body.url
  const params = req.body.data.matricula
  try {
    const verifyCaptcha = await axios.post(`${verifyCaptchUrl}?secret=${process.env.RE_CAPTCHA_GOOGLE}&response=${req.body.data.captcha}`)
    const resCaptcha = verifyCaptcha.data
    console.log(resCaptcha)

    if (resCaptcha.success === true) {
      const response = await axios.get(`${url}${params}`); // Reemplaza con la URL del sitio web que deseas scrape
      const html = response.data;
      // console.log(html)

      await InterlocutorService.saveFormData(req.body.data)

      res.json({ code: '200', msg: "Información encontrada", data: html })
    }else{
      res.json({ code: '500', msg: "No se pudo validar el captcha", data: null })
    }


  } catch (error) {
    console.error('Error al hacer la solicitud HTTP:', error);
    res.json({ code: '500', msg: "Hubo un error en el servicio" })
  }
}

module.exports = ScrapingController