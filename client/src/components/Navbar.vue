<script>
// import { mapState, mapWritableState } from 'pinia';
// import { useFoodStore } from '../stores/food';

export default {
    data() {
        return {
        }
    },
    // methods: {
    //     loggingOut() {
    //         localStorage.removeItem("access_token");
    //         localStorage.removeItem("authorId");
    //         localStorage.removeItem("email");
    //         Swal.fire({
    //             title: "Goodbye!",
    //             text: `Please come back later, ${localStorage.getItem("username")}`,
    //             icon: "warning",
    //             confirmButtonText: "OK",
    //         });
    //         localStorage.removeItem("username");
    //         this.isLogin = false
    //         this.$router.push('/login')
    //     }
    // },
    // computed: {
    //     ...mapWritableState(useFoodStore, ['isLogin'])
    // }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <div class="container-fluid">
            <div @click.prevent="$router.push('/')" id="logo" class="navbar fs-3 lh-base">
                <img
                class=""
                style="width: 100px"
                src="https://clashroyale.com/uploaded-images-blog/_134x63_crop_center-center_90/logo-1.png?mtime=20180403175110"/>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page" href="#">News</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/wishlist" class="nav-link" aria-current="page" href="#">My Deck</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/wishlist" class="nav-link" aria-current="page" href="#">About The Game</router-link>
                    </li>
                </ul>
                <div id="account-name" class="d-flex pe-3">
                    <div class="dropdown">
                        <a class="btn dropdown-toggle" style="background-color: goldenrod" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ !username ? 'Guest' : username }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><button v-if="username" @click.prevent="loggingOut" class="dropdown-item"
                                    href="#">Logout</button>
                            </li>
                            <li><button v-if="!username" @click.prevent="$router.push('/login')" class="dropdown-item"
                                    href="#">Login</button>
                            </li>
                            <li><button v-if="username" @click.prevent="$router.push('/wishlist')" class="dropdown-item"
                                    href="#">Wishlist</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&family=Ubuntu:wght@300;500&display=swap');

html,
body {
    font-family: Ubuntu;
}
</style>