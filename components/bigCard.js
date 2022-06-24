
const polygon = '../img/top/polygon.png'

export default function BigCard(props) {
    return(
    <div className="shopIntroCard">
        <div className="image_wrap">
            <img src={props.image} alt="introduction"/>
        </div>
        <div className="introducton_cont">
            <div className="mark_title">
                <div className="title_text">
                    {props.markTitle}
                </div>
            </div>
            <div>
                {props.topChild}
            </div>
            <div className="polygon_container">
                <img src={polygon} alt="polygon" />
            </div>
            <h3>qlubで解決</h3>
            <div>
                {props.bottomChild}
            </div>
        </div>
    </div>
    )
}