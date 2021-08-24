/* eslint-disable camelcase */
import {useState} from 'react'
import Button from '../../components/Button'
import ModalWithButton from '../../components/ModalWithButton'
import axios from 'axios'
import rover from 'assets/rover.png'
import {CAMERAS} from './CAMERAS'
import Xarrow from "react-xarrows"
import RoverImage from "./types";
import RoverImageCard from "../../components/RoverImageCard";

const RoverPage = (): JSX.Element => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [images, setImages] = useState([])

    const mastButtonClicked = async () => {
        setModalIsOpen(true)
        const {data} = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&page=1')
        setImages(data.photos)
        console.log(data);
    }

    const buttonClicked = async (id: string) => {
        // Set images to empty array so the modal opens instantly but does not show old photos from other camera button clicks
        setImages([])
        const cameraShorthand = Object.keys(CAMERAS).find((key: string) => CAMERAS[key as keyof typeof CAMERAS].buttonId === id)

        const {data} = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${cameraShorthand}&api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&page=1`)
        setImages(data.photos)
        setModalIsOpen(true)
    }

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <div className="mb-40">
                <Button text={CAMERAS.MAST.label} onClick={buttonClicked} id={CAMERAS.MAST.buttonId}/>
                <Button text={CAMERAS.NAVCAM.label} onClick={buttonClicked} id={CAMERAS.NAVCAM.buttonId}/>
            </div>
            <img src={rover} alt="Cartoon Mars Rover" className="rover lg:h-1/4 lg:w-1/4" id="rover"/>

            <ModalWithButton isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                <section className="py-8">
                    <div className="flex flex-wrap -mx-4 -mb-8">
                        {images &&
                        images.map((image: RoverImage, key: number) => (
                            <RoverImageCard
                                key={key}
                                src={image.img_src}
                                roverImage={image}
                            />
                        ))
                        }
                    </div>
                </section>
            </ModalWithButton>
            <Xarrow start={CAMERAS.MAST.buttonId} end="rover"/>
            <Xarrow start={CAMERAS.NAVCAM.buttonId} end="rover"/>
        </div>
    )
}

export default RoverPage
