import { useState, useEffect, useRef } from "react"

export default function Header() {
    const items = ["item1", "item2", "item3", "item4"]
    let list = items.map( item => {
        return (
            <li className={item}>
                {`${item[0].toUpperCase()}${item.slice(1,4)} ${item[4]}`}
            </li>
        )
    } )


    const [toggle, setToggle] = useState(false)

   const handleClick = () => {
    setToggle(!toggle)
   }

    return (
        <header>
            <section>
                <p>Website Title / Logo</p>
            </section>
            <nav>
                <ul className={`nav-items ${toggle ? "nav-items-fixed" : ""}`} >
                    {list}
                </ul>
            </nav>
            <div onClick={handleClick} className={`bar-container ${toggle ? "change" : ""}`}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </header>
    )
}