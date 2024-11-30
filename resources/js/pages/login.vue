<template>
    <div>
        <div class="container">
            <form @submit.prevent="submitLogin">
                <!-- {{ form }}

        <br>
        <br> -->

                <div v-if="error.alert" class="alert alert-danger" role="alert">
                    {{ error.alert }}
                </div>

                <p class="text-4xl text-danger">{{ $store.getters.getHash.isLoggedOut || "Not Logged In" }} </p>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="form.email">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    setup(props) {

        const router = useRouter();
        const route = useRoute();
        const store = useStore();

        const form = reactive({
            email: '',
            password: ''
        })

        const error = ref({
            alert: ''
        });

        async function submitLogin() {
            console.log(router, route);

            await axios.post('/api/login', form).then((result) => {

                const response = result.data;
                store.dispatch('updateToken', response.data)

                if (response.success == false) {
                    console.log(response);
                    error.value.alert = response.message;
                } else {
                    let object_hash = {
                        userToken: response.data,
                        createdAt: Date.now(),
                        hashCode: "HashCode-" + Date.now(),
                        isLoggedIn: true,
                        hasAdminAccess: false
                    }
                    console.log(object_hash);

                    store.dispatch('addHash', object_hash)
                    router.push({ name: 'Dashboard' });
                }
            }).catch((err) => {
                alert(err);
                console.log(err);
                error.value.alert = err.response.data.message;
            });
        }

        return {
            form,
            submitLogin,
            error
        }
    }
}
</script>
