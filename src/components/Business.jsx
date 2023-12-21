import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'


const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
          <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2}`}>You do the business, <br className='sm:block hidden'/> 
            We'll handle the money. </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
          <Button styles="mt-10"/>
          </div>
    </section>
  )
}

export default Business