import React from 'react'
import './Widget.css'

function Widget() {
  return (
    <div className='widget'>
      <h1>Please Donate</h1>
      <form
        style={{ display: 'flex', justifyContent: 'center' }}
        action='https://www.paypal.com/donate'
        method='post'
        target='_top'
      >
        <input type='hidden' name='business' value='R93VHWZWXN2Z4' />
        <input type='hidden' name='no_recurring' value='0' />
        <input
          type='hidden'
          name='item_name'
          value='To pay for hosting costs for freedom'
        />
        <input type='hidden' name='currency_code' value='USD' />
        <input
          type='image'
          src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
          border='0'
          name='submit'
          title='PayPal - The safer, easier way to pay online!'
          alt='Donate with PayPal button'
        />
        <img
          alt=''
          border='0'
          src='https://www.paypal.com/en_US/i/scr/pixel.gif'
          width='1'
          height='1'
        />
      </form>
    </div>
  )
}

export default Widget
