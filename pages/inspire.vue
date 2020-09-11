<template>
  <div>
    <h1>You are inspired</h1>
    <div v-if="this.$auth.loggedIn">You're logged In</div>
    <nuxt-link to="/">Back</nuxt-link>
  </div>
</template>
