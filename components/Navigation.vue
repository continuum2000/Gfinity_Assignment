<template>
    <div class="w-full h-16 bg-black">
        <div class="flex max-w-screen-lg mx-auto h-full ">
            <!-- Not too sure what the burger menu should do so its just visual for now -->
            <img data-testid="burger" src="/public/svg/menu.svg" />
            <NuxtLink class="ml-auto my-auto" :to="'/'"><img src="/public/svg/logo.svg" /></NuxtLink>
        </div>
    </div>
</template>