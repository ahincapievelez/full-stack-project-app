import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userRegister } from '../../services/userService';

let emptyForm = {
    username: '',
    password: '',
    email: ''
}

function Register({ setUser }) {
    console.log('setUser: ' + setUser)

    const navigate = useNavigate()

    let [form, setForm] = useState({emptyForm})

    const handleChange = (evt) => {
        setForm({ ...form, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        const token = await userRegister(form)

        if(!token){
            setForm(emptyForm)
            return
        }

        localStorage.setItem('token', token)

        const user = await userInfo()
        setUser(user)

        navigate('/dashboard')
    }
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-5 right-side">
                <img className="logo" src="logo.png" alt="Bostonian Post"/>
                <h5 style={{fontWeight: '400'}}>Create Your Account</h5>
                <form onSubmit={handleSubmit}>
                    <label className="labels form-label" htmlFor="username">Username</label>
                    <input className="form-control mb-3" type="text" id="username" name="username" onChange={handleChange} value={form.username}/>

                    <label className="labels form-label" htmlFor="email">Email</label>
                    <input className="form-control mb-3" type="text" id="email"  name="email" onChange={handleChange} value={form.email}/>

                    <label className="labels form-label" htmlFor="password">Password</label>
                    <input className="form-control mb-3" type="password" id="password" name="password" onChange={handleChange} value={form.password}/>

                    <div className="btn-login">
                        <button className="btn btn-primary" type="submit" >Create Account</button>
                    </div>
                </form>
                <p>Have an account? <a href="/login" style={{color: '#C24A25', textDecoration: 'underline'}}>Log in now</a></p>
                <p className="follow-txt">Follow Us</p>
                <div>
                    <a href="https://facebook.com"><img className="facebook" src="/facebook.svg" alt=''/></a>
                    <a href="https://linkedin.com"><img className="linkedin" src="/linkedin.svg" alt=''/></a>
                    <a href="https://instagram.com"><img className="instagram" src="/instagram.svg" alt=''/></a>
                </div>
                <p className="copyright-register">2023 Copyrights © <span style={{color: '#C24A25'}}>BOS Post</span></p>
            </div>
            <div className="col-7 left-side">
                <svg className="pic-register" xmlns="http://www.w3.org/2000/svg" width="409.3" height="473.823" viewBox="0 0 609.3 673.823">
                    <g id="Group_3" data-name="Group 3" transform="translate(1653.598 -1890.838)" opacity="0.261">
                    <path id="Path_3" data-name="Path 3" d="M774.311,787.9a41.381,41.381,0,1,1-50.147-30.167A41.444,41.444,0,0,1,774.311,787.9" transform="translate(-2085.845 1134.4)" fill="#fff"/>
                    <path id="Path_4" data-name="Path 4" d="M838.011,871.964A41.381,41.381,0,1,1,787.864,841.8a41.444,41.444,0,0,1,50.147,30.167" transform="translate(-2024.765 1215.078)" fill="#fff"/>
                    <path id="Path_5" data-name="Path 5" d="M908.011,861.464A41.381,41.381,0,1,1,857.864,831.3a41.444,41.444,0,0,1,50.147,30.167" transform="translate(-1957.644 1205.01)" fill="#fff"/>
                    <path id="Path_6" data-name="Path 6" d="M910.111,1013.864A41.381,41.381,0,1,1,859.964,983.7a41.444,41.444,0,0,1,50.147,30.167" transform="translate(-1955.63 1351.142)" fill="#fff"/>
                    <path id="Path_7" data-name="Path 7" d="M781.111,1089.564a41.381,41.381,0,1,1-50.147-30.167,41.444,41.444,0,0,1,50.147,30.167" transform="translate(-2079.325 1423.729)" fill="#fff"/>
                    <path id="Path_8" data-name="Path 8" d="M644.211,1020.264A41.381,41.381,0,1,1,594.064,990.1a41.444,41.444,0,0,1,50.147,30.167" transform="translate(-2210.594 1357.279)" fill="#fff"/>
                    <path id="Path_9" data-name="Path 9" d="M641.311,864.6a41.381,41.381,0,1,1-50.147-30.167A41.444,41.444,0,0,1,641.311,864.6" transform="translate(-2213.375 1207.946)" fill="#fff"/>
                    <path id="Path_10" data-name="Path 10" d="M856.476,1374.332l-1.567-.784L584.977,1237.015,579.1,927.9l1.763-.979L842.96,775.7l1.567.979,263.664,145.152v1.959l4.114,300.491Zm-264.84-141.627,264.644,133.987,249.365-146.328-4.114-294.615L842.96,783.34,585.76,931.626Z" transform="translate(-2194.846 1152.87)" fill="#fff"/>
                    <rect id="Rectangle_1" data-name="Rectangle 1" width="521.844" height="6.66" transform="translate(-1609.462 2386.078) rotate(-60.772)" fill="#fff"/>
                    <path id="Path_11" data-name="Path 11" d="M858.994,1305.2,577.7,852.5l395.692,15.083ZM590.041,859.552l266.407,428.8L964.773,873.656Z" transform="translate(-2196.189 1226.511)" fill="#fff"/>
                    <rect id="Rectangle_2" data-name="Rectangle 2" width="6.66" height="608.23" transform="translate(-1613.867 2085.33) rotate(-61.464)" fill="#fff"/>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    );
  }
  
  export default Register;