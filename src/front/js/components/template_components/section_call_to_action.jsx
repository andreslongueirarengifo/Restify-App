import React from "react";
import { Button } from "react-bootstrap";
import { Telephone } from "react-bootstrap-icons";

function Section_call_to_action(props) {
  const restaurantinfo = props.restaurantinfo
  const styles = props.Styles
  const phonecall = `tel:(+34)${restaurantinfo.phone_number}`
  return (
    <div class="row position-relative gx-0" 
    style={{
      backgroundImage: `url(${restaurantinfo.image_link})`,
      minWidth: '100%',
      height: '40vh',
      backgroundSize: 'cover',
      objectPosition: 'bottom',
    }}>
      <div style={{background:`rgba(185, 155, 107, 0.5)`}}></div>
    <div className="position-absolute top-50 start-50 translate-middle"> 
           <div className="row text-center">
            <h3 style={styles.color1}className="fs-1 p-4 text-center">
              Llámanos para hacer tu reserva
            </h3>
          </div>
               <div className="row">
                 <Button style={styles.back2} className="col-md-4 col-6 mx-auto my-3 fs-2 border-0" href={phonecall}>
                   <t style={styles.color1}>Haz tu reserva ahora </t> 
                   <Telephone style={styles.color1}/>
                 </Button>
                </div> 
       </div>  
    </div> 


  );
}

export default Section_call_to_action;
