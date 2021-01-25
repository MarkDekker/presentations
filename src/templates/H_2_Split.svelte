<BaseLayout>
  <div class="grid grid-cols-2 gap-4 content-end h-full">
    <div class="h-screen w-full">
      <slot name="left"></slot>
    </div>
    <div class="h-screen w-full">
      <slot name="right"></slot>
    </div>
  </div>
</BaseLayout>


<script>
  import BaseLayout from './BaseLayout.svelte'
</script>