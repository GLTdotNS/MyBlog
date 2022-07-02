// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  fetch(`https://api.github.com/users/GLTdotNS`)
  .then(response => response.json())
  .then(response => {
  
      res.status(200).json({ name: response })
   
  }).catch(() => {
    res.status(error.status).json(error.response.data)
  })


}
