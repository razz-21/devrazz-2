<script lang="ts">
  import Saos from "saos";
</script>

<div class="my-experiences__container">
  <div class="my-experiences__content-container">
    <div class="title mb-5">
      <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
        <h2>
          WORK & EXPERIENCE
          <span>WORK & EXPERIENCE</span>
        </h2>
      </Saos>
    </div>
    <div class="my-experiences__grid">
      <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
        <div class="my-experiences__grid-item">
          <div class="logo">
            <img src="images/hsi-mini-logo.png" height="38" width="38" alt="Hyperstacks Inc.">
          </div>
          <div class="details">
            <h3>Hyperstacks Inc.</h3>
            <h5 class="font-regular">FRONT-END DEVELOPER</h5>
            <h6 class="font-regular">2019 - 2022</h6>
          </div>
        </div>
      </Saos>
      <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
        <div class="my-experiences__grid-item">
          <div class="logo">
            <img src="images/muuvment-mini-logo.png" height="32" width="58" alt="Muuvment">
          </div>
          <div class="details">
            <h3>Muuvment</h3>
            <h5 class="font-regular">FRONT-END DEVELOPER</h5>
            <h6 class="font-regular">2020 - 2022</h6>
          </div>
        </div>
      </Saos>
      <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
        <div class="my-experiences__grid-item">
          <div class="logo">
            <img src="images/nathan-nathan-mini-logo.png" height="38" width="38" alt="Nathan & Nathan">
          </div>
          <div class="details">
            <h3>Nathan & Nathan</h3>
            <h5 class="font-regular">FRONT-END DEVELOPER</h5>
            <h6 class="font-regular">MAY 2020 - JULY 2022</h6>
          </div>
        </div>
      </Saos>
    </div>

  </div>

  <div class="extras__eclipse">
    <div class="eclipse eclipse--1"></div>
    <div class="eclipse eclipse--2"></div>
    <div class="eclipse eclipse--3"></div>
    <div class="eclipse eclipse--4"></div>
  </div>
</div>

<style lang="scss">
  @import "../styles/breakpoints";

  .my-experiences {
    &__container {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 2.5rem;
      height: 800px;
      overflow: hidden;
    }

    &__content {
      &-container {
        max-width: 1280px;
        width: 100%;
        margin: auto;

        .title {
          position: relative;
          display: flex;
          justify-content: center;

          h2 {
            position: relative;
            font-weight: 800;

            span {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              color: #FF5B03;
              transition: all 300ms ease-in-out;
            }
          }

          &:hover {
            span {
              left: -3px;
              bottom: -3px;
              transition: all 300ms ease-in-out;
            }
          }
        }
      }
    }

    &__grid {
      display: flex;
      justify-content: center;
      align-items: baseline;
      column-gap: 3rem;

      &-item {
        display: flex;
        column-gap: 0.75rem;
      }
    }
  }

  .extras__eclipse {
    .eclipse {
      position: absolute;
      width: 480px;
      height: 480px;

      &--1 {
        top: -11rem;
        left: 5rem;
        background: radial-gradient(50% 50% at 50% 50%, rgba(8, 142, 220, 0.1) 0%, rgba(28, 144, 255, 0) 100%);
        transform: matrix(1, 0, 0, -1, 0, 0);
      }

      &--2 {
        bottom: -11rem;
        left: -10rem;
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 145, 0, 0.1) 0%, rgba(255, 91, 3, 0) 100%);
        transform: matrix(1, 0, 0, -1, 0, 0);
      }

      &--3 {
        top: -10rem;
        right: -10rem;
        background: radial-gradient(50% 50% at 50% 50%, rgba(246, 66, 10, 0.1) 0%, rgba(246, 66, 10, 0) 100%);
        transform: matrix(1, 0, 0, -1, 0, 0);
      }

      &--4 {
        bottom: -11rem;
        right: 5rem;
        background: radial-gradient(50% 50% at 50% 50%, rgba(104, 111, 255, 0.1) 0%, rgba(104, 111, 255, 0) 100%);
        transform: matrix(1, 0, 0, -1, 0, 0);
      }
    }
  }

  @include media-breakpoint-max(md) {
    .my-experiences {
      &__grid {
        flex-direction: column;
        row-gap: 2rem;

        &-item {
          align-self: center;
          column-gap: 1.5rem;
        }
      }
    }
  }
</style>