"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation(){
    const path = usePathname();
    const [count, setCount ] = useState(0);
    console.log(path);
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🏡" : ""}
                </li>
                <li>
                    <Link href="/about-us">About us</Link> {path === "/about-us" ? "👩🏻‍💻" : ""}
                </li>
            </ul>
        </nav>
    );
}