<template>
	<span
		:class="[
			'animate-background-shine inline-flex bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent',
			additionalClasses,
		]"
	>
		{{ text }}
	</span>
</template>

<script lang="ts" setup>
interface Props {
	text: string;
	additionalClasses?: string;
}

defineProps<Props>();
</script>
