<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    created() {
        this.profile()
    },
    methods: {
        ...mapActions(useAppStore, ['profile'])
    },
    computed: {
        ...mapState(useAppStore, ['userLogin'])
    },
    created() {
        this.profile()
    
    }



}
</script>
<template >
    <div class="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
            alt="Profile Picture">
        <h1></h1>
        <p>{{ userLogin.username }}</p>
        <p>Tentang saya:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin congue magna, eu blandit dui
            fermentum vel. </p>
        <p >status: {{ userLogin.status }}</p>
        <p>Email: {{ userLogin.email }}</p>

        <p v-if="userLogin.status === 'unpaid'" class="warning"> <b>note : payment you only new feature news game</b></p>
        <!-- <p><button>Reset Password </button></p> -->
    </div>

</template>

<style scoped>
body {
    background-image: url(https://img.freepik.com/free-vector/minimal-geometric-stripe-shape-background_1409-1014.jpg);
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.warning {
    color: yellow;
}

.container {
    text-align: center;
}

img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 20px 0;
}

h1 {
    font-size: 36px;
    margin: 10px 0;
}

.title {
    font-size: 24px;
    margin: 10px 0;
    color: gray;
}

button {
    border: none;
    outline: 0;
    padding: 8px 16px;
    background-color: blue;
    color: white;
    cursor: pointer;
    border-radius: 25px;
    font-size: 18px;
}

p {
    color: white;
}
</style>