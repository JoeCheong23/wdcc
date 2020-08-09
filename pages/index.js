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
    <div className="back" backgroundI>
      {/* <ParticlesBg type="circle" bg={true} /> */}
        <div className="boxybox">
          {/* <img src="./public/UoA.png"></img> */}
          {/* <h1 className="tit">Kalm</h1> */}
          <h3 className="subtit">counsellors at your fingertips</h3>
          <div className="boxtit">
            <p className="subHeadtit"> 
            “Health is more than what you are eating, it is what you are thinking, saying and believing”
            For some of you, it may be a little daunting to talk about your problems face to face with someone you don't know. 
            Here at UoA Health Coach, we are here to provide students with confidential online support for any issues relating to mental well-being whether it be a general query you want to pass with our counsellors or contact them personally through a live chat.
            </p>
            
              <>
                <Layout user={user} loading={loading} className="menubar"></Layout>
              </>
            
            {/* {user && (
              <>
                <h2>Reports</h2>
                <LinkA href='/report'>Report - useEffect</LinkA>
                <LinkA href='/reportSSR'>Report - SSR</LinkA>
                <LinkA href='/reportSWR'>Report - SWR</LinkA>

              </>)} */}
          </div>
        </div>
      
    </div>
  )
}

export default Home
