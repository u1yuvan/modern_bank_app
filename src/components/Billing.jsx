import React from 'react'
import styles, { layout } from '../style'
import { apple, bill, google } from '../assets'


const billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className=' sm:block hidden'/>
          billing & invoicing.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
          </p>

          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
              <img src={apple} alt="apple store" className='cursor-pointer w-[128px] h-[42px] object-contain mr-5'/>
              <img src={google} alt="play store" className='cursor-pointer w-[128px] h-[42px] object-contain '/>
          </div>
      </div>
    </section>
  )
}

export default billing