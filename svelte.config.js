import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		sass: {
			renderSync: true,
		},
		scss: {
			prependData: `@import './src/styles/variables.scss';`,
		}
		
	}),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	onwarn: (warning, handler) => {
		const { code, frame, filename } = warning
		if (code === "css-unused-selector") {
				return;
		}
		handler(warning);
	}
};

export default config;
