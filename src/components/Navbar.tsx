import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import Image from "next/image";

export default function Navbar() {
    return(
        <>
        <nav className={styles.navbar}>
            <div >
               <ul className={styles.navbar_row}>
                <li>
                <Link legacyBehavior href="/">
                    <a>home</a>
                </Link>
                </li>
                <li>
                <Link legacyBehavior href="/shop">
                    <a>shop</a>
                </Link>
                </li>
                <li>
                <Link legacyBehavior href="/antivirus">
                    <a>antivirus</a>
                </Link>
                </li>
                <li>
                <Link legacyBehavior href="/laptops">
                    <a>laptops</a>
                </Link>
                </li>
                <li>
                <Link legacyBehavior href="/desktops">
                    <a>desktops</a>
                </Link>
                </li>
               </ul>
            </div>
            <div id="brand-logo" className={styles.brand_logo}>
            <Image src='/brand_logo2.png' height={45} width={45} alt="brand_logo"></Image>
            <p className="pl-6">QUIK FIX COMPUTER SOLUTIONS</p>
            </div>
        </nav>
        
        </>
    )
}