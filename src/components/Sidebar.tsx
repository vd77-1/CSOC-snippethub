import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
        <h3>Categories</h3>
        <ul className={styles.categorylist}>
        <li>📚Learnings</li>
        <li>👨‍💻Code Snippets</li>
        <li>😍Favourites</li>
        <li>😭Bad time</li>

        </ul>
        <div className = {styles.footer}>
            <p>-By Vaibhav </p>
        </div>
        </aside>
    )
}

export default Sidebar;