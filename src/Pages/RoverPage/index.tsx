/* eslint-disable camelcase */
import Button from '../../components/Button'
import Card from '../../components/Card'
import rover from 'assets/rover.png'
import {Cameras} from './cameras'
import Xarrow from "react-xarrows"
import Modal from 'react-modal'
import {useState} from 'react'
import axios from 'axios'

const RoverPage = (): JSX.Element => {

    Modal.setAppElement('#root')

    // const [apods, setApods] = useState([])
    const [modalisOpen, setModalisOpen] = useState(false)
    const [images, setImages] = useState([])

    const mastButtonClicked = async () => {
        setModalisOpen(true)

        const { data } = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&api_key=BkQerCYLcMl5BzaHg6vsasTgunnXJnO4tPTgehic&page=1')
        setImages(data.photos)
        console.log(data);
        console.log('Clicked the MAST CAM button')
    }

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <div className="mb-40">
                <Button text={Cameras.MAST} onClick={mastButtonClicked} id="mast-button" />
                <Button text={Cameras.NAVCAM} onClick={mastButtonClicked} id="nav-button" />
            </div>
            <img src={rover} className="rover lg:h-1/4 lg:w-1/4" id="rover"/>
            <div className="m-4">
                <Xarrow start="mast-button" end="rover"  />
            </div>
            <Modal style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: '20%',
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }} isOpen={modalisOpen}>
                <Button text="Close Modal" onClick={()=>setModalisOpen(false)}/>
                {images && images.map((image:any,key:number) => (<img key={key} src={image.img_src}></img>))}
            </Modal>
            <Xarrow start="nav-button" end="rover" />
        </div>
    )
}

export default RoverPage
