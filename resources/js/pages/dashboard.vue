<template>
    <div>
        <h1>Dashboard My token </h1> <strong>{{ $store.getters.token }} </strong>

        <p class="text-4xl text-danger">
           {{ $store.getters.getHash }}
        </p>

        <p class="text-4xl text-info">Login Page {{ $store.getters.getHash.isLoggedIn || "Not Logged In" }} </p>


        <div class="mt-4">
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    setup(props) {
        const r = useRouter();
        const store = useStore();
        const logout = () => {
            store.dispatch('removeToken');
            r.push({ name: 'Login' });
        }
        return {
            logout
        }
    }
}
</script>
