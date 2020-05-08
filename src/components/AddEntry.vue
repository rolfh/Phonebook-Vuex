<template>
	<div class="add-entry-holder">
		<h3>New entry</h3>
		<input
			placeholder="name"
			type="text"
			@input="setNewEntryName"
			:value="newEntryName"
			data-id="name"
			@keydown.enter="save"
		/>
		<input
			placeholder="number"
			type="text"
			@input="setNewEntryNumber"
			:value="newEntryNumber"
			data-id="number"
			@keydown.enter="save"
		/>
		<button @click="save">Add +</button>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	methods: {
		setNewEntryName(event) {
			this.$store.commit('setNewEntryName', event.target.value)
		},
		setNewEntryNumber(event) {
			this.$store.commit('setNewEntryNumber', event.target.value)
		},
		save() {
			if (this.newEntryName.length < 1 || this.newEntryNumber.length < 1) return
			this.$store.commit('addToPhonebook')
		},
	},
	computed: {
		...mapState(['newEntryName', 'newEntryNumber']),
	},
}
</script>

<style lang="less" scoped>
.add-entry-holder {
	padding: 20px;
	border: 3px solid #efe3a1;
	background: #fff7ce;
	margin-bottom: 20px;
	border-radius: 6px;
}
input {
	padding: 8px 15px;
	font-size: 16px;
	width: 100%;
	margin-bottom: 6px;
	border: 3px solid #efe3a1;
}
button {
	padding: 8px 30px;
	font-size: 16px;
	border-radius: 37px;
	background: #fff7cf;
	border: 3px solid #efe3a1;
	margin-top: 2px;
	text-transform: uppercase;
	letter-spacing: 3px;
	color: #685800;
	font-weight: bold;
}
</style>
