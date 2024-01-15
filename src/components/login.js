    import { GoogleLogin } from 'react-google-login';

    const clientId = "482425086379-hfplsgsjumemdcmk34i9f2jt1l2oel1m.apps.googleusercontent.com";


    function Login(){

        const onSuccess = (res) =>{
            console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
        }

        const onFailure = (res) =>{
            console.log("LOGIN FAILED! res: ", res);
        }

        return(
            <div id="signInButton">
                <GoogleLogin 
                    clientId={clientId}
                    buttonText='Login'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    redirect_uri="http://localhost:3000"
                    isSignedIn={true}
                />
            </div>
        )
    }

    export default Login;
