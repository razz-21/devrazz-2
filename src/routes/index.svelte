<!-- <script context="module" lang="ts">
	export const prerender = true;
</script> -->

<script lang="ts">
	import NavBar from '$lib/header/NavBar.svelte';
	import HeadContent from '$lib/HeadContent.svelte';
	import MyServices from '$lib/MyServices.svelte';
	import MyExperiences from '$lib/MyExperiences.svelte';
	import MyProjects from '$lib/MyProjects.svelte';
	import TechsAndTools from '$lib/TechsAndTools.svelte';
	import AboutMe from '$lib/AboutMe.svelte';
	import Footer from '$lib/Footer.svelte';
	import { scrollSpy } from '$lib/shared/actions/scrollSpy';
	import { screen } from '../store/screen';

	let section = "section-1";
	let innerWidth: number;

	$: {
    if (innerWidth) {
      if (innerWidth >= 992) { screen.update(screen => screen = "desktop"); }
      else if (innerWidth > 576) { screen.update(screen => screen = "tablet"); }
      else { screen.update(screen => screen = "mobile"); }
    }
  }

	function handleSectionChange(e: CustomEvent) {
		section = e.detail;
	}
</script>

<svelte:window bind:innerWidth />
<svelte:head>
	<title>DevRazz | Ernesto Razo Jr.</title>
	<meta name="description" content="Hi, my name Ernesto Razo Jr., a residence of El Salvador, Misamis Oriental. I am a Front-end Developer and I've been developing an application for almost 3 years. I'd like to make frontend solutions for both web and mobile applications. Also, I do unit and end-to-end testing as one of the documentation of the application.">
  <meta name="keywords" content="porfolio, frontend developer, web development, mobile development, website">
</svelte:head>

<!-- Template -->
<div class="main-container" use:scrollSpy={{ spiedTags: ["DIV"], section }} on:sectionChange="{handleSectionChange}">
	<NavBar bind:section />
	<HeadContent />
	<MyServices />
	<MyExperiences />
	<MyProjects />
	<TechsAndTools />
	<AboutMe />
	<Footer />
</div>
<!-- /Template-->

<style lang="scss">
	.main-container {
		overflow: hidden;
	}

	/** Slide */
	@keyframes -global-slide-down-fade {
		0% { transform: translateY(-5rem); opacity: 0; }
		100% { transform: translateY(0); opacity: 1; }
	}
	@keyframes -global-slide-up-fade {
		0% { transform: translateY(5rem); opacity: 0; }
		100% { transform: translateY(0); opacity: 1; }
	}
	@keyframes -global-slide-right-fade {
		0% { transform: translateX(5rem); opacity: 0; }
		100% { transform: translateX(0); opacity: 1; }
	}
	@keyframes -global-slide-left-fade {
		0% { transform: translateX(-5rem); opacity: 0; }
		100% { transform: translateX(0); opacity: 1; }
	}

	@keyframes -global-slide-overflow-up {
		0% { transform: translateY(100%); }
		100% { transform: translateY(0); }
	}

	@keyframes -global-slide-in-blurred-bottom {
		0% {
			-webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
			transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
			-webkit-transform-origin: 50% 100%;
			transform-origin: 50% 100%;
			-webkit-filter: blur(40px);
			filter: blur(40px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0) scaleY(1) scaleX(1);
			transform: translateY(0) scaleY(1) scaleX(1);
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
			-webkit-filter: blur(0);
			filter: blur(0);
			opacity: 1;
		}
	}

	/** Bounce */
	@keyframes -global-scale-bounce-in {
		0% { transform: scale(0); }
		50% { transform: scale(1.3); }
		100% { transform: scale(1); }
	}

	/** Fade */
	@keyframes -global-fade-in {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	@keyframes -global-fade-scale-in {
		0% { opacity: 0; transform: scale(0.5); }
		100% { opacity: 1; transform: scale(1); }
	}

	/** Flips */
	@keyframes -global-flip-in-ver-right {
		0% {
			-webkit-transform: rotateY(-80deg);
			transform: rotateY(-80deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: rotateY(0);
			transform: rotateY(0);
			opacity: 1;
		}
	}

	/** Texts */
	@keyframes -global-tracking-in-expand {
		0% {
			letter-spacing: -0.5em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
	}

	/** Float */
	@keyframes -global-float {
		0% { transform: translateY(0); }
		50% { transform: translateY(-1rem); }
		100% { transform: translateY(0); }
	}
	@keyframes -global-float-lr {
		0% { transform: translateX(0); }
		50% { transform: translateX(-1rem); }
		100% { transform: translateX(0); }
	}

	/** Bubble */
	@keyframes -global-bubble {
		0% { transform: scale(1); }
		50% { transform: scale(1.1); }
		100% { transform: scale(1); }
	}
</style>
