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

                <h1>Login Page</h1>
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

export default {
    setup(props) {

        const router = useRouter();
        const route = useRoute();

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
                console.log(result.data);
                const response = result.data;
                localStorage.removeItem('token');
                console.log(response.data);
                response.data ? localStorage.setItem('token', response.data) : null;
                if (response.success == false) {
                    console.log(response);
                    error.value.alert = response.message;
                } else {
                    router.push({ name: 'Dashboard' });
                }
            }).catch((err) => {
                // alert(err.response.data.message);
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
