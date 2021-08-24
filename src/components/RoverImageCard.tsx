import CardTag from "./CardTag";
import RoverImage from "../Pages/RoverPage/types";

interface RoverImageCardProps {
    src: string
    roverImage: RoverImage
}

const RoverImageCard = ({src, roverImage}: RoverImageCardProps): JSX.Element => {
    const roverTag = `Rover: ${roverImage.rover.name}`
    const cameraTag = `Camera: ${roverImage.camera?.name}`
    const dateTag = roverImage.earth_date

 return (
     <div className="flex flex-col shadow-lg mx-auto py-4 mb-10">
         <div className="h-full flex content-center justify-center">
             <img className="object-none lg:w-96" src={src} alt="Mars Rover Photo"/>
         </div>
           <div className="my-auto">
              <div className="flex flex-wrap justify-center mt-4 ml-2">
                 <CardTag text={roverTag} />
                 <CardTag text={cameraTag} />
                 <CardTag text={dateTag} />
              </div>
           </div>
     </div>
 )
}

export default RoverImageCard
