<script>
import { mapActions, mapWritableState } from 'pinia';
import { usePoemStore } from '../stores/poem';

export default {
    data() {
        return {
            submitForm: {
                email: "",
                subject: ""
            }
        }
    },
    computed: {
        ...mapWritableState(usePoemStore, ['imageLink', 'rawImage'])
    },
    methods: {
        ...mapActions(usePoemStore, ['uploadImage', 'sendEmail']),
        async checkImage(e) {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.rawImage = e.target.result;
            };
            await this.uploadImage(this.$route.params.letterId, image)
        },
        async handleSend() {
            await this.sendEmail(this.submitForm, this.$route.params.letterId)
        }

    }
}
</script>

<template>
    <!-- insert image -->
    <section>
      
        <div class="container mt-[15vh] pl-[70vh] flex flex-col gap-y-5">
            <form method="submit" class="flex flex-col gap-y-5" @submit.prevent="handleSend">
                <label>Subject of The Email</label>
                <input type="text" placeholder="A Valentine Letter..."
                    class="input input-bordered border-neutral-700 w-full max-w-sm" v-model="this.submitForm.subject"
                    required />
                <label class="pt-5">Recipient of the Email</label>
                <input type="email" placeholder="indra@mail.com" v-model="this.submitForm.email"
                    class="input input-bordered border-neutral-700 w-full max-w-sm" required />
                <label class="pt-5"> Upload Image that is going to be the header of your email</label>
                <input class="rounded shadow-md max-w-sm w-full" type="file" accept="image/jpeg" @change=checkImage>
                <img :src="this.rawImage" class="max-w-[30vh] max-h-[30vh]"> <b>*wait for notification of upload image successful first</b>
                <button class="btn max-w-xs ml-10 bg-neutral-800 shadow-md mt-5" type="submit">Send Email</button>
            </form>
        </div>
    </section>
</template>