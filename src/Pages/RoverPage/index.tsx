/* eslint-disable camelcase */
import { useState } from 'react'
import Button from '../../components/Button'
import ModalWithButton from '../../components/ModalWithButton'
import axios from 'axios'
import rover from 'assets/rover.png'
import { CAMERAS } from './CAMERAS'
import Xarrow from "react-xarrows"
import RoverImage from "./types";
import RoverImageCard from "../../components/RoverImageCard";

const RoverPage = (): JSX.Element => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [images, setImages] = useState([])

    const buttonClicked = async (id: string) => {
        // Set images to empty array so the modal opens instantly but does not show old photos from other camera button clicks
        setImages([])
        const cameraShorthand = Object.keys(CAMERAS).find((key: string) => CAMERAS[key as keyof typeof CAMERAS].buttonId === id)

        const { data } = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${cameraShorthand}&api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&page=1`)
        setImages(data.photos)
        setModalIsOpen(true)
    }

    return (
        <>
            <div className="grid grid-flow-col w-full grid-rows-3 gap-4 h-screen items-center p-4" data-testid="main-rover-div">
                <div>
                </div>
                <div className="m-auto">
                    <Button text={CAMERAS.FHAZ.label} onClick={buttonClicked} id={CAMERAS.FHAZ.buttonId}/>
                </div>
                <div>3</div>
                <div className="m-auto">
                    <Button text={CAMERAS.MAST.label} onClick={buttonClicked} id={CAMERAS.MAST.buttonId} testId="mast-cam-button"/>
                    <Button text={CAMERAS.NAVCAM.label} onClick={buttonClicked} id={CAMERAS.NAVCAM.buttonId}/></div>
                <div className="m-auto"><img src={rover} alt="Cartoon Mars Rover" className="rover" id="rover"/></div>
                <div>6</div>
                <div>7</div>
                <div className="m-auto">
                    <Button text={CAMERAS.RHAZ.label} onClick={buttonClicked} id={CAMERAS.RHAZ.buttonId}/>
                </div>
                <div>9</div>
            </div>
            <Xarrow start={CAMERAS.MAST.buttonId} end="rover"/>
            <Xarrow start={CAMERAS.NAVCAM.buttonId} end="rover"/>
            <Xarrow start={CAMERAS.FHAZ.buttonId} end="rover"/>
            <Xarrow start={CAMERAS.RHAZ.buttonId} end="rover"/>

            <ModalWithButton isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                <section className="py-8">
                    <div className="flex flex-wrap -mx-4 -mb-8" data-testid="rover-images-div-in-modal">
                        {images &&
                        images.map((image: RoverImage, key: number) => (
                            <RoverImageCard
                                key={key}
                                src={image.img_src}
                                roverImage={image}
                                testId={`modal-img-${key}`}
                            />
                        ))
                        }
                    </div>
                </section>
            </ModalWithButton>
        </>
    )
}

export default RoverPage
