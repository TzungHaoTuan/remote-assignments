import { useState, useEffect, useRef } from "react"

export default function SecondaryContent() {

    const [isClicked, setIsClicked] = useState(false)

    const secondaryContent = document.querySelector(".secondary-content")
    const handleClick = prevState => {
        setIsClicked(!prevState)
        secondaryContent.classList.toggle("more")
        
    }


    // const ref = useRef()

    // useEffect(() => {
        
    //     const button = ref.current.children[0]
    //     const content = ref.current.children[1]

    //     button.addEventListener('click', handleClick) 
    //     const handleClick = () => {
    //         content.classList.toggle("more")
    //       }
    // }, [])

  

    return (
        <div>
            <button  onClick={handleClick} className="cta">Call to Action</button>
            <div   className="secondary-content" >
                <p class="content-box">Content Box 1</p>
                <p class="content-box">Content Box 2</p>
                <p class="content-box">Content Box 3</p>
                <p class="content-box">Content Box 4</p>
            </div>
        </div>
    )
}