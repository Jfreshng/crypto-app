import React from 'react'
import { box, footer, footerHead, footerText } from '../constants'

const Footer = () => {
  return (
    <div className={`flex flex-col bg-gray-700 ${box} pt-[25px]`}>

        {/* grid box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

            {/* footer column 1 */}
            <div className="text-gray-500">
              <h3 className={`font-semibold mb-3 text-gray-400 text-[${footerHead}]`}>Products</h3>
              {footer.products.map((product, index)=>(
                <ul>
                  <li className={`mb-1 hover:text-gray-400 text-[${footerText}]`} key={index}>{product}</li>
                </ul>
              ))}
            </div>

            {/* footer column 2 */}
            <div className="text-gray-500">
              <h3 className={`font-semibold mb-3 text-gray-400 text-[${footerHead}]`}>Company</h3>
              {footer.company.map((company, index)=>(
                <ul>
                  <li className={`mb-1 hover:text-gray-400 text-[${footerText}]`} key={index}>{company}</li>
                </ul>
              ))}
            </div>

            {/* footer column 3 */}
            <div className="text-gray-500">
              <h3 className={`font-semibold mb-3 text-gray-400 text-[${footerHead}]`}>Support</h3>
              {footer.support.map((support, index)=>(
                <ul>
                  <li className={`mb-1 hover:text-gray-400 text-[${footerText}]`} key={index}>{support}</li>
                </ul>
              ))}
            </div>

            {/* footer column 1 */}
            <div className="text-gray-500">
              <h3 className={`font-semibold mb-3 text-gray-400 text-[${footerHead}]`}>Socials</h3>
              {footer.socials.map((socials, index)=>(
                <ul>
                  <li className={`mb-1 hover:text-gray-400 text-[${footerText}]`} key={index}>{socials}</li>
                </ul>
              ))}
            </div>
        </div>

        <div className="flex flex-col pt-[30px]">
          <span className='w-[100%] border-b border-gray-600 border-solid'></span>
          <p className={`mx-auto text-gray-400 pt-[5px] text-[${footerText}]`}>Powered by: xyz</p>
        </div>
    </div>
  )
}

export default Footer