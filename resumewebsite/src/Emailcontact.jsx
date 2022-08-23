import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';
// npm i @emailjs/browser

const Emailcontact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unijk6f",
        "template_i33ccxy",
        form.current,
        "qfNn0LBb5Gbe2CWTD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='containercontact2'>
<div className="boxcontact ">
<h1 className="titlecontact">Contact Me</h1>
</div>

      <form ref={form} onSubmit={sendEmail}>

      <div className="boxcontact ">

        <div className="boxcontact detailsinfo">
        
        <div className="boxcontact">
        <input type="text" name="user_name" placeholder="Name"/>
        </div>

        <div className="boxcontact">
        <input type="email" name="user_email" placeholder="Email" />
</div>
<div className="boxcontact">

        <input type="text" name="user_phone" placeholder="Phone"/>

</div>


</div>

   <textarea name="message" placeholder="Message"/>
    <input className="submit" type="submit" value="Send" />

       


        
       

</div>


      </form>
    
      
      <div className="boxcontact"><footer>
  <p className='copyright'>Copyright &copy; 2022. The Official Website of Besher Hasan</p>
</footer></div>
    </div>
  
  );
};

export default Emailcontact;
