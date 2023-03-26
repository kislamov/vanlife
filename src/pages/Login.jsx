import {Form, redirect, useActionData, useLoaderData, useNavigation} from "react-router-dom";
import {loginUser} from "../api";

export const action = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect("/host")
    } catch(err) {
        return err.message
    }
}

export const loader = async ({ request }) => {
    return new URL(request.url).searchParams.get("message");
}

const Login = () => {
    const data = useActionData()
    const navigation = useNavigation()
    const { state: status } = navigation
    const message = useLoaderData()

    return (
        <div className="login-container">
            { message && <h3 className="login-first">{message}</h3> }
            <h1>Sign in to your account</h1>
            { data?.error && <h3 className="login-first">{data.error}</h3> }
            <Form
                action="/login"
                method="post"
                className="login-form"
            >
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
