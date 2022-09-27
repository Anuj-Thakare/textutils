import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState( {
        color: 'black',
        backgroundColor: 'white'
        
    }) 
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = ()=>{
        if(myStyle.color == 'black'){
            setMyStyle( {
                color: 'white',
                backgroundColor: 'black'
               
            }) 
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle ( {
                color: 'black',
                backgroundColor: 'white'
            }) 
            setBtnText("Enable Dark Mode");
        }
    }
    return (
        
        <div className="container" style={myStyle}>
                <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" style={myStyle}type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            Some placeholder content for the second accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-success">{btnText}</button>
            </div>
        </div>
    )
}
// import React from 'react'
// import propType from 'propType';
// export default function About(props) {
//   return (
// <div className="container" style={{color: props.moded==='dark'?'white':'black'}}>
//   <h1>ABOUT US</h1>
//     <div class="accordion" id="accordionExample">
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingOne">
//         <button class="accordion-button" style={{color: props.moded==='dark'?'white':'black', backgroundColor: props.moded==='dark'?'#655050':'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//           FREE TO USE
//         </button>
//       </h2>
//       <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//         <div class="accordion-body" style={{backgroundColor: props.moded==='dark'?'#a86c6c':'white'}}>
//           <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//         </div>
//       </div>
//     </div>
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingTwo">
//         <button class="accordion-button collapsed" style={{color: props.moded==='dark'?'white':'black', backgroundColor: props.moded==='dark'?'#655050':'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//           VERY EASY TO USE
//         </button>
//       </h2>
//       <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//         <div class="accordion-body" style={{backgroundColor: props.moded==='dark'?'#a86c6c':'white'}}>
//           <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//         </div>
//       </div>
//     </div>
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingThree">
//         <button class="accordion-button collapsed" style={{color: props.moded==='dark'?'white':'black', backgroundColor: props.moded==='dark'?'#655050':'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//           OUR TEAM
//         </button>
//       </h2>
//       <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//         <div class="accordion-body" style={{backgroundColor: props.moded==='dark'?'#a86c6c':'white'}}>
//           <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//         </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }