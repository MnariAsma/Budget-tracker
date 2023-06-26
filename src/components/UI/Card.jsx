import "./Card.css"
export default function Card(props){
    const Classes = ['Card', props.className].join(' ');
    return(
       
        <div className= {Classes}>
            {props.children}
        </div>
    )
}