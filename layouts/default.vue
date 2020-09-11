<template>
  <div>
    <nav>
      <a v-if="!this.$auth.loggedIn" @click="$auth.loginWith('aad')"
        >Sign in with Microsoft</a
      >
      <a v-else @click="$auth.logout('aad')">Sign out</a>
    </nav>
    <Nuxt />
  </div>
</template>
<style scoped>
  a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
