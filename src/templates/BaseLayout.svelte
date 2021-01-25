<section class="h-screen w-full" class:hidden="{!active}">
  <slot></slot>
</section>

<script>
  import {onMount} from 'svelte';
  import { currentSlide } from '../state.js';
  import { totalSlides } from '../state.js';

  
  let active = false
  let numberOfThisSlide = 0

  totalSlides.update(slideCount => {
    numberOfThisSlide = slideCount + 1
    return slideCount + 1
  })
  currentSlide.subscribe(activeSlideNumber => {
    active = numberOfThisSlide === activeSlideNumber
  })
</script>