import { GoogleLogout } from 'react-google-login';

const clientId = "482425086379-hfplsgsjumemdcmk34i9f2jt1l2oel1m.apps.googleusercontent.com";

function Logout(){

    const onSuccess = () =>{
        console.log("Log out Successfull!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText={"LogOut"}
                onLogoutSuccess={onSuccess}
            />
                
        </div>
    )
}

export default Logout;