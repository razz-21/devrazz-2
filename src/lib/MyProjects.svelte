<script lang="ts">
  import Saos from "saos";

  function navigateNewWindow(url: string) {
    window.open(url, '_blank')?.focus();
  }
</script>

<div id="section-3" class="my-projects__container">
  <div class="my-projects__content-container">
    <div class="my-projects__grid">
      <!-- Personal Project -->
      <div class="my-projects__grid-item">
        <div class="mb-2" style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
            <img src="/images/emoji__yeah.png" height="28px" width="28px" alt="Emoji Yeah">
            <img src="/images/emoji__computer.png" height="28px" width="28px" alt="Emoji Computer">
          </Saos>
        </div>
        <div style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
            <h4 class="text-primary">PERSONAL</h4>
            <h2 class="font-extra-bold">PROJECTS</h2>
          </Saos>
        </div>
      </div>
      <!-- Razz v1 Landing Page -->
      <div class="my-projects__grid-item">
        <div class="head">
          <div style:position={"relative"} style:overflow={"hidden"}>
            <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
              <h3 class="mb-1">PERSONAL LANDING PAGE</h3>
              <h6 class="font-light">HTML | CSS | ANGULAR</h6>
            </Saos>
          </div>
          <div class="icons my-2">
            <Saos animation={"1s ease fade-in both"} once={true} top={100}>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={() => navigateNewWindow("https://github.com/razz-21/razz-landing-page")}>
                <g clip-path="url(#clip0_11_43)">
                  <path d="M16.0884 0.666626C7.19956 0.666626 0 7.70663 0 16.3893C0 23.3373 4.60933 29.2293 11.0004 31.3066C11.8049 31.4546 12.0998 30.968 12.0998 30.5506C12.0998 30.1773 12.0864 29.188 12.0797 27.8773C7.60445 28.8253 6.6606 25.768 6.6606 25.768C5.92857 23.9533 4.87076 23.468 4.87076 23.468C3.41342 22.4933 4.98338 22.5133 4.98338 22.5133C6.59892 22.6226 7.44759 24.1333 7.44759 24.1333C8.88214 26.5373 11.2136 25.8426 12.1333 25.4413C12.2781 24.424 12.6924 23.732 13.1523 23.3386C9.5793 22.9453 5.824 21.5933 5.824 15.5693C5.824 13.8533 6.44743 12.4506 7.47976 11.3506C7.29877 10.9533 6.75579 9.35463 7.62054 7.18929C7.62054 7.18929 8.96794 6.76796 12.0448 8.80129C13.3319 8.45196 14.6994 8.27863 16.0669 8.27063C17.4345 8.27863 18.802 8.45196 20.089 8.80129C23.1458 6.76796 24.4932 7.18929 24.4932 7.18929C25.358 9.35463 24.815 10.9533 24.6541 11.3506C25.6798 12.4506 26.3032 13.8533 26.3032 15.5693C26.3032 21.6093 22.5425 22.9386 18.9629 23.3253C19.526 23.7973 20.0488 24.7613 20.0488 26.2346C20.0488 28.3386 20.0287 30.0293 20.0287 30.54C20.0287 30.952 20.3103 31.444 21.1348 31.2866C27.5715 29.2226 32.1768 23.3266 32.1768 16.3893C32.1768 7.70663 24.9732 0.666626 16.0884 0.666626Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_11_43">
                    <rect width="32.1768" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={() => navigateNewWindow("https://devrazz.vercel.app/")}>
                <circle cx="16" cy="16" r="15.5" stroke="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6735 16.3614H8V14.6386H20.6735L15.2056 9.21815L16.4344 8L24 15.5L16.4344 23L15.2056 21.7818L20.6735 16.3614Z" fill="white"/>
              </svg>
            </Saos>
          </div>
        </div>

        <div class="image">
          <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
            <img src="/images/v1--razz-landing-page.png" alt="Razz v1 Landing Page">
          </Saos>
        </div>
      </div>
      <!-- Dashboard Theme Switcher -->
      <div class="my-projects__grid-item">
        <div class="head">
          <div style:position={"relative"} style:overflow={"hidden"}>
            <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
              <h3 class="mb-1">DASHBOARD THEME SWITCHER</h3>
              <h6 class="font-light">HTML | CSS</h6>
            </Saos>
          </div>
          <div class="icons my-2">
            <Saos animation={"1s ease fade-in both"} once={true} top={100}>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={() => navigateNewWindow("https://github.com/razz-21/dashboard-theme-switcher")}>
                <g clip-path="url(#clip0_11_43)">
                  <path d="M16.0884 0.666626C7.19956 0.666626 0 7.70663 0 16.3893C0 23.3373 4.60933 29.2293 11.0004 31.3066C11.8049 31.4546 12.0998 30.968 12.0998 30.5506C12.0998 30.1773 12.0864 29.188 12.0797 27.8773C7.60445 28.8253 6.6606 25.768 6.6606 25.768C5.92857 23.9533 4.87076 23.468 4.87076 23.468C3.41342 22.4933 4.98338 22.5133 4.98338 22.5133C6.59892 22.6226 7.44759 24.1333 7.44759 24.1333C8.88214 26.5373 11.2136 25.8426 12.1333 25.4413C12.2781 24.424 12.6924 23.732 13.1523 23.3386C9.5793 22.9453 5.824 21.5933 5.824 15.5693C5.824 13.8533 6.44743 12.4506 7.47976 11.3506C7.29877 10.9533 6.75579 9.35463 7.62054 7.18929C7.62054 7.18929 8.96794 6.76796 12.0448 8.80129C13.3319 8.45196 14.6994 8.27863 16.0669 8.27063C17.4345 8.27863 18.802 8.45196 20.089 8.80129C23.1458 6.76796 24.4932 7.18929 24.4932 7.18929C25.358 9.35463 24.815 10.9533 24.6541 11.3506C25.6798 12.4506 26.3032 13.8533 26.3032 15.5693C26.3032 21.6093 22.5425 22.9386 18.9629 23.3253C19.526 23.7973 20.0488 24.7613 20.0488 26.2346C20.0488 28.3386 20.0287 30.0293 20.0287 30.54C20.0287 30.952 20.3103 31.444 21.1348 31.2866C27.5715 29.2226 32.1768 23.3266 32.1768 16.3893C32.1768 7.70663 24.9732 0.666626 16.0884 0.666626Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_11_43">
                    <rect width="32.1768" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={() => navigateNewWindow("https://dashboard-theme-switcher.vercel.app/")}>
                <circle cx="16" cy="16" r="15.5" stroke="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6735 16.3614H8V14.6386H20.6735L15.2056 9.21815L16.4344 8L24 15.5L16.4344 23L15.2056 21.7818L20.6735 16.3614Z" fill="white"/>
              </svg>
            </Saos>
          </div>
        </div>

        <div class="image">
          <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
            <img src="/images/dashboard--theme-switcher.png" alt="Dashboard Theme Switcher">
          </Saos>
        </div>
      </div>
      <!-- HSI Attendance -->
      <div class="my-projects__grid-item">
        <div class="head">
          <div style:position={"relative"} style:overflow={"hidden"}>
            <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
              <h3 class="mb-1">HSI ATTENDANCE</h3>
              <h6 class="font-light">ANDROID | KOTLIN</h6>
            </Saos>
          </div>
          <div class="icons my-2">
            <Saos animation={"1s ease fade-in both"} once={true} top={100}>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={() => navigateNewWindow("https://github.com/21-razz/android-hsi-attendance")}>
                <g clip-path="url(#clip0_11_43)">
                  <path d="M16.0884 0.666626C7.19956 0.666626 0 7.70663 0 16.3893C0 23.3373 4.60933 29.2293 11.0004 31.3066C11.8049 31.4546 12.0998 30.968 12.0998 30.5506C12.0998 30.1773 12.0864 29.188 12.0797 27.8773C7.60445 28.8253 6.6606 25.768 6.6606 25.768C5.92857 23.9533 4.87076 23.468 4.87076 23.468C3.41342 22.4933 4.98338 22.5133 4.98338 22.5133C6.59892 22.6226 7.44759 24.1333 7.44759 24.1333C8.88214 26.5373 11.2136 25.8426 12.1333 25.4413C12.2781 24.424 12.6924 23.732 13.1523 23.3386C9.5793 22.9453 5.824 21.5933 5.824 15.5693C5.824 13.8533 6.44743 12.4506 7.47976 11.3506C7.29877 10.9533 6.75579 9.35463 7.62054 7.18929C7.62054 7.18929 8.96794 6.76796 12.0448 8.80129C13.3319 8.45196 14.6994 8.27863 16.0669 8.27063C17.4345 8.27863 18.802 8.45196 20.089 8.80129C23.1458 6.76796 24.4932 7.18929 24.4932 7.18929C25.358 9.35463 24.815 10.9533 24.6541 11.3506C25.6798 12.4506 26.3032 13.8533 26.3032 15.5693C26.3032 21.6093 22.5425 22.9386 18.9629 23.3253C19.526 23.7973 20.0488 24.7613 20.0488 26.2346C20.0488 28.3386 20.0287 30.0293 20.0287 30.54C20.0287 30.952 20.3103 31.444 21.1348 31.2866C27.5715 29.2226 32.1768 23.3266 32.1768 16.3893C32.1768 7.70663 24.9732 0.666626 16.0884 0.666626Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_11_43">
                    <rect width="32.1768" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={() => navigateNewWindow("https://play.google.com/store/apps/details?id=com.r.hsiattendance")}>
                <circle cx="16" cy="16" r="15.5" stroke="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6735 16.3614H8V14.6386H20.6735L15.2056 9.21815L16.4344 8L24 15.5L16.4344 23L15.2056 21.7818L20.6735 16.3614Z" fill="white"/>
              </svg>
            </Saos>
          </div>
        </div>

        <div class="image">
          <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
            <img src="/images/hsi-attendance--login.png" alt="HSI Attendance Login">
          </Saos>
        </div>
      </div>
      <!-- Easy Bank Landing Page -->
      <div class="my-projects__grid-item">
        <div class="head">
          <div style:position={"relative"} style:overflow={"hidden"}>
            <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
              <h3 class="mb-1">EASY BANK LANDING PAGE</h3>
              <h6 class="font-light">HTML | CSS</h6>
            </Saos>
          </div>
          <div class="icons my-2">
            <Saos animation={"1s ease fade-in both"} once={true} top={100}>
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={() => navigateNewWindow("https://github.com/razz-21/easy-bank")}>
                <g clip-path="url(#clip0_11_43)">
                  <path d="M16.0884 0.666626C7.19956 0.666626 0 7.70663 0 16.3893C0 23.3373 4.60933 29.2293 11.0004 31.3066C11.8049 31.4546 12.0998 30.968 12.0998 30.5506C12.0998 30.1773 12.0864 29.188 12.0797 27.8773C7.60445 28.8253 6.6606 25.768 6.6606 25.768C5.92857 23.9533 4.87076 23.468 4.87076 23.468C3.41342 22.4933 4.98338 22.5133 4.98338 22.5133C6.59892 22.6226 7.44759 24.1333 7.44759 24.1333C8.88214 26.5373 11.2136 25.8426 12.1333 25.4413C12.2781 24.424 12.6924 23.732 13.1523 23.3386C9.5793 22.9453 5.824 21.5933 5.824 15.5693C5.824 13.8533 6.44743 12.4506 7.47976 11.3506C7.29877 10.9533 6.75579 9.35463 7.62054 7.18929C7.62054 7.18929 8.96794 6.76796 12.0448 8.80129C13.3319 8.45196 14.6994 8.27863 16.0669 8.27063C17.4345 8.27863 18.802 8.45196 20.089 8.80129C23.1458 6.76796 24.4932 7.18929 24.4932 7.18929C25.358 9.35463 24.815 10.9533 24.6541 11.3506C25.6798 12.4506 26.3032 13.8533 26.3032 15.5693C26.3032 21.6093 22.5425 22.9386 18.9629 23.3253C19.526 23.7973 20.0488 24.7613 20.0488 26.2346C20.0488 28.3386 20.0287 30.0293 20.0287 30.54C20.0287 30.952 20.3103 31.444 21.1348 31.2866C27.5715 29.2226 32.1768 23.3266 32.1768 16.3893C32.1768 7.70663 24.9732 0.666626 16.0884 0.666626Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_11_43">
                    <rect width="32.1768" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={() => navigateNewWindow("https://easy-bank-delta.vercel.app/")}>
                <circle cx="16" cy="16" r="15.5" stroke="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6735 16.3614H8V14.6386H20.6735L15.2056 9.21815L16.4344 8L24 15.5L16.4344 23L15.2056 21.7818L20.6735 16.3614Z" fill="white"/>
              </svg>
            </Saos>
          </div>
        </div>

        <div class="image">
          <Saos animation={"1s ease slide-up-fade both"} once={true} top={100}>
            <img src="/images/easy-bank--landing-page.png" alt="Easy Bank">
          </Saos>
        </div>
      </div>
      <!-- To More Projects -->
      <div class="my-projects__grid-item">
        <div class="mb-2">
          <Saos animation={"1s ease scale-bounce-in both"} once={true} top={100}>
            <img src="/images/emoji__confetti.png" height="56px" width="56px" alt="Emoji Yeah">
          </Saos>
        </div>
        <h3 style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
            <span>TO MORE</span>
          </Saos>
        </h3>
        <h2 class="font-extra-bold text-primary" style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
            <span>PROJECTS</span>
          </Saos>
        </h2>
        <h3 style:position={"relative"} style:overflow={"hidden"}>
          <Saos animation={"1s ease slide-overflow-up both"} once={true} top={100}>
            <span>TO COME</span>
          </Saos>
        </h3>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/breakpoints";

  .my-projects {
    &__container {
      padding: 10rem 2.5rem;
      background-color: #FAFAFA;
    }
    
    &__content {
      &-container {
        max-width: 1140px;
        width: 100%;
        margin: auto;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(3, minmax(380px, 1fr));
      gap: 1.5rem;

      &-item {
        border-radius: 24px;
        overflow: hidden;
        height: 100%;
        padding: 2rem;

        .icons {
          display: flex;
          column-gap: 0.5rem;
          cursor: pointer;
        }

        &:nth-child(1) {
          grid-column: span 3;
          display: flex;
          align-items: baseline;
          justify-content: center;
          flex-direction: column;
          box-shadow: 0px 0px 8px 1px rgba(255, 91, 3, 0.3);
        }

        &:nth-child(2) {
          position: relative;
          grid-column: span 5;
          background-color: #9948E0;
          color: #FFFFFF;

          .head {
            display: flex;
            justify-content: space-between;
            column-gap: 1rem;
          }

          .image {
            position: absolute;
            right: 2rem;
            bottom: -1rem;

            img {
              width: 100%;
              height: 100%;
              max-width: 100%;
              padding-left: 2rem;
            }
          }
        }

        &:nth-child(3) {
          position: relative;
          grid-column: span 5;
          background-color: #00BFFF;
          color: #FFFFFF;

          .head {
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;
            column-gap: 1rem;
          }

          .image {
            position: absolute;
            left: 2rem;
            bottom: -1rem;

            img {
              width: 100%;
              height: 100%;
              max-width: 100%;
              max-height: 18rem;
              padding-right: 2rem;
            }
          }
        }

        &:nth-child(4) {
          position: relative;
          grid-column: span 3;
          background-color: #F86D00;
          color: #FFFFFF;

          .head {
            display: flex;
            flex-direction: column;
            column-gap: 1rem;
          }

          .image {
            position: absolute;
            bottom: -1rem;
            left: 24%;

            img {
              width: 100%;
              height: 100%;
              max-width: 100%;
              max-height: 15rem;
              padding-right: 2rem;
            }
          }
        }

        &:nth-child(5) {
          position: relative;
          grid-column: span 4;
          background-color: #31D35C;
          color: #FFFFFF;

          .head {
            display: flex;
            justify-content: space-between;
            column-gap: 1rem;
          }

          .image {
            position: absolute;
            right: 2rem;
            bottom: -1rem;

            img {
              width: 100%;
              height: 100%;
              max-width: 100%;
              max-height: 17rem;
              padding-left: 2rem;
            }
          }
        }

        &:nth-child(6) {
          grid-column: span 4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          box-shadow: 0px 0px 8px 1px rgba(255, 91, 3, 0.3);
        }
      }
    }
  }

  @include media-breakpoint-max(md) {
    .my-projects {
      &__grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, minmax(380px, 1fr));
        row-gap: 2rem;

        &-item {
          grid-column: span 1 !important;
        }
      }
    }
  }
</style>