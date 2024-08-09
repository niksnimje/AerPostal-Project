import React from 'react';
import { auth, provider, provider2 } from '../FireBase/Firebas';
import { signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import FacebookLogin from 'react-facebook-login';
import './Css/CreateAccount.css'; // Import the CSS file

function CreateAccount() {
    
    const hendelogin = () => {
        signInWithPopup(auth, provider, provider2)
        .then((res) => {
            console.log(res)
            window.location.href = '/women';
        })
        .catch((err) => console.log(err));
    };

    return (
        <>
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6">
                    <form>
                        <h3>Fill the Details</h3>
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        <input type="number" placeholder='Number' />
                        <input type="number" placeholder='Age' />
                        <select>
                            <option value="">Select Birthday Month</option>
                            <option value="">January</option>
                            <option value="">February</option>
                            <option value="">March</option>
                            <option value="">April</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">August</option>
                            <option value="">September</option>
                            <option value="">October</option>
                            <option value="">November</option>
                            <option value="">December</option>
                        </select>
                        <select>
                            <option value="">Select Birthday Date</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <input type="email" placeholder='Enter Your Email' />
                        <input type="password" placeholder='Enter Your Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="col-md-6">
                    <h3>Continue with</h3>
                    <div className="google-button">
                        <GoogleButton onClick={hendelogin} />
                    </div>
                    <div className="facebook-button">
                        <FacebookLogin
                           onClick={hendelogin}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CreateAccount;
