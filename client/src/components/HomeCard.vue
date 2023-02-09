<script>
import { useAppStore } from "../stores/appStore";
import { mapActions, mapState } from "pinia";
export default {
  props: ["postData"],

  computed: {
    ...mapState(useAppStore, ["postDataDetail"]),
  },

  methods: {
    ...mapActions(useAppStore, ["fetchPostDetail"]),
  },
};
</script>

<template>
  <div class="col">
    <article class="article_home g-4">
      <div class="card_home">
        <div class="" style="margin-bottom: 5px">
          <a href="" @click.prevent="$router.push(`/${postData.id}`)">
            <img :src="postData.imgUrl" class="img_home" alt="" />
          </a>
        </div>

        <a href="" class="caption">{{ postData.title }}</a>

        <div class="post_body">
          <div style="width: 10px; display: inline-block; margin-right: 20px"><img src="https://i.pinimg.com/564x/f9/8d/37/f98d37ccdb14a73ecec81eeee52ec873.jpg" alt="Avatar" style="border-radius: 50%; height: 30px; width: 30px" /></div>
          <div style="display: inline-block">
            <p class="ketProfile_home">{{ postData.User.username }}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
/* write your code here */

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Poppins:wght@400;500;600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

/* Warna Dasar */

:root {
  --light: #f8f9fa;
  --secondary: #adb5bd;
  --dark: #343a40;
  --primary-color: #f15bb5;
  --secondary-color: #2ec4b6;
  --border: #e9ecef;
  --accent-color: #f50057;
}

a {
  text-decoration: none;
}

.img_home {
  width: 100%;
  border-radius: 15px;
}

#posts_home {
  margin-bottom: 5em;
}

.post_body {
  text-align: left;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: -10px;
  margin-top: 5px;
}

.article_home {
  background-color: #ececec;
  margin-bottom: -20px;
  width: 100%;
  border-radius: 15px;
}

.card_home {
  background-color: white;
}
.caption {
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 3px;
  color: var(--dark);
}

.ketProfile_home {
  font-family: "Poppins", sans-serif;
  color: var(--secondary);
  font-size: 15px;
  margin-top: 3px;
  margin-left: 10px;
}
</style>
