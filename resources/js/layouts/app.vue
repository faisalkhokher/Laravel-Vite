<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Finance</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Home' }" tag="Btn">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'Login'}" tag="Btn">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'Register'}" tag="Btn">Register</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'Dashboard'}" tag="Btn">Dashboard</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>
