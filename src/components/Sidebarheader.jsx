import React from 'react'

const Sidebarheader = () => {
    return (
        <div className="FR d-flex justify-content-end ">
            <div md={1} >
            <div className="JC">
              <h1 className="cooper">Jane Cooper</h1>
              <p className="details">
                Jane is really a nice person. She’s been living <br /> on planet Alpha
                for the last 10 years.
              </p>
            </div>
            <div className="d-flex" md={2}>
              <div className="PA pe-5" md={1}>
                <p>
                  Planet <br /> Friends
                </p>
              </div>
              <div className="g-3 FS ps-5" md={1}>
                <p>
                  Alpha <br /> 23
                </p>
              </div>
            </div>
            <h3 className="frnd">FRIENDS</h3>
        </div>
        </div>
        
    )
}

export default Sidebarheader


