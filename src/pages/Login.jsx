import {Form, useActionData, useLocation, useNavigate, useNavigation} from "react-router-dom";
import {loginUser} from "../api";

export const action = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        return await loginUser({email, password})
    } catch (err){
        return {
            error: err.message
        }
    }
}

const Login = () => {
    const data = useActionData()
    const navigation = useNavigation()
    const { state: status } = navigation

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || "../host"

    if (data?.token) {
        localStorage.setItem("loggedin", true)
        navigate(from, {replace: true})
    }


    return (
        <div className="login-container">
            { location.state?.message && <h3 className="login-first">{location.state.message}</h3> }
            <h1>Sign in to your account</h1>
            { data?.error && <h3 className="login-first">{data.error}</h3> }
            <Form action="/login" method="post"className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={ status === "submitting" }>{status === "submitting"
                    ? "Logging in..."
                    : "Log in"
                }</button>
            </Form>
        </div>
    );
};

export default Login;
