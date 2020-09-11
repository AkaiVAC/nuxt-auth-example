<template>
  <div>
    <h1>Auth</h1>
    <div v-if="this.$auth.loggedIn">
      {{ userData }}
    </div>
    <h2>User</h2>
    {{ userData.name }}
    <nuxt-link to="/inspire">Go</nuxt-link>
  </div>
</template>
<script>
  export default {
    asyncData({ app }) {
      return {
        userData: app.$auth.loggedIn
          ? app.$auth.$storage.getUniversal('userDetails')
          : {},
      };
    },
    data() {
      return {
        userData: {},
      };
    },
  };
</script>
