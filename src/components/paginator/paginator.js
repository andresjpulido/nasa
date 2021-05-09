import './paginator.scss'

export default function Paginator(props) {

    const currentPage = props.currentPage;
    const totalItems = props.totalItems;
    const itemsPerPage = props.itemsPerPage;

    console.log(currentPage, totalItems)

    if (totalItems <= itemsPerPage) {
        return (
            <div></div>
        )
    } else {

    }
    return (
        <ul className="paginator">
            <li>Previous</li>
            <li>1</li>
            <li className="selected">2</li>
            <li>3</li>
            <li>4</li>
            <li>...</li>
            <li>9</li>
            <li>10</li>
            <li>Next</li>
        </ul>
    )


}