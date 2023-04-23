export default function ListItems() {
    const items = ["item1", "item2", "item3", "item4"]
    let list = items.map( item => {
        return (
            <li className={item}>
                {`${item[0].toUpperCase()}${item.slice(1,4)} ${item[4]}`}
            </li>
        )
    } )
    return (
        <ul class="nav-items">
            {list}
        </ul>
    )
}