import Link from "next/link"
import Logo from "./logo"
import CustomButton01 from "./customButton01"
import LineSpace from "./lineSpace"

export default function Header(props) {
    return(
        <>
            <div className="container-fluid">
                <div className="topbar-content flex-csb">
                    <Logo />
                    <Link href={'/contactus'} passHref>
                        <div>
                            <CustomButton01 name="資料請求する" className="customBtn01"/>
                        </div>
                    </Link>                                    
                </div>
            </div>
            <LineSpace className={"brownSpace " +(props.homespace)} title={props.LineSpaceTitle}/>
        </>
    )
}