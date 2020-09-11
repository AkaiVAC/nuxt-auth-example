<template>
  <p>Please wait...</p>
</template>

<script>
  import jwt_decode from 'jwt-decode';

  export default {
    created() {
      try {
        const decodedBearer = jwt_decode(
          this.$auth.$storage.getUniversal('_token.aad')
        );
        this.$auth.$storage.setUniversal('jwt_decoded', decodedBearer);
        const user = {
          name: decodedBearer.name,
          givenName: decodedBearer.given_name,
          familyName: decodedBearer.family_name,
          email: decodedBearer.unique_name,
        };
        this.$auth.$storage.setUniversal('userDetails', user);
      } catch (error) {
        console.log(error);
      }
    },
  };
</script>
