<template>
	<main class="relative flex h-screen w-screen items-center justify-center overflow-hidden">
		<div class="relative z-10">
			<slot />
		</div>
		<ArtDots class="absolute inset-0 z-0" />
	</main>
</template>
