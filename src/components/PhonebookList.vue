<template>
	<div>
		<ul class="phonebook-list">
			<li
				v-for="entry in phonebookFiltered"
				:key="entry.id"
				:class="{ active: entry.id == $route.params.id }"
				@click="select(entry.id)"
			>
				<div class="image-holder">
					<img :src="require('@/assets/Lizzy.jpg')" alt="Delorean" />
				</div>
				<div class="text-holder">
					<p class="name">{{ entry.name }}</p>
					<p class="number"><span class="icon">📞</span> {{ entry.number }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'PhonebookList',
	props: ['id'],
	methods: {
		select(id) {
			if (this.$route.params.id == id) return
			this.$router.push({ params: { id: id } })
			// this.$store.commit('selectEntry', id)
		},
	},
	computed: {
		// ...mapState(['selectedEntryId']),
		...mapGetters(['phonebookFiltered']),
	},
}
</script>

<style lang="less">
.phonebook-list {
	margin: 0;
	padding: 0;
	list-style: none;
	display: grid;
	border: 1px solid #ebebeb;
	border-radius: 5px;

	li {
		display: flex;
		margin-bottom: 0px;
		padding: 10px;
		border-bottom: 1px solid #ebebeb;
		&:last-of-type {
			border-bottom: none;
		}
		&:hover {
			background-color: #f7f7f7;
		}
		&.active {
			background-color: #fff7cf;
			outline: 3px solid #efe3a1;
			outline-style: solid;
			outline-offset: -2px;
		}
	}
	p {
		margin: 0 0 5px 0;
	}
	.name {
		font-size: 18px;
		font-weight: 500;
	}
	.number {
		font-size: 14px;
		font-weight: 500;
	}
	.icon {
		line-height: 0.5em;
		// width:
	}
}
.image-holder {
	margin-right: 10px;
	width: 50px;
	height: 50px;
	border-radius: 1000px;
	overflow: hidden;
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
}
</style>
