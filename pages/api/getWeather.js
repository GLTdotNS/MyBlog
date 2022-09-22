
export default function handler(req, res) {

  
    const apiKey = process.env.NEXT_PUBLIC_WEATHER;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=42.698334&lon=23.319941&appid=${apiKey}
    `)
    .then(response => response.json())
    .then(response => {
    
        res.status(200).json({ data: response })
     
    }).catch(() => {
      res.status(error.status).json(error.response.data)
    })
  
  
  }