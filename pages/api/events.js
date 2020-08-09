import nextConnect from 'next-connect'
import mongodb from '../../middleware/database'

const handler = nextConnect()

handler.use(mongodb)
/* Event schema
  {
    date: timestamp when record created
    value: value of the record.
  }
*/
handler.get(async (req, res) => {
  // find returns a cursor which we need to iterate through to get the results.
  // use next or toArray
  const doc = await req.db.collection('Posts').find().sort({"Date": -1}).toArray()
  console.log(doc)
  res.json(doc)
  
})

handler.post(async (req, res) => {
  console.log(req.body)
  // const data = JSON.parse(req.body)

  //await req.db.collection('events').updateOne({ date: data.date }, { $set: data }, { upsert: true })
  req.db.collection('Posts').insertOne(
    {
      Title: req.body
    }
  )

    res.json('hi')
})



export default handler
