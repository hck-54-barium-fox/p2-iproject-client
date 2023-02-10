<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';
import TableRow from '../components/TableRow.vue'

export default {
    components: {
        TableRow
    },
    computed: {
        ...mapState(useAppStore, ['bookmarkList'])
    },
    methods: {
        ...mapActions(useAppStore, ['getBookmarks'])
    },
    created(){
        this.getBookmarks()
    }
}
</script>

<template>
    <section class="intro" id="bookmark-section">
        <div class="container">
            <div class="row d-flex align-content-center justify-content-center">
                <router-link to="/map" tag="button">
                    <a href="#" class="main-btn mb-3 w-25">Back</a>
                </router-link>
                <h2 class="text-center mb-2">My Bookmarks</h2>
                <h5 v-if="bookmarkList.length > 0" class="text-center mb-5">User: {{ bookmarkList[0].User.username }}</h5>
                <div v-if="bookmarkList.length > 0" class="row justify-content-center">
                    <div class="col-12">
                        <div class="table-responsive bg-white" data-mdb-perfect-scrollbar="true">
                            <table class="table text-center">
                                <thead class="text-uppercase table-warning">
                                    <tr>
                                        <th scope="col">Landmark Name</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Coordinate (lat, lon)</th>
                                        <th scope="col">Bookmarked In</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow v-for="bookmark in bookmarkList" :key="bookmark.id" :bookmark="bookmark"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <hr v-if="bookmarkList.length <= 0">
                <h5 v-if="bookmarkList.length <= 0" class="text-center">You have no bookmark yet</h5>
            </div>
        </div>
    </section>
</template>

<style scoped>
.table-responsive{
    position: relative;
    height: 445px;
}
</style>