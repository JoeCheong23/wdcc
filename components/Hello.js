// React JSX Components can be very very terse
export const Greet = () => <p className='greeting'>Hello, *Your namee here*!</p>

export const Hello = ({ name }) => <p className='greeting'>Hello, {name}</p>

export default Greet
