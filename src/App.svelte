<script lang='typescript'>
  import {onMount} from 'svelte';
  import { currentSlide, totalSlides } from './state';
  import './styling/main.css';
  
  import TitlePage from './templates/TitlePage.svelte'

  // Create a handler for clicking on the page (right left)
  // Create a handler for right and left arrow
  // For the above, handle stages and slides
  let slideCount = 0
  totalSlides.subscribe(n => slideCount = n)
  const nextSlide = () => {
    currentSlide.update(n => {
      console.log(`Current slide ${n} total slides ${slideCount}`)
      if (n < slideCount ) return n + 1
      return n
    })
  }
  const prevSlide = () => {
    currentSlide.update(n => {
      console.log(`Current slide ${n}`)
      if (n > 1) return n - 1
      return n
    })
  }

  const handleKeydown = (event) => {
    const key = event.key;
    console.log(key)
    switch (key) {
      case "ArrowRight":
        nextSlide()
        break;
      case "ArrowLeft":
        prevSlide()
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
       on:click="{prevSlide}"></div>
  <div class="fixed h-full w-28 right-0 top-0 z-50 
              cursor-pointer hover:bg-white hover:bg-opacity-10"
       on:click="{nextSlide}"></div>
  <TitlePage
    title="Test Presentation"
    subtitle="This is the first time that I try to make a presentation in the browser"
    backgroundImage={"https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80"}/>
  <TitlePage
    title="This is the second slide"
    subtitle="How does clicking through work."
    backgroundImage={"https://images.unsplash.com/photo-1611444275099-d39965256256?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"}/>
</div>
  