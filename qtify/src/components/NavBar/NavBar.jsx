/*import React, { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { showToast } from "../../config/helper-methods";
import { useNavigate } from "react-router-dom";

const NavBar = ({ data, logo = false, search = false, feedback = false }) => {
	const [isButtonOpen, setIsButtonOpen] = useState(false);
	const navigate = useNavigate();

	const _toggleButton = (value = false) => {
		setIsButtonOpen(value);
	};

	const _onSuccess = () => {
		// show toast
		showToast("Feedback Submitted", "success");
	};

	return (
		<div className={styles.wrapper}>
			<nav className={styles.navbar}>
				<div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
					{logo ? <Logo id={styles.logo} /> : null}
				</div>
				{search ? (
					<div className={styles.searchWrapper}>
						<SearchBar
							placeholder="Search a album of your choice"
							data={data}
						/>
					</div>
				) : null}

				{feedback ? (
					<div
						className={styles.nav_link}
						onClick={() => _toggleButton(true)}>
						Give Feedback
					</div>
				) : null}
			</nav>
			<Button
				isOpen={isButtonOpen}
				onSuccess={_onSuccess}
				onDismiss={_toggleButton}
			/>
		</div>
	);
};

export default NavBar;*/
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
//import FeedbackIcon from "../../assets/feedback- icon.png";


function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
        <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button text="Give Feedback"  />
    </nav>
  );
}

export default Navbar;