const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 57919
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/', (req, res) => {
    //res.send('Página principal')
    console.log(__dirname)
    res.render('index')
  })

  app.get('/inicio', (req, res) => {
    res.render('index',{
        titulo: "Sección Inicio",
        descripcion: "Pagina principal"
    })
  }) 

  app.get('/informacion', (req, res) => {
    res.render('informacion',{
        titulo: "Sección de la informacion personal",
        descripcion: "Aquí encontrarás toda la información personal sobre Ana Ballén"
    })
  })
  
app.get('/educacion', (req, res) => {
    res.render('educacion',{
        titulo: "Sección Educación",
        descripcion: "Aquí encontrarás mi información académica"
    })
  })

app.get('/lenguajes', (req, res) => {
    res.render('lenguajes',{
        titulo: "Sección lenguajes utilizados",
        descripcion: "Aquí encontrarás toda la experiencia laboral"
    })
  })

  app.get('/contact', (req, res) => {
    res.render('contact',{
        titulo: "Sección Inicio",
        descripcion: "Pagina principal"
    })
  }) 

  app.get('/about', (req, res) => {
    res.render('about',{
        titulo: "Aqui encontraras informacion sobre mi",
        descripcion: "Informacion Personal"
    })
  }) 

app.use((req,res,next) => {
   res.status(404).sendFile(__dirname+'/public/404.html') 
})


app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
  console.log(`Accede al servidor haciendo click aquí http://localhost:${port}`)
  console.log(`Accede al servidor haciendo click aquí http://localhost:${this.address().port.toString()}`)
})