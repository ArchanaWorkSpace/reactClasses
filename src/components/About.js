// import React, { useState } from 'react';
import React from 'react';

export default function About(props){

    // const [myStyle, updateMyStle] = useState({
    //     color: "black",
    //     backgroundColor:"white"
    // })
    // const [btnText, updateBtnText] = useState("Enable Dark Mode")

    let myStyle = {
      color: props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode==='light'?'white':'black',
    }

    // const toogleMode = ()=>{
    //     if (myStyle.color === 'black'){
    //         console.log("hii")
    //         updateMyStle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         updateBtnText("Enable Light Mode");
    //     }
    //     else{
    //         updateMyStle({
    //             color: "black",
    //             backgroundColor:"white"
    //         })
    //         updateBtnText("Enable Dark Mode");
    //     }
    // }
       

    return(
        <div className='container mt-4' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>About site</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  {/* <div className='button_enble mt-4'>
    <button onClick={toogleMode} type="button" className="btn btn-primary">{btnText}</button>
  </div> */}
</div>
</div>
    );
}