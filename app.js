import express from 'express'
import bodyParser from 'body-parser'
import { c, cpp, java, python, node } from 'compile-run'

const port = 3000||process.env.PORT
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/output', async (req, res) => {
    console.log(req.body.codeSnippet)
    const language = req.body.lang
    console.log(language)
    if (language === 'python') {
        try {
            const response = await python.runSource(req.body.codeSnippet)
            if (response.stderr === '')
                res.render('output.ejs', { output: response.stdout })
            else {
                res.render('output.ejs', { output: response.stderr })
            }
        } catch (err) {
            console.log(err)
        }
    }else if(language === 'c++'){
        try {
            const response = await cpp.runSource(req.body.codeSnippet)
            if (response.stderr === '')
                res.render('output.ejs', { output: response.stdout })
            else {
                res.render('output.ejs', { output: response.stderr })
            }
        } catch (err) {
            console.log(err)
        }
    }else if(language === 'java'){
        try {
            const response = await java.runSource(req.body.codeSnippet)
            if (response.stderr === '')
                res.render('output.ejs', { output: response.stdout })
            else {
                res.render('output.ejs', { output: response.stderr })
            }
        } catch (err) {
            console.log(err)
        }  
    }else if(language === 'c'){
        try {
            const response = await c.runSource(req.body.codeSnippet)
            if (response.stderr === '')
                res.render('output.ejs', { output: response.stdout })
            else {
                res.render('output.ejs', { output: response.stderr })
            }
        } catch (err) {
            console.log(err)
        }
    }else if(language === 'javascript'){
        try {
            const response = await node.runSource(req.body.codeSnippet)
            if (response.stderr === '')
                res.render('output.ejs', { output: response.stdout })
            else {
                res.render('output.ejs', { output: response.stderr })
            }
        } catch (err) {
            console.log(err)
        }
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

