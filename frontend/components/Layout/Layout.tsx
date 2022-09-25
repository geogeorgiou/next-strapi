import styles from "../../styles/Layout.module.css"
import React from "react";
import {Nav} from "../Nav";

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    );
};

type LayoutProps = {
    children: React.ReactNode
}
