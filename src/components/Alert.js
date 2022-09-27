import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}           
        </div>}
        </div>
    )
}

export default Alert
// import React from 'react'

// export default function Alert(props) {
//     const capital=(word)=>{
//           const lower=word.toLowerCase();
//           return lower.charAt(0).toUpperCase()+ lower.slice(1);
//     }
//   return (
     
//     props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show `} role="alert">
//    <b>{capital(props.alert.typ)}</b> :{props.alert.msg}

//   </div>
//   )
// }