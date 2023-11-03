import styles from "./styles.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
	<>
		
			
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Create Exercise</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
		
   
	</>
	);
};

export default Main;