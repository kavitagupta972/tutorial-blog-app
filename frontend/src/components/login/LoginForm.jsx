const LoginForm = () => {

    return (
        <>
        <h1> Enter Login Details</h1>
        <form>
            <label>User Name : </label>
            <input type = "text" value = "" placeholder = "Enter user name..."/>
            <label>Password : </label>
            <input type = "password" placeholder = "Enter password..."/>
            <input type = "submit">Login</input> 
        </form>
        </>
    );
}

export default LoginForm;