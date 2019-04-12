

let express=require('express')
let app=express()
let bodyParser=require('body-parser')
let countdown = require('moment-countdown');
let moment=require('moment')

app.use(bodyParser.json());
app.use('/assets', express.static('public'))

app.get('/countdown', (req, res) => {
    let calculusDate=new Date('2019-06-06T09:00:00.512Z')
    let countDonwDate = moment('2019-06-06T09:00:00')
   
    let dateNow = new Date
    let finalDate = countDonwDate - dateNow
    var duration = moment(dateNow).countdown(countDonwDate).toString()
    let json = {
      calculusDate:calculusDate,
      countDonwDate: countDonwDate,
      dateNow: dateNow,
      remainingTime: finalDate,
      dateNowFormatted: moment(dateNow).format('Do MMMM YYYY, h:mm:ss'),
      countDownDateFormatted: moment(countDonwDate).format('Do MMMM YYYY, h:mm:ss'),
      remainingFormatted: duration
  
    }
    res.json(json)
  })
  module.exports=app