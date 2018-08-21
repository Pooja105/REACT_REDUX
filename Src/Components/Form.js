import React from 'react';

const Form = (props) => {
    return (
        <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City"  />
            &nbsp; &nbsp; &nbsp;
            <input type="text" name="country" placeholder="Country"  />
           <br/>
           <br/>
            <button> Get Weather </button>
        </form>
     </div>
    );
}
export default Form;