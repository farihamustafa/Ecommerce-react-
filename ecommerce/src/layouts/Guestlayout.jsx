import React from 'react'
import Fnavbar from '../components/Fnavbar';
import Ffooter from '../components/Ffooter';

function Guestlayout(props) {
    const {children} = props;
  return (
    <>
    <Fnavbar/>
    {children}
    <Ffooter/>
    </>
  )
}

export default Guestlayout