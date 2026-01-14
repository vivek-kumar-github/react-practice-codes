import { useFormik } from "formik";

export default function FormikFormValiditationComponent() {
    function verifyUserDetails(userDetails) {
        const errors = {};
        if (userDetails.UserName === "") {
            errors.UserName = "User Name Required";
        } else if (userDetails.UserName.length < 3) {
            errors.UserName = "Name too Short..";
        } else if (userDetails.UserName.length > 10) {
            errors.UserName = "Name too Long..";
        }
        if (userDetails.Age == "") {
            errors.Age = "Age Required";
        } else if (isNaN(userDetails.Age)) {
            errors.Age = "Age must be a Number";
        }
        if (userDetails.Email === "") {
            errors.Email = "Email Required";
        } else if (userDetails.Email.indexOf("@") <= 2) {
            errors.Email = "Invalid Email";
        }
        if (userDetails.Mobile === "") {
            errors.Mobile = "Mobile Required";
        } else if (/\+91\d{10}/.test(userDetails.Mobile)) {
            errors.Mobile = "Invalid Mobile format (+91XXXXXXXXXX)";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            UserName: "",
            Age: "",
            Email: "",
            Mobile: ""
        },
        validate: verifyUserDetails,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <>
            <h1>FormikFormValiditationComponent</h1>
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                    <h3>Register User</h3>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input name="UserName" onChange={formik.handleChange} type="text" /></dd>
                        <dd className="text-danger">{formik.errors.UserName}</dd>
                        <dt>Age</dt>
                        <dd><input name="Age" onChange={formik.handleChange} type="text" /></dd>
                        <dd className="text-danger">{formik.errors.Age}</dd>
                        <dt>Email</dt>
                        <dd><input name="Email" onChange={formik.handleChange} type="text" /></dd>
                        <dd className="text-danger">{formik.errors.Email}</dd>
                        <dt>Mobile</dt>
                        <dd><input name="Mobile" onChange={formik.handleChange} type="text" /></dd>
                        <dd className="text-danger">{formik.errors.Mobile}</dd>
                    </dl>
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}