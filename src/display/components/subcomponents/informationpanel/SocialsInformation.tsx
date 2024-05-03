import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const SocialInformation = (prop: any) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function NavigateNewPage(dir: string) {
        window.open(dir,"_blank", "noreferrer");
    }
    
    // Return result -----------------------------
    return (
        <>
            <div>
                <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => handleShow()}>
                    <FontAwesomeIcon icon={faLink} className="pageaccestext"/>
                    <h1 className="pageaccestext">
                        CONTACTS
                    </h1>
                </div>    
            </div>
            <Modal onEnterKeyDown={() => handleClose()} show={show} size='lg' contentClassName="filterboxStructure" dialogClassName="" onHide={handleClose} keyboard={true}  centered>
                
                    <h1 className={'titleShape titlepurple'}>
                        Contacts
                        <div className="row float-end">
                            <div className='col-12 float-end'>
                                <Button style={{padding:"0em"}} variant="" onClick={() => handleClose()}>
                                    <FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"2em",color:"white",margin:"0em"}}/>
                                </Button>
                            </div>
                        </div>
                    </h1>
                <Modal.Body >
                    <div className="row p-3 overflow-auto flex-grow-1">
                        <div style={{"maxHeight": "calc(70vh"}}>
                            <div className="col-12">
                                <div className="row textHolder">                 
                                    <div className="pageaccessbox bordersubblue hovermouse" onClick={() => NavigateNewPage("https://twitter.com/KingOfSeagulls")}>
                                        <FontAwesomeIcon icon={faTwitter} className="pageaccestextblue"/>
                                        <h1 className="pageaccestextblue">
                                            @KingOfSeagulls
                                        </h1>
                                    </div> 
                                </div>
                                <div className="verticalspacermed"/>
                                <div className="row textHolder">                 
                                    <div className="pageaccessbox bordersubgreen hovermouse" onClick={() => NavigateNewPage("https://bob-the-seagull-king.tumblr.com/")}>
                                        <FontAwesomeIcon icon={faTumblr} className="pageaccestextgreen"/>
                                        <h1 className="pageaccestextgreen">
                                            bob-the-seagull-king
                                        </h1>
                                    </div> 
                                </div>
                                <div className="verticalspacermed"/>
                                <div className="row textHolder">                 
                                    <div className="pageaccessbox bordersubyellow hovermouse" onClick={() => NavigateNewPage("https://discord.com/users/194184689169203200")}>
                                        <FontAwesomeIcon icon={faDiscord} className="pageaccestextyellow"/>
                                        <h1 className="pageaccestextyellow">
                                            bobtheseagullking
                                        </h1>
                                    </div> 
                                </div>
                                <div className="verticalspacermed"/>
                                <div className="row textHolder">                 
                                    <div className="pageaccessbox bordersubred hovermouse" onClick={() => NavigateNewPage("mailto:bob.kingofseagulls@gmail.com")}>
                                        <FontAwesomeIcon icon={faEnvelope} className="pageaccestextred"/>
                                        <h1 className="pageaccestextred">
                                            bob.kingofseagulls@gmail.com
                                        </h1>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
    // -------------------------------------------
}

export default SocialInformation