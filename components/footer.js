/* eslint-disable @next/next/no-img-element */
import Link from "next/link" 
const footerLogo = '../img/footerLogo_pc.png' 

export default function Footer() {
    return(
        <footer>
            <div className="container">
                <div>
                    <Link href="/" passHref> 
                        <div className="footer-logo-container">
                            <img
                                src={footerLogo}
                                alt="Logo" 
                            /> 
                        </div>
                    </Link>
                    <Link href={'/privacy'} passHref>
                        <p>プライバシーポリシー</p>
                    </Link>                    
                </div>
            </div>
        </footer>
    )
}