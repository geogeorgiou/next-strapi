import React from 'react'
import styles from '../../styles/Layout.module.css'
import { Nav } from '../Nav'
import { Header } from '../Header'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}
