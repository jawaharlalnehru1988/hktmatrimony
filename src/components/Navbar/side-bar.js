import React, { useState } from 'react'
import Header from '../header'
import { Button } from '@mui/material';


function Sidebar() {
    const [number, setNumber]=useState(0);

    function addNUm(){
            setNumber(24);
    }
  return (
    <div>
        <Button onClick={addNUm}>Click</Button>
      <Header value={number} />
    </div>
  )
}

export default Sidebar
