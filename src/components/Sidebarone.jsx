import React from 'react'
import Sidebarheader from './Sidebarheader'
import Sidebarfriends from './Sidebarfriends'
import { CloseButton, Container } from 'react-bootstrap'



const Sidebar = () => {
    return (
        <Container className="alpha-wraper row rounded ">
            <div   className="coverd  pt-4 d-none d-md-block d-lg-block">
            <CloseButton type="close" className="float-end btn" />
            <Sidebarheader />
            <Sidebarfriends />
            </div>
        </Container>
    )
}

export default Sidebar
