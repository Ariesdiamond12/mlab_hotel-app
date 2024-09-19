import React from 'react'
import { DatePicker } from '@nextui-org/react'

function BookNow() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto p-4'>
                <h1 className='text-3xl text-center'>Book Your Stay: Let Us Assist You in Planning the Perfect Experience.</h1>
                <DatePicker label="Check-In" className="max-w-[284px]" />
                <DatePicker label="Check-Out" className="max-w-[284px]" />
            </form>
        </div>
    </div>
  )
}

export default BookNow