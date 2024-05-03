import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const BioInformation = (prop: any) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    // Return result -----------------------------
    return (
        <>
            <div>
                <div className="pageaccessbox bordersubpurple hovermouse" onClick={() => handleShow()}>
                    <FontAwesomeIcon icon={faHeart} className="pageaccestext"/>
                    <h1 className="pageaccestext">
                        INTRODUCTION
                    </h1>
                </div>
            </div>
            <Modal onEnterKeyDown={() => handleClose()} show={show}  contentClassName="filterboxStructure" dialogClassName="" onHide={handleClose} keyboard={true}  centered>
                
                            <h1 className={'titleShape titlepurple'}>
                                Introduction
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
                                    <p className="bodytext">
                                        {"Heya! I'm Lane Edwards-Brown (also known as Bob the King Of Seagulls), a software engineer and artist from New Zealand. This website is the central hub for my current projects, as well as an archive of the work I've done over the years."}
                                    </p>
                                    <p className="bodytext">
                                        {"Most of my art focuses on science fiction and fantasy illustration. These run the gambit from simple icon designs, to collage or digitally drawn pieces, to even 3D model and animation work. You'll also see software I release on occasion! Currently, I'm mostly focused on my own personal projects, but will occasionally open up to take commission work when I feel capable of putting the time in."}
                                    </p>
                                    <p className="bodytext">
                                       {"If you have any questions or queries, check the Socials tab to find ways to contact me."}
                                    </p>
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

export default BioInformation