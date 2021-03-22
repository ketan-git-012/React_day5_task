export default function Slider(props){
    return(
        <div class="image-container">
            <img 
            src={ props.images[props.currentImage] }
            alt="Slider Images"
            width="100%"
            />
        </div>
    )
}