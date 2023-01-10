const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const dynamicResume = require('./docs/dynamic-resume');
const pdf = require("html-pdf")
const app = express();
app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const options ={
    "height": "10.5in",        // allowed units: mm, cm, in, px
    "width": "8in",            // allowed units: mm, cm, in, px
}




app.get("/",(req,res,next)=>{
res.render('home');
});

app.get('/resume-maker/:theme',(req,res,next)=>{
    console.log("theme: ", req.params.theme);
    switch(req.params.theme){
        case '1':    
        res.render('resume-maker',{theme:""})
            break;

            case '2':    
            res.render('resume-maker',{theme:""})
                break;

                default:    
                res.render('resume-maker',{theme:""});
                    break;
    }

});
app.post('/resume-maker',(req,res)=>{
    console.log(req.body);
    const userName = req.body.name;
    const lowercaseName = userName.toLowerCase();
    const noSpaceName = lowercaseName.replace('','');
    const shortName = noSpaceName.slice(0,10);
    console.log("short name:",shortName);


    pdf.create(dynamicResume(),options).toFile(__dirname + "/docs/dynamic-resume.pdf",(error, response)=>{
        if(error) throw Error("file is not created");
        console.log(response.filename);
        res.sendFile(response.filename);
                
      });
})

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log('server running on :'+port));


