<script lang="ts">
  import Saos from "saos";
  import { theme } from "$store/theme";

  let techLogos = [
    {
      name: "HTML5",
      position: {
        x: "-20rem",
        y: "-15rem",
      },
      size: {
        width: "96px",
        height: "79px"
      },
      animation: "float 6s ease-in-out infinite",
      path: "/tech-logos/html5.svg"
    },
    {
      name: "CSS3",
      position: {
        x: "-11rem",
        y: "17rem",
      },
      size: {
        width: "38px",
        height: "55px"
      },
      animation: "float 3s ease-in-out infinite",
      path: "/tech-logos/css3.svg"
    },
    {
      name: "Boostrap",
      position: {
        x: "-18rem",
        y: "-25rem",
      },
      size: {
        width: "86px",
        height: "69px"
      },
      animation: "float 3.4s ease-in-out infinite",
      path: "/tech-logos/bootstrap.svg"
    },
    {
      name: "Javascript",
      position: {
        x: "-1rem",
        y: "18rem",
      },
      size: {
        width: "80px",
        height: "80px"
      },
      animation: "float 4.5s ease-in-out infinite",
      path: "/tech-logos/javascript.svg"
    },
    {
      name: "Typescript",
      position: {
        x: "-29.5rem",
        y: "2rem",
      },
      size: {
        width: "68px",
        height: "68px"
      },
      animation: "float 3s ease-in-out infinite",
      path: "/tech-logos/typescript.svg"
    },
    {
      name: "SASS",
      position: {
        x: "11rem",
        y: "22rem",
      },
      size: {
        width: "58px",
        height: "58px"
      },
      animation: "float 2.4s ease-in-out infinite",
      path: "/tech-logos/sass.svg"
    },
    {
      name: "Material",
      position: {
        x: "-20.5rem",
        y: "9rem",
      },
      size: {
        width: "72px",
        height: "72px"
      },
      animation: "float 5.2s ease-in-out infinite",
      path: "/tech-logos/material.svg"
    },
    {
      name: "Angular",
      position: {
        x: "24.5rem",
        y: "-2.5rem",
      },
      size: {
        width: "92px",
        height: "98px"
      },
      animation: "float 5.8s ease-in-out infinite",
      path: "/tech-logos/angular.svg"
    },
    {
      name: "Vue",
      position: {
        x: "-28.75rem",
        y: "-8rem",
      },
      size: {
        width: "68px",
        height: "68px"
      },
      animation: "float 2.6s ease-in-out infinite",
      path: "/tech-logos/vue.svg"
    },
    {
      name: "Nuxt JS",
      position: {
        x: "18.5rem",
        y: "16rem",
      },
      size: {
        width: "78px",
        height: "56px"
      },
      animation: "float 4.6s ease-in-out infinite",
      path: "/tech-logos/nuxtjs.svg"
    },
    {
      name: "Svelte",
      position: {
        x: "13.5rem",
        y: "-17rem",
      },
      size: {
        width: "44px",
        height: "54px"
      },
      animation: "float 1.6s ease-in-out infinite",
      path: "/tech-logos/svelte.svg"
    },
    {
      name: "Nativescript",
      position: {
        x: "-5rem",
        y: "-23rem",
      },
      size: {
        width: "73px",
        height: "73px"
      },
      animation: "float 3.8s ease-in-out infinite",
      path: "/tech-logos/nativescript.svg"
    },
    {
      name: "Cypress",
      position: {
        x: "-19rem",
        y: "20rem",
      },
      size: {
        width: "98px",
        height: "98px"
      },
      animation: "float 2.5s ease-in-out infinite",
      path: "/tech-logos/cypress.svg"
    },
    {
      name: "Android",
      position: {
        x: "7rem",
        y: "-28rem",
      },
      animation: "float 5.5s ease-in-out infinite",
      size: {
        width: "66px",
        height: "58px"
      },
      path: "/tech-logos/android.svg"
    },
    {
      name: "Android Studio",
      position: {
        x: "22.5rem",
        y: "-14rem",
      },
      size: {
        width: "68px",
        height: "68px"
      },
      animation: "float 1.8s ease-in-out infinite",
      path: "/tech-logos/android-studio.svg"
    },
    {
      name: "Github",
      position: {
        x: "19.5rem",
        y: "7rem",
      },
      size: {
        width: "68px",
        height: "68px"
      },
      animation: "float 4s ease-in-out infinite",
      path: "/tech-logos/github.svg"
    }
  ];
  let transitionLogos = false;

  function handleTitleObserver(e: CustomEvent): void {
    transitionLogos = e.detail.observing;
  }

  function handleTitleHover(): void {
    transitionLogos = true;
  }

