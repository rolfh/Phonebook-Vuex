<template>
	<div class="search-holder">
		<span class="icon">🔍</span>
		<input type="text" :value="filterText" @input="setFilterText" />
		<button class="clear" @click="clear">☠️</button>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	methods: {
		setFilterText(event) {
			this.$store.commit('setFilterText', event.target.value)
		},
		clear() {
			this.$store.commit('setFilterText', '')
		},
	},
	computed: {
		...mapState(['filterText']),
	},
}
</script>

<style lang="less" scoped>
.search-holder {
	position: relative;
	margin-bottom: 15px;
	border: 1px solid #dfdfdf;
	border-radius: 4px;
}
.icon,
.clear {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 40px;
	text-align: center;
}
.icon {
	left: 0;
	pointer-events: none;
}
.clear {
	right: 0;
	background: none;
	border: none;
	border-left: 1px solid #dfdfdf;
	font-size: 20px;
}
input {
	width: 100%;
	font-size: 16px;
	border-radius: 4px;
	padding: 5px 10px;
	height: auto;
	border: none;
	padding: 7px 30px;
}
</style>
