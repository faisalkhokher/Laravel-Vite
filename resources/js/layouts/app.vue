<template>
    <div>
        <h1>
            <router-link to="/login" tag="Btn">Login Button</router-link>
            |
            <router-link to="/register" tag="Btn">Register Button</router-link>

            <router-view></router-view>
        </h1>
    </div>
</template>