</script>

<div id="section-4" class="techs-and-tools techs-and-tools__container" class:blackpink-theme="{$theme === 'blackpink'}">
  <div class="techs-and-tools__content-container">
    <div class="title" on:mouseover={handleTitleHover} on:focus={handleTitleHover}>
      <Saos animation={"600ms ease tracking-in-expand both"} once={true} top={100} on:update={handleTitleObserver}>
        <span style="margin-top: -6px; margin-right: 12px;">[</span>
        TECHNOLOGIES & TOOLS
        <span style="margin-top: -6px; margin-left: 12px;">]</span>
      </Saos>
    </div>
  </div>

  <!-- <div class="circle-skeleton--1"></div>
  <div class="circle-skeleton--2"></div> -->

  <div class="techs-logo">
    {#each techLogos as logo }
        <div class="logo" class:hide={!transitionLogos}
        style="transform: translate({logo.position.x}, {logo.position.y})"
      > <!--  -->
        <object title="{logo.name}" type="image/svg+xml" data="{logo.path}" style="
          width: {logo.size.width}; height: {logo.size.height};" style:animation="{logo.animation}">
        </object>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../styles/breakpoints";

  .techs-and-tools {
    &__container {
      position: relative;
      min-height: 1100px;
      height: 1100px;
      padding: 2.5rem;
      // border: 1px solid red;
    }

    &__content {
      &-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .title {
          display: flex;
          align-items: center;
          font-size: 36px;
          font-weight: 900;

          span {
            &:nth-child(1) { color: #FF5B03 }
            &:nth-child(2) { color: #FF9100 }
          }
        }
      }
    }


    &.blackpink-theme {
      &.techs-and-tools__container {
        background-color: var(--surface-secondary-color);
      }

      .techs-and-tools__content {
        &-container {
          .title {
            span {
              &:nth-child(1) { color: #FF94E0 }
              &:nth-child(2) { color: #ff59c7 }
            }
          }
        }
      }
    }
  }

  // .circle-skeleton {
  //   &--1 {
  //     position: absolute;
  //     left: 50%;
  //     top: 50%;
  //     width: 680px;
  //     height: 680px;
  //     border-radius: 50%;
  //     border: 1px solid #dedede;
  //     transform: translate(-50%, -50%);
  //   }

  //   &--2 {
  //     position: absolute;
  //     left: 50%;
  //     top: 50%;
  //     width: 880px;
  //     height: 880px;
  //     border-radius: 50%;
  //     border: 1px solid #dedede;
  //     transform: translate(-50%, -50%);
  //   }
  // }

  .techs-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .logo {
      position: absolute;
      transform: translate(0, 0);
      transition: all ease 1s;

      &.hide {
        // top: unset !important;
        // bottom: unset !important;
        // left: unset !important;
        // right: unset !important;
        transform: translate(-50%, -50%) !important;
        opacity: 0 !important;
      }
    }
  }

  @include media-breakpoint-max(md) {
    .techs-and-tools {
      &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;

        min-height: 620px;
        height: auto;
      }

      &__content {
        &-container {
          .title {
            margin-bottom: 4rem;
            white-space: nowrap;
          }
        }
      }
    }

    .techs-logo {
      position: static;
      transform: none;

      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;

      .logo {
        position: static;
        transform: unset !important;

        object {
          width: 76px !important;
          height: 76px !important;
        }
      }
    }
  }

  @include media-breakpoint-max(xs) {
    .techs-and-tools {
      &__content {
        &-container {
          .title {
            font-size: 26px;
          }
        }
      }
    }

    .techs-logo {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;

      .logo {
        position: static;

        object {
          max-width: 76px;
          max-height: 76px;
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
  }
</style>