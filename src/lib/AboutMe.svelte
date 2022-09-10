<script lang="ts">
  import Saos from "saos";
  import { theme } from "$store/theme";
</script>

<div id="section-5" class="about-me about-me__container" class:blackpink-theme="{ $theme ===  "blackpink"}">
  <div class="about-me__content-container">
    <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
      <h2 class="title">
        <span>ABOUT ME</span>
      </h2>
    </Saos>
    <div class="body-content">
      <Saos animation={"1s ease slide-left-fade both"} once={true} top={100}>
        <div class="image">
          <img src="/images/about-me--photo.png" alt="Ernesto Razo">
        </div>
      </Saos>
      <div class="texts">
        <div class="description-item">
          <Saos animation={"1s ease slide-right-fade both"} once={true} top={100}>
            <img src="/images/emoji__show.png" alt="Emoji Show">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Montes, pellentesque facilisis cursus risus tincidunt massa euismod at. Luctus congue amet lorem vitae. Fermentum viverra est amet egestas feugiat sit amet. Fames massa sapien ullamcorper pellentesque mauris tincidunt elit. Pellentesque lobortis cras feugiat condimentum vitae varius nulla.</p>
          </Saos>
        </div>
        <div class="description-item">
          <Saos animation={"1s ease slide-right-fade both"} once={true} top={100}>
            <img src="/images/emoji__rocket.png" alt="Emoji Rocket">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Montes, pellentesque facilisis cursus risus tincidunt massa euismod at. Luctus congue amet lorem vitae. Fermentum viverra est amet egestas feugiat sit amet. Fames massa sapien ullamcorper pellentesque mauris tincidunt elit. Pellentesque lobortis cras feugiat condimentum vitae varius nulla.</p>
          </Saos>
        </div>
        <div class="description-item">
          <Saos animation={"1s ease slide-right-fade both"} once={true} top={100}>
            <img src="/images/emoji__sparkle.png" alt="Emoji Sparkle">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Montes, pellentesque facilisis cursus risus tincidunt massa euismod at. Luctus congue amet lorem vitae. Fermentum viverra est amet egestas feugiat sit amet. Fames massa sapien ullamcorper pellentesque mauris tincidunt elit. Pellentesque lobortis cras feugiat condimentum vitae varius nulla.</p>
          </Saos>
        </div>
      </div>
    </div>
  </div>

  <Saos animation={"2s ease fade-in both"} top={100} once={true}>
    <div class="about-me__assets-image">
      <svg width="223" height="296" viewBox="0 0 223 296" fill="none" xmlns="http://www.w3.org/2000/svg" style:animation="float 3s ease-in-out infinite">
        <circle id="Ellipse 9" cx="-19.5" cy="53.5" r="232.5" stroke="#FF5B03" stroke-width="20"/>
      </svg>
      <svg width="289" height="289" viewBox="0 0 289 289" fill="none" xmlns="http://www.w3.org/2000/svg" style:animation="bubble 6s ease-in-out infinite">
        <circle cx="144.5" cy="144.5" r="144.5" fill="#1C90FF"/>
      </svg>
      <svg width="269" height="136" viewBox="0 0 269 136" fill="none" xmlns="http://www.w3.org/2000/svg" style:animation="float-lr 4s ease-in-out infinite">
        <path d="M67.8286 135.088C85.5122 134.935 102.411 127.764 114.807 115.151C127.203 102.539 134.081 85.5191 133.928 67.8356C133.775 50.152 126.604 33.2535 113.992 20.8574C101.379 8.46134 84.3595 1.58317 66.6759 1.73603L67.2523 68.4119L67.8286 135.088Z" fill="#FF9100"/>
        <path d="M135.345 135.338C153.029 135.185 169.927 128.014 182.323 115.401C194.719 102.789 201.598 85.7691 201.445 68.0856C201.292 50.402 194.121 33.5035 181.508 21.1074C168.896 8.71134 151.876 1.83317 134.193 1.98603L134.769 68.6619L135.345 135.338Z" fill="#FFA50F"/>
        <path d="M202.014 133.928C219.697 133.775 236.596 126.604 248.992 113.992C261.388 101.379 268.266 84.3595 268.113 66.6759C267.961 48.9924 260.789 32.0938 248.177 19.6977C235.565 7.30167 218.545 0.423502 200.861 0.576359L201.438 67.2523L202.014 133.928Z" fill="#FF9100"/>
      </svg>
      <svg width="143" height="143" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg" style:animation="float 6s ease-in-out infinite">
        <rect y="71.1973" width="100.688" height="100.688" transform="rotate(-45 0 71.1973)" fill="#CCC9F0"/>
      </svg>
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" style:animation="float 7s ease-in-out infinite">
        <circle cx="31.5" cy="31.5" r="31.5" fill="#32DE84"/>
      </svg>
    </div>
  </Saos>
