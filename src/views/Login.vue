<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" placeholder="login" v-model="email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="error" v-if="error">{{ error.message ]}</div>
        <span>Need an account? Click here to <router-link to="register">Register</router-link></span>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import "firebase/auth"
export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async pressed() {
            try {
                const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                console.log(val)
                this.$router.replace({name: 'Secret'})
            }
            catch(err) {
                console.log(err)
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .login {
        width: 100%;
        height: 100%;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input {
        width: 15rem;
        height: 3rem;
        border-radius: 5px; 
        outline: none;
        border: 1px solid #000;
        margin: .5rem auto;
        padding: .3rem;
        font-size: 1.2rem;
    }

    button {
        width: 16rem;
        height: 3rem;
        border-radius: 5px; 
        outline: none;
        background: dodgerblue;
        color: #fff;
        font-size: 1.2rem;
        padding: .3rem;
        cursor: pointer;
        margin-bottom: .5rem;
    }

    h1{
        text-transform: uppercase;
    }
</style>