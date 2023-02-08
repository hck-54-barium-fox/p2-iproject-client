<script>
export default {

}
</script>

<template>
    <section class="container" id="register-section">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
                <div class="wrap d-md-flex">
                    <div class="login-img"></div>
                    <div class="login-wrap p-4 p-md-5">
                        <div class="d-flex">
                            <div class="w-100">
                                <h3 class="mb-4">Register</h3>
                            </div>
                        </div>
                        <form class="signin-form">
                            <div class="form-group mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" name="email" id="email" class="form-control" placeholder="Your Email Adress" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" name="username" id="username" class="form-control" placeholder="Your User Name" required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" name="password" id="password" class="form-control" placeholder="Your Password" required>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-primary rounded submit px-3">Register</button>
                            </div>
                        </form>
                        <p class="text-center">OR</p>
                        <div id="googleRegister" class="d-flex justify-content-center"></div>
                        <p class="text-center mt-3">
                            Already has an account?
                            <a href="#">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>