<template>
    <div>
        <div class="container">
            <form @submit.prevent="submitRegister">
                <!-- {{ form }} -->
                <!-- <br>
                <br> -->

                <!-- {{ errors }} -->
                <div v-for="(error, index) in errors" class="alert alert-danger" role="alert">
                    {{ errors[index][0] }}
                </div>

                <h1>Register Page</h1>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="form.name">
                    <div v-if="errors.name" class="text-danger">{{ errors.name[0] }}</div>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="form.email">
                    <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
                    <div v-if="errors.password" class="text-danger">{{ errors.password[0] }}</div>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup(props) {

        const router = useRouter();
        const route = useRoute();

        const form = reactive({
            name: '',
            email: '',
            password: '',
            c_password: '',
        })

        const errors = ref({});

        function submitRegister() {
            axios.post('/api/register', form).then((result) => {
                console.log(result.data.data);
                localStorage.removeItem('token');
                localStorage.setItem('token', result.data.data);
                if (result.data.success == false) {
                    errors.value = result.data.errors;
                } else {
                    router.push({ name: 'Login' });
                }
            }).catch((err) => {
                errors.value = err.response.data.errors;
                console.log(err.response.data.errors);
            });
        }

        // Watch the form object deeply
        watch(() => form, (newValue, oldValue) => {
            // console.log("Form changed:", newValue, oldValue);
            form.c_password = newValue.password;
        }, { deep: true });  // Set deep to true for nested property changes

        return {
            form,
            submitRegister,
            errors
        }
    }
}
</script>
