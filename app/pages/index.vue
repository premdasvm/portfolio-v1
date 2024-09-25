<template>
	<div class="flex flex-col items-center gap-2">
		<h1 class="text-4xl font-bold text-white">Premdas</h1>
		<div class="flex gap-2">
			<a v-for="link in links" :key="link.name" :href="link.href" target="_blank">
				<Icon :name="link.icon" size="2rem" />
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface Link {
	name: string;
	icon: string;
	href: string;
}

const links: Link[] = [
	{
		name: 'LinkedIn',
		icon: 'bxl:linkedin-square',
		href: 'https://www.linkedin.com/in/premdasvm/',
	},
	{
		name: 'GitHub',
		icon: 'bxl:github',
		href: 'https://github.com/premdasvm',
	},
];
</script>
