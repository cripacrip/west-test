<template>
    <div class="register">
        <h1>Create account</h1>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signIn">Sign In</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'

const email = ref("")
const password = ref("")
const router = useRouter()

const signIn = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            console.log("Successfully")
            router.push('/profile')
        })
        .catch((err) => {
            console.log(err.code),
            console.log(err.message)
        })
}

</script>