<script lang="ts">
  import { fade } from "svelte/transition";
  import { screen, type ScreenType } from "$store/screen";
  import { onDestroy } from "svelte";
  import Saos from "saos";
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";
  import type { Engine } from "tsparticles-engine";
  import { theme } from '$store/theme'

  let screenType: ScreenType = "desktop";
  $: particlesConfig = {
    particles: {
      color: {
        value: "#E5E4E9",
      },
      links: {
        enable: true,
        color: "#E5E4E9",
      },
      move: {
        enable: true,
      },
      opacity: {
        value: screenType === "desktop" ? 1 : 0
      }
    },
    style: {
      position: "absolute",
      height: screenType === "desktop" ? "100%" : "100rem"
    }
  }


  let onParticlesLoaded = (event: CustomEvent) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (engine: Engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  };

  const screenUnsubscriber = screen.subscribe((screen) => {
    screenType = screen;
  });

  function scrollTo(section: string) {
    const scrollHeight = document.querySelector(`#${section}`)?.getBoundingClientRect().top || 0;
    scrollBy({
      top: scrollHeight - 99,
      behavior: "smooth"
    })
  }

  onDestroy(screenUnsubscriber);
</script>

<div id="section-1" class="head-content__container">

  {#if $theme === "default"}
    <div transition:fade>
      <Particles
        id="tsparticles"
        options="{particlesConfig}"
        on:particlesLoaded="{onParticlesLoaded}"
        particlesInit="{particlesInit}"
      />
    </div>
  {/if}

  <div class="head-content__content">
    <div class="head-content__content-container">

      {#if $theme === "blackpink"}
        <div class="bp-fang-asset" transition:fade>
          <object type="image/svg+xml" data="/images/bp-fang--left.svg" title="Left fang" style:animation="float 6s ease-in-out infinite"></object>
          <object type="image/svg+xml" data="/images/bp-fang--right.svg" title="Right fang" style:animation="float 6s ease-in-out infinite"></object>
        </div>
      {/if}

      <div class="head-content__content-main">
        <div class="content-main__salutation">
          <Saos animation={`1s ease-in-out ${ screenType === "desktop" ? '1s' : '0s' } scale-bounce-in both`} once={true}>
            <img src="images/emoji__handwave.png" alt="Handwave">
          </Saos>
          <h3 style:position={"relative"} style:overflow={"hidden"}>
            <Saos animation={`1s ease ${ screenType === "desktop" ? '1.5s' : '0s' } slide-overflow-up both`} once={true}>
              <span>Hi, I am</span>
            </Saos>
          </h3>
        </div>
        <h2 class="text-primary mb-3" style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={`1s ease ${ screenType === "desktop" ? '1.8s' : '0s' } slide-overflow-up both`} once={true}>
            <span>Ernesto C. Razo Jr.</span>
          </Saos>
        </h2>
        <div style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={`1s ease ${ screenType === "desktop" ? '2.2s' : '0s' } slide-overflow-up both`} once={true}>
            <h1>FRONT-END/</h1>
            <h1>MOBILE DEVELOPER</h1>
          </Saos>
        </div>
        <div class="content-main__subdescription mt-4">
          <Saos animation={`1s ease ${ screenType === "desktop" ? '2.8s' : '0s' } fade-in both`} once={true}>
            <img src="images/emoji__computer.png" height="30" width="30" alt="Computer">
          </Saos>
          <Saos animation={`1s ease ${ screenType === "desktop" ? '3s' : '0s' } fade-in both`} once={true}>
            <p style="max-width: 28rem;">Specialized in creating and building application for web, responsive web and android mobile.</p>
          </Saos>
        </div>
        <div style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={`1s ease ${ screenType === "desktop" ? '3.5s' : '0s' } slide-overflow-up both`} once={true}>
            <a id="getCvBtn" type="button" class="btn btn-primary-gradient" style="margin: 3rem 0; display: inline-block;"
              href="/CV - Ernesto Razo [24.06.2022].pdf" download="CV - Ernesto Razo">
              Get CV
            </a>
          </Saos>
        </div>
        
        <Saos animation={`1s ease ${ screenType === "desktop" ? '4s' : '0s' } fade-in both`} once={true}>
          <div class="content-main__chevrondown-icon">
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" on:click="{() => scrollTo("section-2")}">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M47.5554 14.5555L33 29.1109L18.4445 14.5555L14.5554 18.4445L33 36.8891L51.4445 18.4445L47.5554 14.5555ZM51.4445 32.1945L47.5554 28.3054L33 42.8609L18.4445 28.3054L14.5554 32.1945L33 50.6391L51.4445 32.1945Z" fill="#FF5B03"/>
            </svg>
          </div>
        </Saos>

      </div>
      <div class="head-content__content-image">
        <Saos animation={`1s ease ${ screenType === "desktop" ? '2s' : '0s' } fade-in both`} once={true}>
          <img src="images/razz__image{ $theme === "blackpink" ? "-bp" : "1" }.png" height="380" width="380" alt="Ernesto Razo">
        </Saos>
        <Saos animation={`1s ease ${ screenType === "desktop" ? '2.5s' : '0s' } fade-in both`} once={true}>
          <div class="tech-extras">
            <svg width="52" height="52" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" style:animation="float 6s ease-in-out infinite">
              <path d="M61.3594 0H6.64062C2.97311 0 0 2.97311 0 6.64062V61.3594C0 65.0269 2.97311 68 6.64062 68H61.3594C65.0269 68 68 65.0269 68 61.3594V6.64062C68 2.97311 65.0269 0 61.3594 0Z" fill="#CCC9F0"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.1016 54.0547V60.6953C43.1773 61.2531 44.4922 61.6648 45.9531 61.9437C47.4141 62.2226 49.0078 62.3554 50.6016 62.3554C52.1953 62.3554 53.6562 62.2093 55.1172 61.9039C56.5781 61.5984 57.7734 61.0937 58.8359 60.4429C59.9117 59.739 60.8281 58.8492 61.3594 57.6539C61.8906 56.4586 62.3023 55.1304 62.3023 53.4039C62.3023 52.1953 62.1164 51.1461 61.7578 50.2164C61.3992 49.2867 60.8812 48.4898 60.1641 47.8258C59.4867 47.1218 58.7031 46.4976 57.7734 45.9664C56.8437 45.4351 55.7812 44.8773 54.5859 44.3726C53.7094 44.014 52.9922 43.6687 52.1953 43.3234C51.5047 42.9781 50.907 42.6328 50.4687 42.2875C49.9773 41.9289 49.6055 41.557 49.3398 41.1718C49.0742 40.7734 48.9414 40.3351 48.9414 39.8437C48.9414 39.3922 49.0596 38.9804 49.3 38.6086C49.5404 38.2367 49.8711 37.9312 50.2961 37.6656C50.7211 37.4 51.2523 37.2008 51.8898 37.0547C52.5141 36.9086 53.2047 36.8422 54.0148 36.8422C54.5727 36.8422 55.157 36.8833 55.7414 36.967C56.3523 37.0507 56.9766 37.1795 57.6008 37.3522C58.225 37.5248 58.8359 37.7373 59.4602 38.0029C60.0445 38.2686 60.5891 38.574 61.0539 38.9193V32.6772C60.0445 32.292 58.9289 31.9998 57.7336 31.8139C56.5383 31.6279 55.2102 31.535 53.6164 31.535C52.0227 31.535 50.5617 31.7076 49.1008 32.0397C47.6398 32.3717 46.4445 32.9029 45.382 33.6334C44.3062 34.3506 43.5227 35.2272 42.8586 36.4225C42.2344 37.5381 41.9289 38.8131 41.9289 40.4068C41.9289 42.399 42.5 44.1256 43.6555 45.4537C44.7977 46.9147 46.5773 47.9772 48.8352 49.0397C49.7516 49.4115 50.5617 49.7834 51.3586 50.142C52.1555 50.5006 52.8195 50.8725 53.3508 51.2576C53.9219 51.6428 54.3734 52.0678 54.6789 52.5193C55.0109 52.9709 55.1836 53.5022 55.1836 54.1131C55.1836 54.5381 55.08 54.9365 54.8781 55.3084C54.6762 55.6803 54.3602 55.999 53.9352 56.2647C53.5102 56.5303 52.9922 56.7428 52.3414 56.9022C51.7172 57.0483 51.0133 57.1279 50.0836 57.1279C48.6227 57.1279 47.1617 56.8756 45.8336 56.3709C44.3727 55.8662 43.0445 55.1092 41.8492 54.1131L42.1016 54.0547ZM30.9453 37.7187H39.4453V32.2734H15.6719V37.7187H24.1719V62.0234H30.9453V37.7187Z" fill="white"/>
            </svg>
            <svg width="52" height="71" viewBox="0 0 68 71" fill="none" xmlns="http://www.w3.org/2000/svg" style:animation="float 4s ease-in-out infinite">
              <path d="M0.0274048 11.8826L33.4443 0.181946L67.7612 11.6746L62.2047 55.1229L33.4443 70.7758L5.13392 55.3309L0.0274048 11.8826Z" fill="#CCC9F0"/>
              <path d="M67.7612 11.6746L33.4443 0.181946V70.7758L62.2047 55.149L67.7612 11.6746Z" fill="#CCC9F0"/>
              <path d="M33.4972 8.42447L12.6746 53.953L20.4532 53.823L24.6338 43.5522H43.3134L47.8908 53.953L55.3254 54.083L33.4972 8.42447ZM33.5503 23.0113L40.5881 37.4679H27.3587L33.5503 23.0113Z" fill="white"/>
            </svg>
            <svg width="52" height="57" viewBox="0 0 65 57" fill="none" xmlns="http://www.w3.org/2000/svg" style:animation="float 5s ease-in-out infinite">
              <g clip-path="url(#clip0_3_83)">
                <path d="M4.53473 47.137C2.29971 47.137 0.00149536 48.9363 0.00149536 52.0857C0.00149536 54.9649 2.02215 56.9985 4.53473 56.9985C6.60873 56.9985 7.53309 55.6 7.53309 55.6V56.2096C7.53309 56.4977 7.80426 56.8192 8.1399 56.8192H9.63908V47.3522H7.53309V48.5535C7.53309 48.5535 6.60099 47.137 4.53473 47.137V47.137ZM4.90988 49.0729C6.74978 49.0729 7.71491 50.6985 7.71491 52.085C7.71491 53.6294 6.56901 55.0961 4.91379 55.0962C3.53013 55.0962 2.14409 53.9703 2.14409 52.0646C2.14409 50.3444 3.33686 49.0729 4.90988 49.0729Z" fill="#CCC9F0"/>
                <path d="M12.5661 56.8191C12.2425 56.8191 11.9593 56.586 11.9593 56.2095V47.3521H14.0653V48.5236C14.5425 47.803 15.4748 47.134 16.9059 47.134C19.2448 47.134 20.4903 49.0072 20.4903 50.7588V56.8191H19.0268C18.6431 56.8191 18.3843 56.4964 18.3843 56.1736V51.225C18.3843 50.254 17.7922 49.0749 16.4228 49.0749C14.9451 49.0749 14.0653 50.4779 14.0653 51.7987V56.8191L12.5661 56.8191Z" fill="#CCC9F0"/>
                <path d="M26.6297 47.137C24.3946 47.137 22.0965 48.9363 22.0965 52.0857C22.0965 54.9649 24.1171 56.9985 26.6297 56.9985C28.7036 56.9985 29.628 55.6 29.628 55.6V56.2096C29.628 56.4977 29.8992 56.8192 30.2348 56.8192H31.734V42.6187H29.628V48.5535C29.628 48.5535 28.6959 47.137 26.6297 47.137V47.137ZM27.0048 49.0728C28.8447 49.0728 29.8098 50.6985 29.8098 52.085C29.8098 53.6294 28.6639 55.0961 27.0087 55.0961C25.625 55.0961 24.239 53.9703 24.239 52.0646C24.239 50.3444 25.4318 49.0728 27.0048 49.0728Z" fill="#CCC9F0"/>
                <path d="M34.661 56.8191C34.3374 56.8191 34.0542 56.586 34.0542 56.2095V47.3521H36.1602V48.9299C36.5227 48.046 37.3049 47.2445 38.6945 47.2445C39.0819 47.2445 39.4441 47.3162 39.4441 47.3162V49.5037C39.4441 49.5037 38.9918 49.3244 38.4446 49.3244C36.967 49.3244 36.1602 50.7273 36.1602 52.0482V56.8191H34.661Z" fill="#CCC9F0"/>
                <path d="M52.2227 56.8191C51.8991 56.8191 51.6159 56.586 51.6159 56.2095V47.3521H53.7218V56.8192L52.2227 56.8191Z" fill="#CCC9F0"/>
                <path d="M59.897 47.137C57.662 47.137 55.3638 48.9363 55.3638 52.0857C55.3638 54.9649 57.3844 56.9985 59.897 56.9985C61.971 56.9985 62.8953 55.6 62.8953 55.6V56.2096C62.8953 56.4977 63.1665 56.8192 63.5021 56.8192H65.0013V42.6187H62.8953V48.5535C62.8953 48.5535 61.9632 47.137 59.897 47.137V47.137ZM60.2721 49.0728C62.112 49.0728 63.0771 50.6985 63.0771 52.085C63.0771 53.6294 61.9312 55.0961 60.276 55.0961C58.8924 55.0961 57.5063 53.9703 57.5063 52.0646C57.5063 50.3444 58.6991 49.0728 60.2721 49.0728Z" fill="#CCC9F0"/>
                <path d="M52.6541 45.3106C53.4231 45.3106 54.0465 44.6843 54.0465 43.9116C54.0465 43.139 53.4231 42.5127 52.6541 42.5127C51.885 42.5127 51.2616 43.139 51.2616 43.9116C51.2616 44.6843 51.885 45.3106 52.6541 45.3106Z" fill="#CCC9F0"/>
                <path d="M44.9982 47.1338C42.6576 47.1338 40.086 48.8891 40.086 52.0688C40.086 54.9664 42.2764 56.9988 44.9932 56.9988C48.3413 56.9988 49.9762 54.2948 49.9762 52.0872C49.9762 49.3782 47.871 47.1338 44.9982 47.1338ZM45.0059 49.1096C46.6245 49.1096 47.8319 50.4202 47.8319 52.0748C47.8319 53.758 46.5502 55.0569 45.0107 55.0569C43.5816 55.0569 42.1924 53.8885 42.1924 52.1031C42.1924 50.2879 43.5137 49.1096 45.0059 49.1096Z" fill="#CCC9F0"/>
                <path d="M48.3642 11.025L53.7525 1.64773C54.0566 1.12204 53.8727 0.454253 53.3565 0.148779C52.8403 -0.15669 52.1686 0.0209049 51.8716 0.546603L46.4126 10.0447C42.2476 8.13369 37.5593 7.06807 32.5175 7.06807C27.4757 7.06807 22.7874 8.13367 18.6225 10.0447L13.1634 0.546603C12.8594 0.0209049 12.1947 -0.15669 11.6714 0.148779C11.1481 0.454253 10.9713 1.12204 11.2754 1.64773L16.6637 11.025C7.37206 16.0831 1.07861 25.5314 0.0391617 36.5923H64.9959C63.9564 25.5314 57.663 16.083 48.3643 11.025H48.3642ZM17.6042 27.4282C16.098 27.4282 14.8818 26.1992 14.8818 24.6932C14.8818 23.18 16.1051 21.9581 17.6042 21.9581C19.1104 21.9581 20.3266 23.1871 20.3266 24.6932C20.3337 26.1992 19.1104 27.4282 17.6042 27.4282ZM47.4238 27.4282C45.9176 27.4282 44.7014 26.1992 44.7014 24.6932C44.7014 23.18 45.9247 21.9581 47.4238 21.9581C48.93 21.9581 50.1463 23.1871 50.1463 24.6932C50.1533 26.1992 48.93 27.4282 47.4238 27.4282Z" fill="#CCC9F0"/>
              </g>
              <defs>
                <clipPath id="clip0_3_83">
                  <rect width="65" height="57" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </Saos>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/breakpoints";

  .head-content {
    &__content {
      padding: 100px 1.5rem 0;
      margin-bottom: 3rem;
      overflow: hidden;

      &-container {
        position: relative;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 2rem;
        min-height: 820px;
      }

      &-main {
        flex-basis: 60%;
        z-index: 2;

        h1 {
          font-size: 58px;
          line-height: 1;
          font-weight: 800;
        }
      }

      &-image {
        flex-basis: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding-right: 2.5rem;
        z-index: 1;

        img {
          width: 100%;
          max-width: 400px;
          height: 100%;
        }

        .tech-extras {
          svg {
            position: absolute;

            &:nth-child(1) {
              left: -9rem;
              top: -2rem;
              path {
                &:first-child {
                  fill: var(--secondary-color);
                }
              }
            }
            &:nth-child(2) {
              left: -1rem;
              bottom: -3rem;
              path {
                &:not(:last-child) {
                  fill: var(--secondary-color);
                }
              }
            }
            &:nth-child(3) {
              top: 0;
              path {
                fill: var(--secondary-color);
              }
            }
          }
        }
      }
    }
  }

  .content-main {
    &__salutation {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }

    &__subdescription {
      display: flex;
      column-gap: 0.75rem;
    }

    &__chevrondown-icon {
      svg {
        width: 52px;
        height: 52px;
        cursor: pointer;
        path {
          fill: var(--primary-color);
        }
      }
    }
  }

  .bp-fang-asset {
    position: absolute;
    top: -1.5rem;
    left: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 860px;
    margin: 0 auto;
    transform: translate(-50%, 0);
  }

  @include media-breakpoint-max(md) {
    .head-content {
      &__content {
        &-container {
          flex-direction: column-reverse;
        }

        &-main {
          flex-basis: 100%;
          align-self: flex-start;
          margin-top: 6rem;
          padding: 0 1rem;
        }

        &-image {
          flex-basis: 100%;
          margin-top: 5rem;
          padding-right: 0;

          img {
            max-width: 340px;
          }

          .tech-extras {
            svg {
              &:nth-child(1) {
                left: -4rem;
              }
            }
          }
        }
      }
    }
  }

  @include media-breakpoint-max(xs) {
    .head-content {
      &__content {
        // &-container {
        // }

        &-main {
          padding: 0;

          h1 { font-size: 48px; }
          h2 { font-size: 28px; }

          .content-main {
            &__salutation {
              img { width: 32px; }
              h3 { font-size: 20px; }
            }

            &__subdescription {
              img { width: 28px; height: 28px; }
            }

            &__chevrondown-icon {
              svg {
                width: 52px;
                height: 52px;
                cursor: pointer;
              }
            }
          }
        }

        &-image {
          margin-top: 5rem;

          img {
            max-width: 320px;
          }

          .tech-extras {
            svg {
              width: 46px;

              &:nth-child(1) {
                left: -2rem;
              }
            }
          }
        }
      }
    }
  }
</style>