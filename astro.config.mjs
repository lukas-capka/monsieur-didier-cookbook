// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(({ command }) => ({
	base: command === 'build' ? '/wave-vent-cookbook' : '/',
}));
