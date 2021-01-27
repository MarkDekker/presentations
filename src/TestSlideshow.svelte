<script>
  // Templates
  import Title from './templates/Title.svelte'
  import H_2_Split from './templates/H_2_Split.svelte'

  // Components
  import AnimatedImage from './components/AnimatedImage.svelte'
</script>

<style @global>
  h1 {
    @apply text-4xl;
  }

  .tester {
    @apply text-4xl;
  }
</style>


<Title
  title="Test Presentation"
  subtitle="This is the first time that I try to make a presentation in the browser"
  backgroundImage={"https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80"}/>
<H_2_Split>
  <div slot="left" class="h-full w-full">
    <AnimatedImage
    backgroundImage={"https://images.unsplash.com/photo-1611444275099-d39965256256?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"}/>
  </div>
  <div slot="right" class="p-4">
    <h1 class="tester">The Page Heading</h1>
    <h2 class="tester">The Page Heading</h2>
    <h3 class="tester">The Page Heading</h3>
    <ul>
      <li>First entry</li>
      <li>Second entry</li>
    </ul>
  </div>
</H_2_Split>