<script lang="ts">
  import { theme, updateTheme } from "$store/theme";
  import { slide } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';

  let showMenu = false;
</script>

<div class="theme-switcher" on:click={() => showMenu = !showMenu}>
  <div class="theme-switcher__container">
    <div class="theme-switcher__options">
      {#if showMenu }
        <ul class="theme-list" transition:slide="{{duration: 300, easing: circInOut }}">
          {#if $theme !== "blackpink"}
            <li class="theme-list-item" on:click="{() => updateTheme("blackpink")}">Blackpink Theme</li>
          {/if}
          {#if $theme !== "default"}
            <li class="theme-list-item" on:click="{() => updateTheme("default")}">Default Theme</li>
          {/if}
        </ul>
      {/if}
      <ul class="theme-list">
        <li class="theme-list-item selected">
          <span style="text-transform: capitalize;">{$theme} Theme</span>
          <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70711 9.29289L15 0L16.4142 1.41421L5.70711 12.1213L0 6.41421L1.41421 5L5.70711 9.29289Z" fill="#FFFFFF"/>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  .theme-switcher {
    position: relative;
    z-index: 10;

    &__container {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      min-width: 180px;
      color: #FFFFFF;
      padding: 0.25rem 0;
      background-color: var(--primary-color);
      border-radius: 25px;
      box-shadow: 4px 4px 31px -6px rgba(0, 0, 0, 0.35);
      overflow: hidden;
      cursor: pointer;
    }

    &__options {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .theme-list {
        width: 100%;
        overflow: hidden;

        .theme-list-item {
          padding: 0.5rem 1.25rem;
          &:hover {
            background-color: var(--secondary-color);
          }

          &.selected {
            display: flex;
            align-items: center;
            column-gap: 0.5rem;

            &:hover {
              background-color: unset !important;
            }
          }
        }
      }
    }
  }
</style>