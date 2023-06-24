import React from 'react'
import DAOdetails from './DAOdetails'
import {motion} from "framer-motion";

const Dashboard = () => {

  const listVariant={
    hidden:{
      x:-10,
      opacity:0


    },
    visible:{
      x:0,
      opacity:1,
      staggerChildren:0.2
    }
  }
  return (
    <div>
     
        <motion.div>
          {
            [0,1,2,3,4].map(DAOdetails => {
              return <motion.li className='box-item' animate="visible" initial="hidden" variants={listVariant}></motion.li>
            })
          }
        </motion.div>
    </div>
  )
}

export default Dashboard