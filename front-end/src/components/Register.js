import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short! Password must be atleast 6 characters")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  user_name: Yup.string().required("Required"),
});

const Register = () => {
  let Navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          user_name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              "http://localhost:8000/api/signup",
              values
            );
            if (response.status === 200) {
              Navigate(response.data.url);
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <section className="h-screen">
              <div className="container px-6 py-12 h-full">
                <h1 className="text-center text-4xl text-blue-600">SIGN UP</h1>
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                  <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                      aria-hidden
                      className="w-full"
                      alt="Phone image"
                    />
                  </div>
                  <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                      <Field
                        type="text"
                        name="user_name"
                        placeholder="Username"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                      {errors.user_name && touched.user_name ? (
                        <small className="text-red-600">{errors.email}</small>
                      ) : null}
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                      {errors.email && touched.email ? (
                        <small className="text-red-600">{errors.email}</small>
                      ) : null}
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="mb-6">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                      {errors.password && touched.password ? (
                        <small className="text-red-600">
                          {errors.password}
                        </small>
                      ) : null}
                    </div>
                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Sign in
                    </button>
                    <p className="mt-3 text-gray-500">
                      Don't have an account?{" "}
                      <Link to="/login" className="text-blue-600">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
