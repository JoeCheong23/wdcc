import nextConnect from 'next-connect'

const handler = nextConnect()

/** Returns the current config - helps debugging
 * super insecure as will leak environment secrets from teh server
 * disable when not required
 * admin only
 */
// handler.post(async (req, res) => {
//     console.log(JSON.parse(req.body))
//     res.json("hi")
// })


handler.post(async (req, res) => {
    console.log(JSON.parse(req.body))
    res.json("hi")
})

export default handler
