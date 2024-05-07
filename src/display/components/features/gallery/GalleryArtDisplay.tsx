import 'bootstrap/dist/css/bootstrap.css'
import '../../../../resources/styles/_icon.scss'
import React, { useState } from 'react'
import { imagesbypath } from '../../../../resources/images/imageexport'

import { GalleryItem } from '../../../../classes/feature/gallery/GalleryItem'
import {IIconpendiumItemTag} from '../../../../classes/IconpendiumItem'
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import aeon from '../../../../resources/images/posts/0000_ICONAeon.jpg'


import TagDisplay from '../../subcomponents/TagDisplay'

const GalleryArtDisplay = (props: any) => {

    const [show, setShow] = useState(false);
    const [showsize, setSize] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const GalleryObject: GalleryItem = props.data
    const bannedAbilityTags = ["inflict", "type"]

    const image = imagesbypath[GalleryObject.path]
    const desc = GalleryObject.description
    const img = new (window as any).Image()
    img.src = image;
    img.onload = () => {
        if (img.width > img.height) {
            setSize(true);
        } else {
            setSize(false);
        }
    }

    function returnTags() {
        const displaytags = sortTagsForDisplay()

        return (
            <div className="tagBox">
                    {displaytags.map((item) => (
                        <div key={"tagDisplay"+item.tag_name+item.val}>
                            <TagDisplay data={item}/>
                        </div>
                    ))}
            </div>
        )
    }

    function sortTagsForDisplay() {
        const tagarray: IIconpendiumItemTag[] = []

        let i = 0;
        for (i = 0; i < (GalleryObject.Tags?.length || 0); i++) {
            if (GalleryObject.Tags != undefined) {
                const temptag: IIconpendiumItemTag = GalleryObject.Tags[i]

                if ((temptag.tag_name == "blast_size") || (temptag.tag_name == "blast_distance")) {
                    temptag.tag_name = "blast"; }

                if (!bannedAbilityTags.includes(temptag.tag_name)) {
                    tagarray.push(temptag);
                }}}
        return tagarray;
    }


    return (
        <>
                <div className={(showsize? "image-wrapperwide" : "image-wrapper") + " hovermouse"} onClick={() => handleShow()}>
                    <Image src={image} />
                </div>

            <Modal onEnterKeyDown={() => handleClose()} show={show} size={showsize? "lg" : undefined} contentClassName="filterboxStructure" dialogClassName="" onHide={handleClose} keyboard={true}  centered>
                <Modal.Body >
                    <Image src={image} fluid />
                    <br/>
                    {returnTags()}
                    <p dangerouslySetInnerHTML={{__html: desc}}></p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default GalleryArtDisplay;