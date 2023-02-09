<script>
import { mapActions, mapState } from 'pinia';
import router from '../router';
import { useAppStore } from '../stores/app';

export default {
    methods: {
        ...mapActions(useAppStore, ['doLogout', 'paid','profile','fetchGames']),
        handlerLogout() {
            this.doLogout()
        },
        handlerMitrans() {
            this.paid()
        },
        
    },
    computed:{
        ...mapState(useAppStore,['userLogin'])
    },
    created(){
        this.profile()
        this.fetchGames()
    }
}
</script>

<template>
    <div class="fContainer">
        <nav class="wrapper">
            <div class="brand">
                <div class="firstname"> Wantau</div>
                <div class="lastname"> Games </div>
            </div>
            <h1 style="color: red;" v-if="userLogin.status=== 'unpaid'">     {{ userLogin.status }} </h1>
                 
            <ul class="navigation">
                <!-- class="active" -->
                <li> <a v-if="userLogin.status === 'unpaid'" @click.prevent="handlerMitrans" id="pay-button"> Pay Account </a> </li>
                <li> <a @click.prevent="$router.push('/home')"> Games</a></li>
                <li><a v-if="userLogin.status === 'paid'" @click.prevent="$router.push('/newsGame')"> News Games</a></li>
                <li> <a @click.prevent="$router.push('/profile')"> Profile</a></li>
                <li> <a @click.prevent="handlerLogout"> Logout</a></li>

            </ul>
        </nav>
    </div>

</template>

<style scoped>
*,
html,
body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}

.fContainer {
    display: flex;
    /* justify-content: center;
    align-items: flex-start; */
    width: 100%;
    ;

}

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 15px;
    width: 100%;
    height: 80px;
    background-color: #222;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.5s);
}

.brand {
    display: flex;
    flex-direction: row;
    font-size: 1.5 em;
    padding: 15px;
    text-transform: capitalize;

}

.firstname {
    color: white;
    font-weight: 700;
}

.lastname {
    color: crimson;
    padding-left: 4px;
    font-weight: 700;
}

.navigation {
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigation>li>a {
    list-style: none;
    color: white;
    padding: 15px;
    text-decoration: none;
    text-transform: capitalize;
}

.navigation>li>a:hover {
    color: crimson;
    transition: all -6s ease-in-out;

}

.active {
    background-color: crimson;
    color: white;
    padding: 15px;
}

.active:hover {
    color: white !important;
}
</style>