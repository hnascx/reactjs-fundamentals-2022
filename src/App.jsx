import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Henrique Xavier"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos iure labore repellendus velit doloremque officia, tenetur optio rerum ex cum, beatae inventore dolorem modi atque ipsam eius aliquid aut?"
          />
          <br />
          <Post 
            author="Snowzinho"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos iure labore repellendus velit doloremque officia, tenetur optio rerum ex cum, beatae inventore dolorem modi atque ipsam eius aliquid aut?"
          />
        </main>
      </div>
    </div>
  )
}

