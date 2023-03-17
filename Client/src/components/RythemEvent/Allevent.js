import React from 'react'
import { useProductContext } from '../../context/eventContext';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { EventCard1 } from './EventCard';
function Allevent() {
  const { isLoading, events } = useProductContext();

  if (isLoading === true) {
    return <div>..Loading</div>
  }
  return (
    <div className='ii'> 
      <Navbar />
      <section className="event-section">
        <div className='eve-head'>
          <h2 className="event-h1"><span className='land-head-span'> FEEL THE</span> RHYTHM</h2>
          <h2 className="event-h1">OF THE ENDLESS NIGHT!</h2>
        </div>

        <section className="event-grid">
          {events.map((curEle) => { return <EventCard1 key={curEle.id} {...curEle} /> })}
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default Allevent
