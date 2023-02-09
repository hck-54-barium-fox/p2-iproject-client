<script>
import { mapActions, mapWritableState } from "pinia";
import { useAppStore } from "../stores/app";

export default {
  name: "MyProfileDetail",
  props: ["profile"],
  data() {
    return {
      profileImg: "",
    };
  },
  computed: {
    ...mapWritableState(useAppStore, ["myProfile"]),
  },
  methods: {
    ...mapActions(useAppStore, ["updateMyProfile"]),
    handleUpdateProfile() {
      const payload = {
        ...this.myProfile,
        address: this.profileImg,
      };
      this.updateMyProfile(payload);
    },
    handleChange(evt) {
      this.profileImg = evt.target.files[0];
    },
  },
};
</script>

<template>
  <div class="card text-white bg-dark mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="myProfile.address"
          class="img-fluid rounded-start w-full"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <form class="card-body" @submit.prevent="handleUpdateProfile()">
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              v-model="myProfile.email"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              v-model="myProfile.username"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Phone Number</label>
            <input
              type="number"
              class="form-control"
              v-model="myProfile.phoneNumber"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Foto Profile</label>
            <input
              type="file"
              class="form-control"
              @change="handleChange($event)"
            />
          </div>
          <button type="submit" class="btn btn-primary">Update Profile</button>
        </form>
      </div>
    </div>
  </div>
</template>
