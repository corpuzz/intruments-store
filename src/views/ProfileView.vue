<template>
    <div class="about">
        <div class="about-content">
            <div class="btn-parent">
                <ul class="login-ul">
                    <p class="login-p">Login to your account</p>
                    <li>
                        <RouterLink to="/login"><button class="login-sign-up-btn btn">Login</button></RouterLink>
                    </li>
                    <p class="login-p or">or</p>
                    <p class="login-p">Create a new account</p>
                    <li>
                        <RouterLink to="/sign-up"><button class="login-sign-up-btn btn">Sign Up</button></RouterLink>
                    </li>

                </ul>
            </div>
        </div>


    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        /* border: 1px solid black; */
        min-height: 100vh;
        width: 100%;
        display: grid;
        place-items: start center;
    }

    .about-content {
        margin-top: 100px;
        width: 500px;
        padding: 1rem;
        height: 300px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        place-content: center;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    .login-sign-up-btn {
        width: 150px;
    }

    .btn-parent {
        margin-bottom: 0;
    }

    .login-ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .login-ul {
        text-align: center;
    }

    .login-p {
        text-align: center;
        margin: 1rem;
    }

    .or {
        margin-bottom: 0;
    }

    .btn {
        color: white;
        background-color: #007bff;
        padding: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn:hover {
        background: #005fc5;
    }
}
</style>
