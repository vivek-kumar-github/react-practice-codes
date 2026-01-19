import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function YupFormValidationComponent() {
    return (
        <div className="container-fluid">
            <h1>YupFormValidationComponent</h1>
            <h3>Register User</h3>
            <Formik
                initialValues={{
                    UserName: "",
                    Email: "",
                    Age: "",
                    City: ""
                }}
                validationSchema={
                    yup.object({
                        UserName: yup.string().min(4, "Name too Short").max(10, "Name too Long").required("Name Required"),
                        Email: yup.string().email("Invalid Email").required("Email Required"),
                        Age: yup.number().required("Age Required"),
                        City: yup.string().required("City Required")
                    })
                }
                onSubmit={values => {
                    alert(JSON.stringify(values))
                }}
            >
                {
                    fields => (
                        <Form>
                            <div>
                                <dl>
                                    <dt>User Name</dt>
                                    <dd><Field name="UserName" type="text" /></dd>
                                    <dd className="text-danger"><ErrorMessage name="UserName" /></dd>

                                    <dt>Email</dt>
                                    <dd><Field name="Email" type="text" /></dd>
                                    <dd className="text-danger"><ErrorMessage name="Email" /></dd>

                                    <dt>Age</dt>
                                    <dd><Field name="Age" type="text" /></dd>
                                    <dd className="text-danger"><ErrorMessage name="Age" /></dd>

                                    <dt>City</dt>
                                    <dd>
                                        <Field name="City" as="select">
                                            <option value="">Select City</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Hyderabad">Hyderabad</option>
                                        </Field>
                                    </dd>
                                    <dd className="text-danger"><ErrorMessage name="City" /></dd>
                                </dl>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!fields.isValid}
                                >
                                    Register
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
            <hr />
        </div>
    )
}