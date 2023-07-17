import '../styles/ContainerList.css'
export function ListTodos (props) {
    return (
        <ul className="containerList">
            {props.children}
        </ul>
    )
}