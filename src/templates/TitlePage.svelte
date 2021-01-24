<BaseLayout>
  <div style="background-image: url('{backgroundImage}')"
        class="bg-scroll bg-center bg-no-repeat bg-cover h-full p-8
               grid gap-4 content-end">
    <div>
      <h1 class="text-6xl font-extrabold" class:text-white="{dark}">
        {title}
      </h1>
      <h2 class="text-2xl font-mono" class:text-white="{dark}">
        {subtitle}
      </h2>
    </div>
  </div>
</BaseLayout>

<style>
  .dark {
    @apply text-white;
  }
</style>

<script>
  import BaseLayout from './BaseLayout.svelte'
  export let title = 'Title'
  export let subtitle
  export let backgroundImage
  export let dark = true

</script>