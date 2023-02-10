<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    props: ['bookmark'],
    methods: {
        ...mapActions(useAppStore, ['deleteBookmark']),
        handleDeleteBookmark(id){
            this.deleteBookmark(id)
        }
    }
}
</script>

<template>
    <tr>
        <th scope="row">{{ bookmark.Landmark.name }}</th>
        <td>{{ bookmark.Landmark.country }}</td>
        <td>{{ bookmark.Landmark.latitude }}, {{ bookmark.Landmark.longitude }}</td>
        <td>{{ bookmark.createdAt }}</td>
        <td>
            <a :href="`/landmarks/${this.bookmark.LandmarkId}`" class="btn btn-outline-warning me-2"> See Details </a>
            <button @click.prevent="handleDeleteBookmark(this.bookmark.id)" class="btn btn-outline-danger"><i class="material-symbols-outlined">delete</i></button>
        </td>
    </tr>
</template>

<style scoped>
th{
    color: #e3bd4c;
}
</style>