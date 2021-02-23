// import react from 'react';
// import {Formik, Field, Form}  from 'formik';

// const BuyTreeForm = (selectTreeID) => {

//     <Formik
//     initialValues={{
//             _id: selectTreeID,
//             userName: '',
//             treeID: '',
//             treeValue: sessionStorage.getItem("username"),
//         }},
//         onSubmit={async values => {
//             console.log(value)
//         }}>
//     return (
//         <form onSubmit={formik.handleSubmit}>
//           <label htmlFor={"treeID"}>{"tree ID"}</label>
//           <input
//             id={"treeID"}
//             name={"treeID"}
//             type={"text"}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={selectTreeID}
//           />
//           {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

//           <label htmlFor={"userName"}>{"username"}</label>
//           <input
//             id={"userName"}
//             name={"userName"}
//             type={"text"}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.userName}
//           />
//           {formik.errors.lastName ? <div>{formik.errors.userName}</div> : null}

//           <label htmlFor={"treeValue"}>{"Email Address"}</label>
//           <input
//             id={"treeValue"}
//             name={"treeValue"}
//             type={"text"}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={sessionStorage.getItem("username")}
//           />
//           {formik.errors.email ? <div>{formik.errors.treeValue}</div> : null}

//           <button type={"submit"}>{"Buy"}</button>
//         </form>
//       );
// }
// export {BuyTreeForm};