</div>

<style lang="scss">
  @import "../styles/breakpoints";

  .about-me {
    &__container {
      position: relative;
      min-height: 1000px;
      height: 100%;
      padding: 2.5rem;
      background-color: #FAFAFA;
      overflow: hidden;
    }

    &__content {
      &-container {
        position: relative;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        z-index: 2;

        .title {
          text-align: center;
          padding-top: 4rem;
          padding-bottom: 6rem;

          &::after {
            content: "";
            position: absolute;
            width: 13rem;
            height: 3px;
            background-color: #FF5B03;
            left: 50%;
            top: 7rem;
            transform: translate(-50%, 0);
          }
        }

        .body-content {
          display: flex;
          align-items: center;
          column-gap: 2rem;

          .image {
            flex-basis: 50%;
            flex-grow: 0;

            &::before {
              content: "";
              position: absolute;
              left: -1rem;
              bottom: -0.75rem;
              height: 100%;
              width: 100%;
              background-color: var(--primary-color);
              border-radius: 12px;
              z-index: 1;
            }

            img {
              position: relative;
              width: 100%;
              height: 100%;
              max-width: 483px;
              z-index: 2;
            }
          }
          .texts {
            flex-basis: 50%;
            flex-grow: 0;

            .description-item {
              &:not(:last-child) {
                margin-bottom: 1.5rem;
              }

              img {
                height: 38px;
                margin-bottom: 0.5rem;
              }

              p { font-size: 15px; }
            }
          }
        }
      }
    }

    &__assets-image {
      z-index: 1;
      * {
        position: absolute;
      }

      svg {
        &:nth-child(1) {
          top: -3rem;
          left: -1rem;
        }
        &:nth-child(2) {
          bottom: -11rem;
          left: 8rem;
        }
        &:nth-child(3) {
          top: 4rem;
          right: -3rem;
          height: 6rem;
        }
        &:nth-child(4) {
          bottom: 2rem;
          height: 7rem;
          right: 1rem;
        }
        &:nth-child(5) {
          bottom: 9rem;
          right: 9rem;
          height: 3rem;
        }
      }
    }
  }

  .blackpink-theme {
    &.about-me {
      color: #5A5A5A;

      &__container {
        background-color: #C4C4C4;
      }
    }

    .about-me__content {
      &-container {
        .title {
          color: #2E2E2E;

          &::after {
            background-color: #CFCFCF;
          }
        }
      }
    }

    .about-me__assets-image {
      svg {
        &:nth-child(1) {
          circle {
            stroke: #797979;
          }
        }
        &:nth-child(2) {
          circle {
            fill: #FF94E0;
          }
        }
        &:nth-child(3) {
          path {
            &:nth-child(1), &:nth-child(3) {
              fill: #797979;
            }
            &:nth-child(2) {
              fill: #FF94E0;
            }
          }
        }
        &:nth-child(4) {
          rect {
            fill: #797979;
          }
        }
        &:nth-child(5) {
          circle {
            fill: #FF94E0;
          }
        }
      }
    }
  }

  @include media-breakpoint-max(md) {
    .about-me {
      &__container {
        padding: 2.5rem 2.5rem 8rem;
      }

      &__content {
        &-container {
          .body-content {
            flex-direction: column;
            row-gap: 3rem;
          }
        }
      }

      &__assets-image {
        svg {
          &:nth-child(1) {
            top: -10rem;
            left: -5rem;
          }
          &:nth-child(2) {
            bottom: -14rem;
            left: 0rem;
          }
          &:nth-child(3) {
            top: 1rem;
            right: -5rem;
            height: 4rem;
          }
          &:nth-child(4) {
            bottom: 1rem;
            height: 5rem;
            right: -1rem;
          }
          &:nth-child(5) {
            bottom: 5rem;
            right: 4rem;
            height: 2rem;
          }
        }
      }
    }
  }
</style>