import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

const AddaPsychiatrist = ()=> {
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const [address,setAddress] = useState("")
    const [phoneNo,setPhoneNo] = useState("")

    const postData = ()=>{
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            alert("Invalid Email")
            return
        }
        if(!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phoneNo))
        {
            alert("Invalid Phone Number")
            return
        }
        fetch('/add', {
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email,
                age:age,
                gender:gender,
                address:address,
                phoneNo:phoneNo,
                role:"psychiatrist"           
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                alert(data.message)
                history.push('/admin')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="signin_new_body">
        <div className="container signin_container right-panel-active" id="container">
            <div className="signin_form-container signin_sign-up-container">
                <div className="signin_form">
                    <h1 className='signin_h1'>Add a Psychiatrist</h1>
                    <br></br>
                    <input className="signin_input" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    <input className="signin_input" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input className="signin_input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <input className="signin_input" type="text" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} />
                    <input className="signin_input" type="text" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
                    <input className="signin_input" type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    <input className="signin_input" type="text" placeholder="Phone Number" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}/>
                    <br></br>
                    <button className="signin_button" onClick={()=>postData()}>Add Psychiatrist</button>
                </div>
            </div>
            <div className="signin_form-container signin_sign-in-container">
            <div className="signin_form">
                    <h1 className='signin_h1'>Add a Psychiatrist</h1>
                    <br></br>
                    <input className="signin_input" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    <input className="signin_input" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input className="signin_input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <input className="signin_input" type="text" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} />
                    <input className="signin_input" type="text" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
                    <input className="signin_input" type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    <input className="signin_input" type="text" placeholder="Phone Number" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}/>
                    <br></br>
                    <button className="signin_button" onClick={()=>postData()}>Add Psychiatrist</button>
                </div>
            </div>
            <div className="signin_overlay-container">
                <div className="signin_overlay">
                    <div className="signin_overlay-panel signin_overlay-left">
                        <h1 className='signin_h1'>Admin Panel</h1>
                        <p className="signin_p">Add Verified Psychiatrist</p>
                    </div>
                    <div className="signin_overlay-panel signin_overlay-right">
                        <h1 className='signin_h1'>Hello, Friend!</h1>
                        <p className="signin_p">Enter your personal details and start your journey with us</p>
                        <Link to='/signup'><button className="signin_button ghost" id="signUp">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddaPsychiatrist
