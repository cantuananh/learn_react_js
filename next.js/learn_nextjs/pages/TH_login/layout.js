import Link from "next/link";
import styles from "../../styles/Layout.module.css";

export default function Layout({ children }) {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <div>Home</div>
                    </Link>
                </li>
                <li>
                    <Link href="/TH_login/about">
                        <div>About Us</div>
                    </Link>
                </li>
                <li>
                    <Link href="/TH_login/blog">
                        <div>Blog</div>
                    </Link>
                </li>
                <li>
                    <Link href="/TH_login/login">
                        <div>Logout</div>
                    </Link>
                </li>
            </ul>
            <div className={styles.container}>{children}</div>
        </div>
    );
}
