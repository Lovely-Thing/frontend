 

export default function SmallCard(props) {
    return(
    <div className="smallCard">
        <div className='smallCard_title'>{props.cardTitle}</div>
        <div className='smallCard_body'>
            <div className='smallCard_img'>
                <div>
                <img
                    src={props.image}
                    alt="card img"
                />
                </div>
            </div>
            <div className='smallCard_text'>
                {props.children}
            </div>
        </div>
    </div>
    )
}