import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-area px-5 py-4 mx-4'>
            <div className="number-1">
                <h3>Difference between authentication and authorization?</h3>
                <p>1. Authentication checks the person's identity to grant access to the system . Authorization checks the person's permission to access the resource.</p>
                <p>2. Authentication process perform start at the very first step. Authorization process perform start usually after authentication.</p>
            </div>
            <div className="number-2">
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>I am Using firebase for authentication.Firebase authentication system has many methods as like email-password method,google sign in method,facebook sign in method,github sign in method etc.so i think to build authintication system in my website then firebase is the best option.</p>
                <p>Other authentication system: <br />
                    1. Amazone cognito <br />
                    2. OneLogin <br />
                    3. Okta <br />
                    4. Stytch <br />
                    5. Ory <br />
                    6. Supabase <br />
                    7. Auth0 <br />
                    8. Frontegg <br />
                </p>
            </div>
            <div className="number-3">
                <h3>What other services does firebase provide other than authentication</h3>
                <p>Firebase provides functionalities and help backend development of build three platform ios,android,web .
                Firebase service functionalities are :
                firebase provide two type of database. one is real time database and firebase cloud firestore. both of this real time savers.Realtime database stores data in a JSON object and provide it all connected clients in the realtime.Firebase cloud firestore save data in documents and collection.Both are flexible.Firebase cloud messaging used to send notification. Its also using for hosting.if you deploy your project in the live site then firebase is the easiest option. evenly you can use custom domain for hosting in firebase.</p>
            </div>
        </div>
    );
};

export default Blogs;