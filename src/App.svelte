<script lang='typescript'>
  import {onMount, beforeUpdate} from 'svelte';
  import { currentSlide, totalSlides } from './state';
  import './styling/main.css';

  import TestSlideshow from './TestSlideshow.svelte'
  
  // handle stages and slides
  let slideCount = 0
  totalSlides.subscribe(n => slideCount = n)

  beforeUpdate(() => {
    console.log("triggered!")
  })

  const next = () => {
    currentSlide.update(n => {
      if (n < slideCount ) return n + 1
      return n
    })
  }
  const prev = () => {
    currentSlide.update(n => {
      if (n > 1) return n - 1
      return n
    })
  }

  const handleKeydown = (event) => {
    const key = event.key;
    switch (key) {
      case "ArrowRight":
        next()
        break;
      case "ArrowLeft":
        prev()
        break;
      default:
        break;
    }
  }
</script>


<svelte:window on:keydown={handleKeydown}/>

<div class="App">
  <div class="fixed h-full w-28 left-0 top-0 z-50 
              cursor-pointer hover:bg-white hover:bg-opacity-10"
       on:click="{prev}"></div>
  <div class="fixed h-full w-28 right-0 top-0 z-50 
              cursor-pointer hover:bg-white hover:bg-opacity-10"
        on:click="{next}"></div>
  <TestSlideshow/>
</div>
  