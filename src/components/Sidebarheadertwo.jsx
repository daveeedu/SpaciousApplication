import React from 'react'

const Sidebarheadertwo = () => {
    return (
        <div className="FR d-flex justify-content-end ">
            <div md={1} >
            <div className="JC">
              <h1 className="cooper">Planet Alpha</h1>
              <p className="details">
              Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.
              </p>
            </div>
            <div className="d-flex" md={2}>
              <div className="PA pe-5 mt-4" md={1}>
                <p>
                  Population <br /> 234
                </p>
              </div>
              {/* <div className="g-3 FS ps-5" md={1}>
                <p>
                  Alpha <br /> 23
                </p>
              </div> */}
            </div>
            <h3 className="frnd">CHARACTERS</h3>
        </div>
        </div>
        
    )
}

export default Sidebarheadertwo


