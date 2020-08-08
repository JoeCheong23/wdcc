import Maincard from '../components/mainCard'
import fetch from 'node-fetch'
import { Button } from '@material-ui/core';
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
// import ParticlesBg from 'particles-bg'

const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>

function Home () {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: false })

  const logEvent = async (type, value) => {
    const event = {
      name: user.nickname,
      type: type,
      value: value
      // date: added server side so we can't lie
    }
    await fetch(`${config.HOST}/api/events`, {
      method: 'post',
      body: JSON.stringify(event)
    })

    // TODO handle error if event cannot be posted.
    // TODO display feedback if event is ok
  }

  const handleClick = (e) => {
    // console.log(e.target)
    logEvent('click', 1)
  }
  return (
    <>
      {/* <ParticlesBg type="circle" bg={true} /> */}
      <Layout user={user} loading={loading}>
        <div className="whoebox">
          <h1 className="h1">Kalm</h1>
          <h3 className="subHead">counsellors at your fingertips</h3>
          <div className="box">
            <p className="subHead"> 
            “Health is more than what you are eating, it is what you are thinking, saying and believing”
            For some of you, it may be a little daunting to talk about your problems face to face with someone you don't know. 
            Here at UoA Health Coach, we are here to provide students with confidential online support for any issues relating to mental well-being whether it be a general query you want to pass with our counsellors or contact them personally through a live chat.
            </p>
            {loading && <p>Loading login info...</p>}
            {!loading && !user && (
              <>
                <Button className="button" variant="contained" color="default" type="submit"><a href='/api/login'>Login</a></Button>
              </>
            )}
            {/* {user && (
              <>
                <h2>Reports</h2>
                <LinkA href='/report'>Report - useEffect</LinkA>
                <LinkA href='/reportSSR'>Report - SSR</LinkA>
                <LinkA href='/reportSWR'>Report - SWR</LinkA>

              </>)} */}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
