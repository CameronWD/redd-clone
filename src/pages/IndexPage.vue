<template>
  <q-page padding class="page">
    <div v-if="posts.length === 0">Loading...</div>
    <div v-else class="post-container">
      <q-card v-for="post in posts" :key="post.id" class="q-mb-md post-card" @click="goToPost(post.id)">
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>{{ post.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { fetchHotPosts } from 'src/services/redditApi';

export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    goToPost(postId) {
      this.$router.push(`/post/${postId}`);
    }
  },
  async mounted() {
    this.posts = await fetchHotPosts();
  }
};
</script>

<style scoped>
.page {
  background-color: #d3d3d3;
}
.post-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 750px;
  margin: auto;
}

.post-card {
  width: calc(33.33% - 20px);
  max-width: 250px;
  margin: 10px;
  cursor: pointer;
}
</style>
