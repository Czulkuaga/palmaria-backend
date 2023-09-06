const ScrapingController = {}
const axios = require('axios');
const cheerio = require('cheerio');

ScrapingController.obtainCbml = async (req, res) => {
    const url = req.body.url
    const params = req.body.params
    try {
        const response = await axios.get(`${url}${params}`); // Reemplaza con la URL del sitio web que deseas scrape
        const html = response.data;
        
        res.json({code:'200', msg:"Información encontrada", data: html})
      } catch (error) {
        console.error('Error al hacer la solicitud HTTP:', error);
        res.json({code:'500', msg:"Hubo un error en el servicio"})
      }
}

module.exports = ScrapingController