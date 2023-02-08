<script>
export default {

}
</script>

<template>
    <!-- insert image -->
    <section >
        <div class="container mt-[15vh] pl-[70vh] flex flex-col gap-y-5">
            <form method="submit" class="flex flex-col gap-y-5">
                <label>Subject of The Email</label>
                <input type="text" placeholder="A Valentine Letter..."
                    class="input input-bordered border-neutral-700 w-full max-w-sm" required />
                <label class="pt-5">Recipient of the Email</label>
                <input type="email" placeholder="indra@mail.com"
                    class="input input-bordered border-neutral-700 w-full max-w-sm" required />
                <label class="pt-5"> Upload Image that is going to be the header of your email</label>
                <input class="rounded shadow-md max-w-sm w-full" type="file" accept="image/jpeg" @change=uploadImage>
                <img src="" alt="">
                <button class="btn max-w-xs ml-10 bg-neutral-800 shadow-md mt-5" type="submit">Generate Poem</button>
            </form>
        </div>
    </section>
</template>