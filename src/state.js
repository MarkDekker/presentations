import { writable } from 'svelte/store';

export const currentSlide = writable(1);
export const currentStep = writable(0);
export const totalSlides = writable(0);