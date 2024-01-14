import { AppBar } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
    return(
        <AppBar className="p-2 flex flex-row flex-wrap bg-blue-300 font-sans uppercase">
            <Link href="/" className="p-2">home</Link>
            <Link href="/about" className="p-2">about us</Link>
        </AppBar>
    )
}