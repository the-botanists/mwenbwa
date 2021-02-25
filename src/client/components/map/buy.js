// import {Formik, Field, Form} from "formik";

// const Login = () => (
//     <div>
//         <Formik
//             initialValues={{
//                 username: "",
//                 treeid: "",
//                 treevalue: "",
//             }}
//             onSubmit={async values => {
//                 axios
//                     .post("/api/trees/buy", values)
//                     .then(res => {
//                         console.log(res.data);
//                     })
//                     .catch(error => {
//                         console.log(error.response);
//                     });
//             }}>
//             {({isSubmitting}) => (
//                 <Form>
//                     <Field name={"username"} type={"hidden"} value={name} />
//                     <Field name={"treeid"} type={"hidden"} value={name} />
//                     <Field name={"treevalue"} type={"hidden"} value={name} />
//                     <button type={"submit"} disabled={isSubmitting}>
//                         {"Buy"}
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     </div>
// );
