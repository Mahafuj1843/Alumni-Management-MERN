import React, { Fragment, useRef, useState } from 'react'

const Checkbox = ({checked, label, handleCheck}) => {//{refer,name,id, CText}
const [isChecked, setIsChecked] = useState(false);
const onHandle = (e) =>{
  setIsChecked(!isChecked)
  handleCheck(e)
}

// useState(()=>{
//   setIsChecked(checked)
// },[checked])
  
  return (
    <Fragment>
      <label
        // htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            value={label}
            checked={checked}
            className="sr-only"
            onChange={(e)=>onHandle(e)}
          />
          <div
            className={`mr-2 flex h-5 w-5 items-center justify-center rounded border ${
              checked && 'border-primary bg-gray dark:bg-transparent'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-sm ${checked && 'bg-primary'}`}
            ></span>
          </div>
        </div>
        {label}
      </label>
    </Fragment>
  )
}

export default Checkbox
