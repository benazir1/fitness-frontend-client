import { useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import styles from "./styles.module.css";

const Resetpassword = () => {
    const navigate = useNavigate()

     const [password, setPassword] = useState('')
     const{id,token} =useParams();
     const handleSubmit = (e)=>{
        e.preventDefault()
        console.log( password)
        axios.post(`http://localhost:5000/api/auth/resetpassword/${id}/${token}`,
            {
                
                password: password,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                  alert('Password Updated.');
                    navigate('/login');
                    
                } else {
                    alert('server err ')
                }
            }).catch(err => {
                console.log(err)
            })
	};
  return (
    <div className={styles.login_container}>
    <div className={styles.login_form_container}>
        <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Reset Password</h1>
               
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e)=>{
                        setPassword(e.target.value);
                     }}
                        value={password} 
                    required
                    className={styles.input}
                />
             {/* //   {error && <div className={styles.error_msg}>{error}</div>} */}
                <button onClick={handleSubmit} className={styles.green_btn}>
                    Change password
                </button>
               
            </form>
        </div>
        <div className={styles.right}>
            
        </div>
    </div>
</div>
  )
}

export default Resetpassword