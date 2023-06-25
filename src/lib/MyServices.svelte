<script lang="ts">
  import Saos from "saos";
  import { theme } from "$store/theme";
</script>

<div id="section-2" class="my-services__container">
  <div class="my-services__content-container">
    <div class="my-services__grid">
      <div class="my-services__grid-item">
        <h5 class="text-primary font-regular" style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={"1s ease slide-overflow-up both"} once={true}>
            <span>WHAT I DO</span>
          </Saos>
        </h5>
        <h2 class="font-extra-bold" style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={"1s ease slide-overflow-up both"} once={true}>
            <span>SERVICES THAT <br/>I OFFER</span>
          </Saos>
        </h2>
      </div>
      <Saos animation={"800ms ease 300ms flip-in-ver-right both"} once={true}>
        <div class="my-services__grid-item card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33.5" cy="33.5" r="33.5" style:fill="{ $theme === "default" ? "#1C90FF" : "#ff59c7" }"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29 43.3333V44.6667H26.3333V47.3333H39.6666V44.6667H37V43.3333H45C46.4727 43.3333 47.6666 42.1394 47.6666 40.6667V23.3333C47.6666 21.8606 46.4727 20.6667 45 20.6667H21C19.5272 20.6667 18.3333 21.8606 18.3333 23.3333V40.6667C18.3333 42.1394 19.5272 43.3333 21 43.3333H29ZM45 40.6667H21V23.3333H45V40.6667Z" fill="white"/>
            </svg>
          </div>
          <h5>Web Development</h5>
          <p>Develop a front-end web application and bring your concept to life by transforming it into a practical, functional application for real-world use.</p>
        </div>
      </Saos>
      <Saos animation={"800ms ease 600ms flip-in-ver-right both"} once={true}>
        <div class="my-services__grid-item card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33.5" cy="33.5" r="33.5" style:fill="{ $theme === "default" ? "#FFA50F" : "#ff59c7" }"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21 26V38L18.3333 38V42C18.3333 43.4728 19.5272 44.6667 21 44.6667H38.3301L38.3333 44.6667H45C46.4727 44.6667 47.6666 43.4728 47.6666 42V30C47.6666 28.5272 46.4727 27.3333 45 27.3333V26C45 24.5272 43.8061 23.3333 42.3333 23.3333H23.6666C22.1939 23.3333 21 24.5272 21 26ZM42.3333 27.3333V26H23.6666V38L35.6666 38V30C35.6666 28.5272 36.8606 27.3333 38.3333 27.3333L42.3333 27.3333ZM21 40.6667H35.6666V42H21V40.6667ZM45 42H38.3333V30H45V42Z" fill="white"/>
            </svg>

          </div>
          <h5>Responsive Web</h5>
          <p>Ensure your website is accessible across a wide range of devices, including desktop computers and mobile devices, allowing users to seamlessly view and interact with it regardless of their screen size.</p>
        </div>
      </Saos>
      <Saos animation={"800ms ease 900ms flip-in-ver-right both"} once={true}>
        <div class="my-services__grid-item card">
          <div class="icon">
            <svg width="48" height="48" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33.5" cy="33.5" r="33.5" style:fill="{ $theme === "default" ? "#1CFF76" : "#ff59c7" }" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 20.6667H39.6667C41.1394 20.6667 42.3333 21.8606 42.3333 23.3333V44.6667C42.3333 46.1394 41.1394 47.3333 39.6667 47.3333H26.3333C24.8606 47.3333 23.6667 46.1394 23.6667 44.6667V23.3333C23.6667 21.8606 24.8606 20.6667 26.3333 20.6667ZM26.3333 23.3333V44.6667H39.6667V23.3333H26.3333ZM34.3333 42C34.3333 42.7364 33.7364 43.3333 33 43.3333C32.2636 43.3333 31.6667 42.7364 31.6667 42C31.6667 41.2636 32.2636 40.6667 33 40.6667C33.7364 40.6667 34.3333 41.2636 34.3333 42Z" fill="white"/>
            </svg>
          </div>
          <h5>Mobile Developement</h5>
          <p>Create a mobile application for the Android platform and translate it into a practical application that can be utilized in real-world scenarios.</p>
        </div>
      </Saos>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/breakpoints";

  .my-services {
    &__container {
      background-color: var(--surface-secondary-color);
      padding: 10rem 2.5rem;
      position: relative;
      z-index: 2;
    }

    &__content {
      &-container {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      align-items: center;
      column-gap: 2rem;

      &-item {
        &.card {
          display: flex;
          flex-direction: column;
          min-height: 272px;
          padding: 2rem;
          background: var(--surface-primary-color);
          
          &:nth-child(2) { box-shadow: 0px 4px 17px -4px rgba($color: #1C90FF, $alpha: 0.2); }
          &:nth-child(3) { box-shadow: 0px 4px 17px -4px rgba($color: #FFA50F, $alpha: 0.2); }
          &:nth-child(4) { box-shadow: 0px 4px 17px -4px rgba($color: #1CFF76, $alpha: 0.2); }

          .icon {
            align-self: center;
            margin-bottom: 0.5rem;
          }
          h5 {
            align-self: center;
            margin-bottom: 1rem;
          }
          p {
            font-size: 16px;
          }
        }
      }
    }
  }

  @include media-breakpoint-max(md) {
    .my-services {
      &__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        row-gap: 2rem;
      }
    }
  }

  @include media-breakpoint-max(xs) {
    .my-services {
      &__grid {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        row-gap: 2rem;
      }
    }
  }
</style>