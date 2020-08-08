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
  const doc2 = await req.db.collection('Replies').find().toArray()
  console.log(doc)
  res.json(doc)
  res.json(doc2)
})

handler.post(async (req, res) => {
  const data = JSON.parse(req.body)
  data.date = new Date()
  try {
    await req.db.collection('events').updateOne({ date: data.date }, { $set: data }, { upsert: true })
    res.json({ message: 'ok' })
  } catch (e) {
    res.json({ message: 'error', e })
  }
})



export default handler
