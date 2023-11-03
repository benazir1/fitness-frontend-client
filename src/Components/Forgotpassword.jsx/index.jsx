import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Forgotpassword = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
      console.log(email)
      axios.post("https://fitnessbackend-0wev.onrender.com/api/auth/forgotpassword",
          {
              email: email,
          })
          .then(res => {
              console.log(res.data)
              if (res.data.code === 200)
               {
                alert("check your email");
                  navigate('/login')
              } else {
                  alert('Email / Server Error.')
              }
          }).catch(err => {
              console.log(err)
          })

	}
  return (
    <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Forgot password</h1>
                        <input
							type="text"
							placeholder="Email"
							name="email"
							onChange={(e)=>{
								setEmail(e.target.value);
							}}
							value={email}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Send Mail
						</button>
					
					</form>
				</div>
				<div className={styles.right}>
					
				</div>
				
			</div>
                        </div>
  )
}

export default Forgotpassword
