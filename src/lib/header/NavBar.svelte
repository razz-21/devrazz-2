<script lang="ts">
  import { onDestroy } from "svelte";
  import Sidebar from "./SideBar.svelte";
  import Saos from "saos";
  import { screen, type ScreenType } from "$store/screen";

  export let section: string;
  let screenType: ScreenType = "desktop";
  let innerWidth: number;
  let showSidebar = false;

  const screenUnsubscriber = screen.subscribe((screen) => {
    screenType = screen;

    if (screenType === "desktop") {
      showSidebar = false;
      if (typeof window !== "undefined") document.body.style.overflow = "";
    }
  })

  function toggleSidebar() {
    showSidebar = !showSidebar;
    document.body.style.overflow = showSidebar ? "hidden" : "";
  }

  function scrollTo(section: string) {
    const scrollHeight = document.querySelector(`#${section}`)?.getBoundingClientRect().top || 0;
    scrollBy({
      top: scrollHeight - 75,
      behavior: "smooth"
    })
  }

  onDestroy(screenUnsubscriber);

</script>

<svelte:window bind:innerWidth />

<Saos animation={"slide-down-fade 1s ease"} once={true}>
  <div class="wrapper">
    <nav class="nav">
      <div class="nav__container">
        <div class="nav__logo">
          <svg width="42" height="42" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_22)">
              <path d="M60.5 31.1361C60.5 47.4285 47.2924 60.6361 31 60.6361C14.7076 60.6361 1.5 47.4285 1.5 31.1361C1.5 14.8437 14.7076 1.63611 31 1.63611C47.2924 1.63611 60.5 14.8437 60.5 31.1361Z" stroke="#FF5B03" stroke-width="3"/>
              <path d="M43.3525 48.7028H35.5384L31.9259 39.3966C31.507 38.3495 30.5254 37.8259 28.9809 37.8259H26.3107V48.7028H19.0464V20.7449H32.0437C35.4206 20.7449 37.9598 21.4779 39.6614 22.9439C41.363 24.3836 42.2137 26.4517 42.2137 29.148C42.2137 31.0328 41.7033 32.6689 40.6823 34.0563C39.6875 35.4175 38.2739 36.3862 36.4415 36.9621C37.2269 37.1191 37.9337 37.4857 38.5619 38.0615C39.1902 38.6374 39.6875 39.4097 40.0541 40.3783L43.3525 48.7028ZM30.8657 32.3286C32.4363 32.3286 33.5751 32.093 34.2819 31.6218C34.9887 31.1245 35.3421 30.3653 35.3421 29.3443C35.3421 28.271 34.9887 27.4988 34.2819 27.0276C33.6012 26.5564 32.4625 26.3208 30.8657 26.3208H26.2322V32.3286H30.8657Z" fill="#FF5B03"/>
              <path d="M34.1 13.0528C34.1 15.0502 32.4808 16.6694 30.4834 16.6694C28.4859 16.6694 26.8667 15.0502 26.8667 13.0528C26.8667 11.0553 28.4859 9.4361 30.4834 9.4361C32.4808 9.4361 34.1 11.0553 34.1 13.0528Z" fill="#FF5B03"/>
            </g>
            <defs>
              <clipPath id="clip0_1_22">
                <rect width="62" height="62" fill="white" transform="translate(0 0.136108)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        {#if screenType === "desktop"}
          <div class="nav__menu-container">
            <ul class="nav__menu">
              <li class="nav__menu-item" class:active={ section === "section-1" }>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={() => scrollTo("section-1")}>Home</a>
              </li>
              <li class="nav__menu-item" class:active={ section === "section-2" }>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={() => scrollTo("section-2")}>Services</a>
              </li>
              <li class="nav__menu-item" class:active={ section === "section-3" }>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={() => scrollTo("section-3")}>Projects</a>
              </li>
              <li class="nav__menu-item" class:active={ section === "section-4" }>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={() => scrollTo("section-4")}>Techs & Tools</a>
              </li>
              <li class="nav__menu-item" class:active={ section === "section-5" }>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={() => scrollTo("section-5")}>About Me</a>
              </li>
              <li class="nav__menu-item" class:active={ section === "section-6" }>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={() => scrollTo("section-6")}>Contacts</a>
              </li>
            </ul>
          </div>
        {/if}
        <a id="getCVHeadButton" type="button" class="btn" style="margin-left: { screenType === "desktop" ? "unset" : "auto" }"
          href="/CV - Ernesto Razo [04.13.2024]].pdf" download="CV - Ernesto Razo">
          Get CV
        </a>
        {#if screenType !== "desktop"}
          <div class="m__menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={toggleSidebar}>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 7V5H2V7H22ZM22 11V13H2V11H22ZM22 17V19H2V17H22Z" fill="black"/>
            </svg>
          </div>
        {/if }
      </div>
    </nav>
    <Sidebar showSidebar={showSidebar} bind:section on:closeSidebar={toggleSidebar} />
  </div>
</Saos>

<style lang="scss">
  @import "../../styles/mixins.scss";
  
  .wrapper {
    position: fixed;
    width: 100%;
    z-index: 5;
  }

  nav {
    display: flex;
    align-items: center;
    height: 76px;
    background-color: var(--surface-primary-color);

    .nav__container {
      @include container-maxwidth();

      display: flex;
      justify-content: space-between;
      align-items: center;
      
      margin: auto;

      .nav__logo {
        svg {
          path {
            stroke: var(--primary-color);

            &:not(:first-child) {
              fill: var(--primary-color);
            }
          }
        }
      }

      .nav__menu-container {
        ul.nav__menu {
          display: inline-flex;

          li.nav__menu-item {
            a {
              padding: 0.75rem 1.5rem;
              color: var(--text-color);
              font-size: 14px;
              text-transform: uppercase;
              border-radius: 2px;
              white-space: nowrap;
              cursor: pointer;
            }

            &.active {
              a {
                color: var(--primary-color);
              }
            }

            &:hover {
              a {
                background-color: rgba($color: var(--primary-color-rgb), $alpha: 0.1);
                color: var(--primary-color);
                transition: 150ms ease-in-out;
              }
            }
          }
        } 
      }
    }

    .m {
      &__menu {
        margin-left: 1rem;
        svg {
          height: 32px;
          width: 32px;
          cursor: pointer;

          &:hover {
            path {
              fill: var(--primary-color);
              transition: all ease-in-out 150ms;
            }
          }
        }
      }
    }

    #getCVHeadButton {
      color: var(--primary-color);

      &:hover {
        background-color: rgba($color: var(--primary-color-rgb), $alpha: 0.2);
      }
    }
  }
</style>