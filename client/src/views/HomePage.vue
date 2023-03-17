<script>
import { mapActions, mapState, mapStores, mapWritableState } from "pinia";
import { useAppStore } from "../stores/appStore";
import Navbar from "../components/Navbar.vue";
import HomeCard from "../components/HomeCard.vue";
export default {
  components: {
    Navbar,
    HomeCard,
  },

  methods: {
    ...mapActions(useAppStore, ["fetchPosts"]),
  },
  computed: {
    ...mapState(useAppStore, ["postList"]),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<template>
  <Navbar />
  <!-- Blog Post Section -->

  <section id="posts_home" class="mt-4">
    <div class="container_home">
      <div class="masonry">
        <!-- <div class="col-6">
          <article class="article_home"> -->
        <!-- <div class="col-6"> -->
        <HomeCard v-for="postData in postList" :key="postData.id" :postData="postData" />
        <!-- </div> -->
        <!-- </article>
        </div> -->
        <!-- <div class="col">
          <article class="article_home">
            <div class="card_home">
              <div class="image" style="margin-bottom: 5px">
                <a href="">
                  <img src="https://i.pinimg.com/564x/6d/a3/24/6da3241e9baad8c02195566be99fc315.jpg" class="img_home" alt="" />
                </a>
              </div>

              <a href="" class="caption">Makan nasi</a>

              <div class="post_body">
                <div style="width: 10px; display: inline-block; margin-right: 20px"><img src="https://i.pinimg.com/564x/f9/8d/37/f98d37ccdb14a73ecec81eeee52ec873.jpg" alt="Avatar" style="border-radius: 50%; height: 30px; width: 30px" /></div>
                <div style="display: inline-block">
                  <p class="ketProfile_home">Hamzah</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="col">
          <article class="article_home">
            <div class="card_home">
              <div class="image" style="margin-bottom: 5px">
                <a href="">
                  <img src="https://i.pinimg.com/564x/6d/a3/24/6da3241e9baad8c02195566be99fc315.jpg" class="img_home" alt="" />
                </a>
              </div>

              <a href="" class="caption">Makan nasi</a>

              <div class="post_body">
                <div style="width: 10px; display: inline-block; margin-right: 20px"><img src="https://i.pinimg.com/564x/f9/8d/37/f98d37ccdb14a73ecec81eeee52ec873.jpg" alt="Avatar" style="border-radius: 50%; height: 30px; width: 30px" /></div>
                <div style="display: inline-block">
                  <p class="ketProfile_home">Hamzah</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="col">
          <article class="article_home">
            <div class="card_home">
              <div class="image" style="margin-bottom: 5px">
                <a href="">
                  <img src="https://i.pinimg.com/564x/6d/a3/24/6da3241e9baad8c02195566be99fc315.jpg" class="img_home" alt="" />
                </a>
              </div>

              <a href="" class="caption">Makan nasi</a>

              <div class="post_body">
                <div style="width: 10px; display: inline-block; margin-right: 20px"><img src="https://i.pinimg.com/564x/f9/8d/37/f98d37ccdb14a73ecec81eeee52ec873.jpg" alt="Avatar" style="border-radius: 50%; height: 30px; width: 30px" /></div>
                <div style="display: inline-block">
                  <p class="ketProfile_home">Hamzah</p>
                </div>
              </div>
            </div>
          </article>
        </div> -->
        <!-- </div> -->
      </div>
    </div>
  </section>
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

body {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}

.container_home {
  max-width: 1500px;
  padding: 0 15px;
  margin: auto;
  background-color: white;
}

.masonry {
  /* Masonry container */
  -webkit-column-count: 6;
  -moz-column-count: 6;
  column-count: 6;
  /* -webkit-column-gap: 1em; */
  /* -moz-column-gap: 1em; */
  column-gap: 1em;
  /* margin: 1.5em; */
  padding: 0;
  /* -moz-column-gap: 1.5em; */
  /* -webkit-column-gap: 1.5em; */
  /* column-gap: 1.5em; */
  font-size: 0.85em;
}

a {
  /* text-decoration: none; */
}

main {
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh; */
}

/* Header */
/* header {
  background-color: var(--light);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
} */

/* Search */
/* :root {
  --primary-color: #00bcd4;
  --accent-color: #f50057;

  --text-color: #263238;
  --body-color: #80deea;
  --main-font: "roboto";
  --font-bold: 700;
  --font-regular: 400;
} */
/* * {
  box-sizing: border-box;
} */

/* body {
  color: var(--text-color);
  background-color: var(--body-color);
  font-family: var(--main-font), Arial;
  font-weight: var(--font-regular);
} */

/* h1 {
  font-weight: var(--font-bold);
}
input,
button {
  border: none;
  background: none;
  outline: 0;
} */
/* button {
  cursor: pointer;
} */

/* Chrome, Opera ySafari */
/* .SearchBox-input::-webkit-input-placeholder {
  color: white;
} */
/* Firefox 19+ */
/* .SearchBox-input::-moz-placeholder {
  color: white;
} */
/* IE 10+ y Edge */
/* .SearchBox-input:-ms-input-placeholder {
  color: white;
} */
/* Firefox 18- */
/* #formGroupExampleInput:-moz-placeholder {
  color: white;
} */

/* .SearchBox {
  --height: 3em;
  display: flex;
  margin-top: 3px;

  border-radius: var(--height);
  background-color: #ffffff;
  height: var(--height);
} */
/* .SearchBox:hover .SearchBox-input {
  padding-left: 2em;
  padding-right: 1em;
  width: 240px;
} */
/* .SearchBox-input {
  width: 0;
  font-size: 1.2em;
  color: rgb(17, 17, 17);
  transition: 0.45s;
} */
/* .SearchBox-button {
  height: 10px;
  height: 10px;
  display: flex;
  border-radius: 50%;
  width: var(--height);
  height: var(--height);
  background-color: var(--accent-color);
  transition: 0.3s;
} */
/* .SearchBox-button:active {
  transform: scale(0.85);
} */
/* .SearchBox-icon {
  margin: auto;
  color: rgb(199, 199, 199);
} */
/* Search Batas */

/* .navbar_1 {
  padding: 10px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
} */

/* .nav_logo {
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  font-size: 32px;
  position: relative;
  display: flex;
  align-self: center;
  color: var(--dark);
  text-decoration: none;
} */

/* .nav_menu_wrap {
  align-self: center;
  margin-top: 10px;
} */

/* .nav_link {
  margin: 18px;
  font-family: "Poppins", sans-serif;
  color: var(--dark);
  text-decoration: none;
} */

/* .nav_link:hover {
  color: var(--primary-color);
} */

/* .nav_search {
  display: inline;
  border-right: 1px solid var(--secondary);
  margin-right: 10px;
  padding-right: 5px;
} */

/* Blog */
/* #blog-main_home {
  margin-top: 2em;
  background-color: white;
} */

/* .img_home {
  width: 100%;
  border-radius: 15px;
} */

/* #posts_home {
  margin-bottom: 5em;
} */

/* .grid_1 {
  margin: 0 auto;
  column-count: 6;
} */

/* .grid_1 .grid_item { */
/* width: calc(15%); */
/* margin-bottom: 1em;
  margin-right: 5px;
  margin-left: 5px;
  display: inline-block;
} */

/* .post_body {
  text-align: left;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: -10px;
  margin-top: 5px;
} */

/* .article_home {
  background-color: white;
  margin-bottom: -20px;
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
} */

/* .icon-1 {
  color: var(--primary-color);
} */

/* .done-btn {
  background-color: #d1fae5;
  color: #10b981;
}

.ongoing-btn {
  background-color: #e0e7ff;
  color: #6366f1;
}

.pending-btn {
  background-color: #ffe4e6;
  color: #f43f5e;
} */
</style>
