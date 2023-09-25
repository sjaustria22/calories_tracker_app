import React from 'react'

const AppModal = ({setOpenModal}) => {
  return (
    <div className="app_modal">
      <h3>Calories Must be Bigger than 0 and Meal Name Cannot Be Blank</h3>
      <button className="btn_close_modal" onClick={()=>setOpenModal(false)}>Close</button>
    </div>
  )
}

export default AppModal;