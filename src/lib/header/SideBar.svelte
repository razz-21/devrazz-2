<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";

  export let showSidebar = true;
  export let section: string;
  const dispatch = createEventDispatcher();

  function closeSidebar() {
    dispatch('closeSidebar')
  }

  function scrollTo(section: string) {
    const scrollHeight = document.querySelector(`#${section}`)?.getBoundingClientRect().top || 0;
    scrollBy({
      top: scrollHeight - 99,
      behavior: "smooth"
    });

    closeSidebar();
  }
</script>

{#if showSidebar}
  <div class="sidebar__container active" transition:fly="{{ x: 360, duration: 300 }}">
    <div class="close-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={closeSidebar}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.70711 16.7071L12 13.4142L15.2929 16.7071L16.7071 15.2929L13.4142 12L16.7071 8.70711L15.2929 7.29289L12 10.5858L8.70711 7.29289L7.29289 8.70711L10.5858 12L7.29289 15.2929L8.70711 16.7071Z" fill="black"/>
      </svg>
    </div>

    <div class="sidebar__menu">
      <div class="sidebar__menu-item" class:active={ section === "section-1" }>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={() => scrollTo("section-1")}>Home</a>
      </div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <div class="sidebar__menu-item" class:active={ section === "section-2" }>
        <a on:click={() => scrollTo("section-2")}>Services</a>
      </div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <div class="sidebar__menu-item" class:active={ section === "section-3" }>
        <a on:click={() => scrollTo("section-3")}>Projects</a>
      </div>
      <div class="sidebar__menu-item" class:active={ section === "section-4" }>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={() => scrollTo("section-4")}>Techs & Tools</a>
      </div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <div class="sidebar__menu-item" class:active={ section === "section-5" }>
        <a on:click={() => scrollTo("section-5")}>About Me</a>
      </div>
      <div class="sidebar__menu-item" class:active={ section === "section-6" }>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={() => scrollTo("section-6")}>Contacts</a>
      </div>
    </div>
  </div>
{/if}

{#if showSidebar}
  <div class="sidebar__backdrop" transition:fade={{ duration: 150 }} on:click={closeSidebar}></div>
{/if}

<style lang="scss">
  .sidebar {
    &__container {
      position: absolute;
      top: 0;
      right: -360px;
      height: 100vh;
      width: 360px;
      padding: 2rem 1.5rem;
      background-color: var(--surface-primary-color);
      overflow: hidden;
      z-index: 10;

      &.active {
        right: 0;
      }
    }

    &__menu {
      display: flex;
      flex-direction: column;
      row-gap: 0.25rem;

      &-item {
        padding: 0.75rem 0.5rem;
        margin-right: -2rem;
        cursor: pointer;

        &.active {
          background-image: var(--primary-gradient);

          a {
            color: $color-white;
          }
        }
        
        a {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-color);
        }
      }
    }

    &__backdrop {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background-color: rgba($color: #000000, $alpha: 0.6);
      backdrop-filter: blur(20px);
      z-index: 9;
    }
  }

  .close-icon {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
    svg {
      height: 32px;
      width: 32px;
      cursor: pointer;

      path { fill: var(--primary-color); }
    }
  }
</style>