<template>
  <section class="section">
   <div class="container user-input-container">
     <user-input />
   </div>
    <div class="container">
      <user-info />
    </div>
    <user-repos />
  </section>
</template>

<script>
import UserInput from '../components/UserInput';
import UserInfo from '../components/UserInfo';
import UserRepos from '../components/UserRepos';

export default {
  name: 'UserPage',
  components: {
    'user-info': UserInfo,
    'user-input': UserInput,
    'user-repos': UserRepos,
  },
};
</script>

<style scoped>
  .user-input-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
