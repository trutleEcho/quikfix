import Link from "next/link";
import styles from "../styles/Navbar.module.css"

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
            brand-logo
            </div>
        </nav>
        
        </>
    )
}