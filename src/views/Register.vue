<template>
    <div class="register">
        <div v-if="error" class="error">{{ error.message }}</div>
        <form @submit.prevent="pressed">
            <h1>Register</h1>
            <div class="email">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Register</button>
        </form>
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
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                console.log(user)
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
    .register {
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
    }

    h1{
        text-transform: uppercase;
    }
</style>