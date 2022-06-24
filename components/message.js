 

export default function Message(props) {
    return(
    <div className="message-container">
        <div>
            <img
                src={props.image}
                alt="message user"
            />    
        </div>
        {props.children}
    </div>
    )
}