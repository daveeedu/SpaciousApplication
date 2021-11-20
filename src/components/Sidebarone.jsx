import React from 'react'
import Sidebarheader from './Sidebarheader'
import Sidebarfriends from './Sidebarfriends'
import { CloseButton, Container } from 'react-bootstrap'




const Sidebar = ({name, setCharacter, Sidebarhead, character}) => {
    return (
        <Container className="alpha-wraper row rounded ">
            <div   className="coverd col-4 col-sm-12 col-md-7 col-lg-4  pt-4 d-none d-md-block d-lg-block">
            <CloseButton type="close" className="float-end btn" />
            <Sidebarheader  character={character}/>
            <Sidebarfriends />
            </div>
        </Container>
    )
}

export default Sidebar
