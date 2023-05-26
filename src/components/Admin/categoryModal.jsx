import React from 'react'
import './admin.css'

const CategoryModal = ({children, modal1, setModal1}) => {
  return modal1 && (
    <div className='modal-wrap' onClick={() => setModal1(false)}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default CategoryModal