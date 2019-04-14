

let express=require('express')
let app=express()
let bodyParser=require('body-parser')
let countdown = require('moment-countdown');
let moment=require('moment')

app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))
app.get('/start',(req,res)=>{
  if(req.query.date){
    res.render('pages/embedded', { date:req.query.date})
  }
})

app.get('/schedule',(req,res)=>{
  res.render('pages/schedule')
})
app.get('/countdown', (req, res) => {
  let locale='fr'
  if(req.query.locale){
    locale=req.query.locale
  }
  moment.locale(locale); 
  if(req.query.date){
    let calculusDate=new Date(req.query.date)
    calculusDate=calculusDate-(2*60*60*1000)
    let countDownDate = moment(req.query.date).format()
   
    let dateNow = new Date
    let finalDate = countDownDate - dateNow
    var duration = moment(dateNow).countdown(countDownDate).toString()
    let json = {
      calculusDate:calculusDate,
      countDownDate: countDownDate,
      dateNow: dateNow,
      remainingTime: finalDate,
      dateNowFormatted: moment(dateNow).format('Do MMMM YYYY, h:mm:ss'),
      countDownDateFormatted: moment(countDownDate).format('Do MMMM YYYY, h:mm:ss'),
      remainingFormatted: duration
  
    }
    res.json(json)
  }else{
    res.json({"error":"no date provided"})
  }
   
  })
  module.exports=app