import Link from "next/link" 

const pcLogo = '../img/logo_pc.png' 


export default function Logo() {
    return(
        <>
            <Link href="/" passHref>
                <div className="toplogo-img-container">
                    <img
                        src={pcLogo}
                        alt="Logo" 
                    />
                </div>
            </Link>
        </>
    )
}