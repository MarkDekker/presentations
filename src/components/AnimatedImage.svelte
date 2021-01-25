<div class="h-full w-full overflow-hidden flex justify-center items-center">
  <div style="background-image: url('{backgroundImage}')"
       class="bg-scroll ken-burns bg-no-repeat bg-cover image relative"
       class:unblur="{unblur}"
       class:zoom="{zoom}">
</div>
</div>


<script>
  export let backgroundImage
  export let zoom = true
  export let unblur = true
</script>

<style>
  .image {
    height: 100%;
    width: 100%;
    animation-timing-function: ease-out;
  }

  .ken-burns {
    background-position: 50% 50%;
  }

  .zoom {
    animation-name: zooming;
    animation-duration: 60s;
  }
  .unblur {
    animation-name: unblurring;
    animation-duration: 1s;
  }
  
  @-webkit-keyframes zooming {
    from {
      transform: scale(1.0);
    }
    to {
      transform: scale(1.4);
    }
  }

  @-webkit-keyframes unblurring {
    from {
      filter: blur(10px);
    }
    to {
      filter: blur(0px);
    }
  }


  </style>