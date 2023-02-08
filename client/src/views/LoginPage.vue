<script>
import {useAppStore} from '../stores/app'
import {mapActions} from 'pinia'
export default {
    data(){
        return {
            payload : {
                email : '',
                password : ''
            }
        }
    },
    methods : {
        ...mapActions(useAppStore, ['doLogin']),
        handleLogin(){
            this.doLogin(this.payload)
        }
    }
}
</script>

<template>

<section>
    <div class="row">
        <div class="login-container">
      <div class="welcome-img">
        <img src="../assets/login.jpeg" alt="" srcset="">
    </div>

      <div class="form-container">
        <p class="title">Login</p>

        <form @submit.prevent="handleLogin" class="sigup-form">
          <div class="form-item email">
            
            <input v-model="payload.email" type="text" placeholder="email"  />
            <span class="item-indicator"> <i class="bx bxs-user"></i></span>
          </div>
          <div class="form-item password">
            <input v-model="payload.password" type="password" placeholder="password"  />
            <span class="item-indicator"><i class="bx bxs-lock-alt"> </i></span>
          </div>
          <button type="submit" class="btn btn-success btn-lg">Login</button>
        </form>
      </div>
    </div>
    </div>
    </section>
</template>

<style scoped>
section{
    min-height: 100vh;
    width: 100%;
    font-size: 30px;
    /* background-color: rgba(0, 0, 0, 0.236); */
    /* background: rgb(208, 255, 163); */
    /* background: radial-gradient(circle, rgb(99, 178, 57) 0%, rgb(232, 240, 229) 100%); */
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container{
    font-size: 20px;
    width: 780px;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: 60px;
    /* box-shadow: 0px 0px 12px rgba(0, 0, 0, 3); */
    padding: 32px;
}
img{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    max-width: 150%;
    height: auto;
    object-fit: cover;
}
.form-container{
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 150px;
}
.title{
    text-transform: capitalize;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 40px;
    color: rgb(63, 103, 3);
}

.signup-form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-item{
    position: relative;
    width: 100%;
    border: none;
    background: rgb(210, 237, 214);
    border-radius: 25px;
    margin-bottom: 25px;
    height: 45px;
}
.form-item input{
    border: none;
    outline: none;
    background:none;
    width: 100%;
    height: 45px;
    color: #4b4a4a;
    padding: 0 32px;
    letter-spacing: 0.5px;
}

.form-item span{
    position:absolute;
    left: -28px;
    top: 10px;
    background-color: transparent;
    /* border:  2px solid greenyellow; */
    border-radius: 50px;
    height: 10px;
    width: 10px;
}

button{
    position: relative;
}
</style>