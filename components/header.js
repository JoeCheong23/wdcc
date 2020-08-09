import Link from 'next/link'
import { Button } from '@material-ui/core';

const MenuItem = ({ children, href }) =>
  <Link href={href}>
    <li className='block mt-4 inline-block  rounded-md text-center bg-orange-200 hover:bg-orange-500 px-4 py-2 m-2 lg:mt-0 hover:text-white mr-4'>
      <a className='no-underline hover:text-white'>{children}</a>
    </li>
  </Link>

function Header ({ user, loading }) {
  return (
    <header className='bg-orange-300'>
      <nav className='container flex items-center justify-between flex-wrap  py-2 '>
        <ul className=' flex   '>
          {!loading &&
            (user ? (
              <>
                <Button href='/api/logout' size="small" className="button5">logout</Button>
              </>
            ) : (
                <Button href='/api/login' size="small" className="button5">login</Button>
            ))}
        </ul>
      </nav>

    </header>
  )
}

export default Header
