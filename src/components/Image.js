import React,{useState} from "react"

function Image({className, img}) {
    const [hovered,setHover]=useState(false)
    console.log(hovered)
    return (
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid" 
                   onMouseEnter={() => setHover(true)}
                   onMouseLeave={() => setHover(false)}/>
        </div>
    )
}

export default Image
