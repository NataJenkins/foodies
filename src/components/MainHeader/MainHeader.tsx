import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBg from "./MainHeaderBg";
export default function MainHeader() {
    return (
        <>
            <MainHeaderBg />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={LogoImg} alt="logo" priority />
                    Next Level Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies Communnity</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
