import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function YupFormValidationComponent() {
    return (
        <div className="container-fluid">
            <h3>Register User</h3>
            <Formik initialValues={
                {
                    UserName: "",
                    Email: "",
                    Age: "",
                    City: ""
                }
            }
                validationSchema={
                    yup.object({
                        UserName: yup.string().min(4, "Name too Short").max(10, "Name too Long").required("Name Required"),
                        Email: yup.string().email("Invalid Email").required("Email Required"),
                        Age: yup.number().required("Age Required"),
                        City: yup.string()
                    })
                }
                onSubmit={
                    values => {
                        alert(JSON.stringify(values))
                    }
                }
            >
                <Form>
                    {
                        <div>
                            <dl>
                                <dt>User Name</dt>
                                <dd><Field name="UserName" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>
                                <dt>Email</dt>
                                <dd><Field name="Email" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>
                                <dt>Age</dt>
                                <dd><Field name="Age" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                                <dt>City</dt>
                                <dd><Field name="City" as="select">
                                    <option>Select</option>
                                    <option>Delhi</option>
                                    <option>Hyderabad</option>
                                </Field></dd>
                            </dl>
                            <button>Register</button>
                        </div>
                    }
                </Form>
            </Formik>
        </div>
    )
}