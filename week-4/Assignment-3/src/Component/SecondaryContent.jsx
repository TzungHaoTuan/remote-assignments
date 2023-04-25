import { useState, useEffect, useRef } from "react"

export default function SecondaryContent() {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div>
            <button  onClick={handleClick} className="cta">Call to Action</button>
            <div    className={`secondary-content ${isClicked ? "more" : ""}`}>
                <p class="content-box">Content Box 1</p>
                <p class="content-box">Content Box 2</p>
                <p class="content-box">Content Box 3</p>
                <p class="content-box">Content Box 4</p>
            </div>
        </div>
    )
}