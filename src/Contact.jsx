import React,{ useState } from 'react';


const Contact =()=>{
    const [data, setData]  = useState({
        email:"",
        name:"",
        phone:"",
        msg:"",
    });

    const InputEvent = (event)=>{
     const {name, value} =event.target;

     setData((preVal)=>
     {
         return{
         ...preVal,
         [name]:value,
         };
     });

    };

    const formSubmit = (e) =>{
     e.preventDefault();
     alert(` My Email is ${data.name}, My Name is ${data.name} , MY Phone Number is ${data.phone}, Here is MY Message ${data.msg}`);
    }
    return(
<>
<div className="my-3">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
<div className="row">
<div className="col- md-6 col-10 mx-auto">
<form style={{width:"300px", margin:"auto"}} onSubmit={formSubmit}>
  <div className="mb-3">
    <label htmlFor="formControlInput1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
     autoComplete="off"
      id="formControlInput1"
      name="email"
      value={data.email}
      onChange={InputEvent}
      placeholder="Enter Your Email" />
  </div>

  <div className="mb-3">
    <label htmlFor="formControlInput1" className="form-label">Name</label>
    <input type="text" 
    className="form-control"
     id="formControlInput1"
     name="name"
     value={data.name}
     onChange={InputEvent}      
      placeholder="Enter Your Name" 
        autoComplete="off"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="formControlInput1" className="form-label">Phone Number</label>
    <input type="text" className="form-control" 
    id="formControlInputt1"
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    autoComplete="off"
     placeholder="Enter Your Phone Number"
    />
  </div>
  
  <div className="mb-3">
  <label htmlFor="exampleFromControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control"
   name="msg"
    value={data.msg}
    onChange={InputEvent}
   placeholder="Leave a comment here"
   autoComplete="off" id="exampleFromControlTextarea1"
    rows="3">

    </textarea>
</div>
  <button type="submit" className="btn btn-outline-primary">Submit</button>

</form>

</div>
</div>

</div>

</>
    );
};

export default Contact;
