import nextConnect from 'next-connect'
import mongodb from '../../middleware/database'

const handler = nextConnect()

handler.use(mongodb)
/* Event schema
  {
    title: 
    question: 
    description
  }
*/

handler.post(async (req, res) => {
    console.log('req',req.body);
    const data = JSON.parse(req.body);
    data.date = new Date();
    console.log(data);
    try {
      await req.db.collection('Posts').insertOne({ Question: data.question, Description: data.description, Date: data.date })
      res.json({ message: 'ok' })
    } catch (e) {
      res.json({ message: 'error', e })
    }
  })

export default handler