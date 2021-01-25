<BaseLayout>
  <div class="bg-scroll bg-center bg-no-repeat bg-cover h-full p-8
              grid gap-4 content-end">
        <div id="player"></div>
  </div>
</BaseLayout>

<style>
  .dark {
    @apply text-white;
  }
</style>

<script>
  import BaseLayout from './BaseLayout.svelte'
  export let subtitle
  export let videoUrl
  export let dark = true

</script>