import React, { useState } from 'react'
import { headindFont, box, p20 } from '../constants'
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Subscriber = () => {

  const [email, setEmail] = useState('');


  // Define the validation schema using Yup
    const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  // Initialize Formik with initial values, validation schema, and submission handler
  const formik = useFormik({
      initialValues: {
          email: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
          // Handle form submission
          toast.success(`${email} successfully added!!`)
          console.log('Form data', values);
      },
  });

  return (
    <div className={`${box} bg-gray-50`}>
      <h2 className={`font-bold ${headindFont} py-[10px] text-center`}>Subscribe to our newsletter</h2>
      <p className={`pb-[${p20}] text-center`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio tempora fuga et, ipsa labore asperiores.</p>
      <div className={`flex flex-col items-center pb-[${p20}]`}>
        
          <form onSubmit={formik.handleSubmit} className='flex gap-4'>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder='enter an email address' 
                  className='border rounded-md p-2 lg:w-[350px] mx-4 focus:outline-gray-500'
              />
              {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: 'red' }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <button className='border rounded-md p-2 hover:bg-gray-600 hover:text-white lg:w-[150px] border-gray-400 h-[40px]' type='submit'>Subscribe</button>
          </form>
        
      </div>
    </div>
  )
}

export default Subscriber