<template>
    <div>
       <h1>Dashboard</h1>
       <button  @click="logout">Logout</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup(props) {
        const r = useRouter();
        const logout = () => {
            localStorage.removeItem('token');
            r.push({ name: 'Login' });
        }
        return {
            logout
        }
    }
}
</script>
