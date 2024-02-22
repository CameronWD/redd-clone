<template>
    <q-layout class="page">
      <q-page-container>
        <q-page padding>
          <div v-if="!postDetails">Loading...</div>
          <div v-else>
            <q-card class="post-container">
              <q-card-section>
                <h1 class="post-title">{{ postDetails.title }}</h1>
                <p class="post-text">{{ postDetails.selftext }}</p>
              </q-card-section>
            </q-card>
            <div v-for="comment in comments" :key="comment.id" class="comment-card q-mb-md">
              <q-card>
                <q-card-section>
                  <div class="flex items-center">
                    <q-avatar icon="person" />
                    <div class="q-ml-sm">
                      <div class="text-h6">{{ comment.author }}</div>
                      <q-badge>{{ comment.score }}</q-badge>
                    </div>
                  </div>
                  <q-separator spaced class="q-my-md" />
                  <div>{{ comment.body }}</div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat icon="thumb_up" label="Upvote" />
                  <q-btn flat icon="comment" label="Reply" />
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  import { fetchPostDetails } from 'src/services/redditApi';
  
  export default {
    data() {
      return {
        postDetails: null,
        comments: []
      };
    },
    async mounted() {
      const postId = this.$route.params.postId;
      if (postId) {
        const data = await fetchPostDetails(postId);
        this.postDetails = data.postDetails;
        this.comments = data.comments;
      } else {
        console.error("Post ID is undefined");
      }
    }
  };
  </script>
  
  <style scoped>
  .page {
    background-color: #d3d3d3;
  }
  
  .post-container {
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  
  .post-title {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: unset;
    
  }
  
  .post-text {
    max-width: 100%;
  }
  
  .comment-card {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  