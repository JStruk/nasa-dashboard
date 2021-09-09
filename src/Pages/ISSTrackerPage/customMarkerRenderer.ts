import { Marker } from "react-globe";
import { Object3D, Sprite, SpriteMaterial, TextureLoader } from "three";
import iss from "../../assets/iss.png";

export function customMarkerRenderer(marker: Marker): Object3D {
    const { value } = marker

    const map = new TextureLoader().load(iss);
    const material = new SpriteMaterial({ map: map });
    const sprite = new Sprite(material);

    sprite.scale.set(value, value, 1)

    return sprite
}
