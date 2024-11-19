<template>
    <div>
        <h1>
            <div>
                <router-link :to="{ name: 'Login' }" tag="Btn">Login Page</router-link>
                |
                <router-link to="/register" tag="Btn">Register Button</router-link>
            </div>
            <router-view></router-view>
        </h1>
    </div>
</template>
