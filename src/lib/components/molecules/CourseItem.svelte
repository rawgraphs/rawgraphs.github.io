<!--
	@component
	Row of a course: date badge, title and duration. Past courses are dimmed.
-->
<script lang="ts">
	import Icon from '#lib/components/atoms/Icon.svelte';

	type Props = {
		/** ISO date. */
		date: string;
		title: string;
		duration: string;
		state?: 'upcoming' | 'past';
	};

	let { date, title, duration, state = 'past' }: Props = $props();

	const part = (options: Intl.DateTimeFormatOptions) =>
		new Date(date).toLocaleDateString('en-GB', { ...options, timeZone: 'UTC' });
	let upcoming = $derived(state === 'upcoming');
</script>

<div class="flex items-center gap-sm border-t border-subtle py-xs {upcoming ? '' : 'opacity-60'}">
	<time
		class="flex size-[100px] shrink-0 flex-col items-center justify-center rounded-md text-inverse {upcoming
			? 'bg-brand'
			: 'bg-disabled'}"
		datetime={date.slice(0, 10)}
	>
		<span class="type-body uppercase">{part({ month: 'short' })}</span>
		<span class="type-date">{part({ day: 'numeric' })}</span>
		<span class="type-micro {upcoming ? '' : 'text-primary'}">{part({ year: 'numeric' })}</span>
	</time>
	<div class="flex flex-1 flex-col items-start gap-xs">
		<h3 class="type-h3 text-primary">{title}</h3>
		<p class="flex items-center gap-2xs type-body text-primary">
			<Icon name="clock" class="text-icon-default" />
			{duration}
		</p>
	</div>
</div>
