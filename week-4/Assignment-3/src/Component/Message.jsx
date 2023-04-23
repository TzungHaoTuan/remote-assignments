import { useEffect, useRef } from "react"

export default function Message() {
    const ref = useRef()

    useEffect(() => {
        const handleClick = event => {
          event.target.textContent = "Have a Good Time!"
        }
        const element = ref.current;
        element.addEventListener('click', handleClick);  
    }, [])
   
    return (
        <section class="main-message">
            <h1 ref={ref} id="message-text">Welcome Message</h1>
        </section>
    )
}