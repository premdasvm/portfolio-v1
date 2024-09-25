<template>
	<div class="flex flex-col items-center gap-2 duration-1000 animate-in fade-in zoom-in">
		<TextShine text="Premdas" class="text-6xl font-bold" />
		<div class="flex gap-2">
			<a v-for="link in links" :key="link.name" :href="link.href" target="_blank">
				<Icon :name="link.icon" size="2rem" class="bg-[#939393]" />
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
