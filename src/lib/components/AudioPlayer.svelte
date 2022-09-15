<script lang="ts">
  import { theme } from "$store/theme";
  import { slide, fly } from "svelte/transition";
	import { onMount } from "svelte";

  let audioEl: HTMLAudioElement;
  let showMiniPlayer = true;

  $: audioPlayerState = "Loading";

  $: {
    if ($theme === "blackpink") {
      setTimeout(() => onLoadPlayer());
      showMiniPlayer = true;
    };
  }

  function onLoadPlayer(): void {
    if (audioEl) {
      audioEl.volume = 0.4;
      audioEl.play();
    }
  }

  function closeMiniPlayer(): void {
    showMiniPlayer = false;
    audioEl.pause();
    audioEl.currentTime = 0;
  }

  onMount(() => {
    if (audioEl) onLoadPlayer();
  })
</script>

{#if $theme === "blackpink" }
  <div class="audio-player" transition:slide={{ duration: 500, delay: 500 }}>
    <audio bind:this={audioEl} src="/audios/BLACKPINK--Pink-Venom.mp3"
      on:load="{() => onLoadPlayer()}" on:canplay="{() => audioPlayerState = "Ready"}" on:playing="{() => audioPlayerState = "Playing"}" on:pause="{() => audioPlayerState = "Paused" }"
      on:ended="{() => audioPlayerState = "Ended" }">
    </audio>
    <div class="audio-player__container">
      {#if showMiniPlayer}
        <div class="audio-mini-player" transition:fly|local={{ duration: 300, x: -20 }}>
          <img id="player-poster" class:playing={audioPlayerState === "Playing"} src="/images/pink-venom--poster.jpg" alt="thumbnail">
          <div class="audio-btn-toggle">

            {#if audioPlayerState === "Loading"}
              <svg id="svg-loading" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9C2.01472 9 0 6.98528 0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9ZM0 15.5C0 17.9853 2.01472 20 4.5 20C6.98528 20 9 17.9853 9 15.5C9 13.0147 6.98528 11 4.5 11C2.01472 11 0 13.0147 0 15.5ZM11 15.5C11 17.9853 13.0147 20 15.5 20C17.9853 20 20 17.9853 20 15.5C20 13.0147 17.9853 11 15.5 11C13.0147 11 11 13.0147 11 15.5ZM11 4.5C11 6.98528 13.0147 9 15.5 9C17.9853 9 20 6.98528 20 4.5C20 2.01472 17.9853 0 15.5 0C13.0147 0 11 2.01472 11 4.5ZM15.5 7C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2C14.1193 2 13 3.11929 13 4.5C13 5.88071 14.1193 7 15.5 7ZM7 4.5C7 5.88071 5.88071 7 4.5 7C3.11929 7 2 5.88071 2 4.5C2 3.11929 3.11929 2 4.5 2C5.88071 2 7 3.11929 7 4.5ZM15.5 18C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13C14.1193 13 13 14.1193 13 15.5C13 16.8807 14.1193 18 15.5 18ZM7 15.5C7 16.8807 5.88071 18 4.5 18C3.11929 18 2 16.8807 2 15.5C2 14.1193 3.11929 13 4.5 13C5.88071 13 7 14.1193 7 15.5Z" fill="black"/>
              </svg>
            {:else if audioPlayerState === "Ready" || audioPlayerState === "Paused" || audioPlayerState === "Ended"}
              <svg width="28" height="28" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg" on:click="{() => audioEl.play()}">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00005V20C0 20.7912 0.875246 21.2691 1.54076 20.8412L15.5408 11.8412C16.1531 11.4476 16.1531 10.5525 15.5408 10.1589L1.54076 1.15887C0.875246 0.731041 0 1.20888 0 2.00005ZM13.1507 11L2 18.1684V3.83171L13.1507 11Z" fill="black"/>
              </svg>
            {:else if audioPlayerState === "Playing"}
              <svg width="16" height="28" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" on:click="{() => audioEl.pause()}">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H4C5.10457 20 6 19.1046 6 18V2C6 0.89543 5.10457 0 4 0ZM12 0H10C8.89543 0 8 0.89543 8 2V18C8 19.1046 8.89543 20 10 20H12C13.1046 20 14 19.1046 14 18V2C14 0.89543 13.1046 0 12 0ZM2 2V18H4V2H2ZM10 18V2H12V18H10Z" fill="black"/>
              </svg>
            {/if}
          </div>
        </div>
      {/if}
      <div class="audio-toggle">
        {#if !showMiniPlayer}
          <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" on:click="{() => showMiniPlayer = true}">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM11 4V6C13.7614 6 16 8.23858 16 11H18C18 7.13401 14.866 4 11 4ZM11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11C14 12.6569 12.6569 14 11 14ZM12 11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11C10 10.4477 10.4477 10 11 10C11.5523 10 12 10.4477 12 11Z" fill="black"/>
          </svg>
        {:else}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" on:click="{() => closeMiniPlayer()}">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.70711 16.7071L12 13.4142L15.2929 16.7071L16.7071 15.2929L13.4142 12L16.7071 8.70711L15.2929 7.29289L12 10.5858L8.70711 7.29289L7.29289 8.70711L10.5858 12L7.29289 15.2929L8.70711 16.7071Z" fill="black"/>
          </svg>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .audio-player {
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    z-index: 5;

    // &__container {
    // }

    .audio-mini-player {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      row-gap: 0.5rem;
      width: 46px;
      height: 100%;
      margin-bottom: .5rem;
      padding: 0.5rem 0;
      background-color: var(--primary-color);
      border-radius: 25px;
      box-shadow: 4px 4px 31px -6px rgba(0, 0, 0, 0.35);

      .audio-btn-toggle {
        cursor: pointer;
      }

      img {
        width: 36px;
        height: 36px;
        background-size: cover;
        border-radius: 50%;
      }
    }

    .audio-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      background-color: var(--primary-color);
      border-radius: 100%;
      box-shadow: 4px 4px 31px -6px rgba(0, 0, 0, 0.35);
      cursor: pointer;
    }
  }

  #player-poster {
    animation: playerRotate 8s linear infinite both;
    animation-play-state: paused;
    user-select: none;
    pointer-events: none;

    &.playing {
      animation-play-state: running;
    }
  }
  
  #svg-loading {
    animation: playerRotate 2s linear infinite both;
    user-select: none;
    pointer-events: none;
  }
  
  @keyframes playerRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>