<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round @click="$router.push('/')">
              <q-icon name="home" />
        </q-btn>
        <q-toolbar-title class="text-center">
            <span>{{ title }}</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$route.path === '/' ? 'Homepage' : 'Post Details';
    }
  }
};
</script>

<style scoped>
.q-toolbar-title {
  flex: 1;
  justify-content: center;
}
</style>
