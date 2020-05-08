<template>
	<div>
		<div v-if="$route.params.id" class="selected">
			<div class="imgholder">
				<img :src="require('@/assets/Lizzy.jpg')" alt="Delorean" />
			</div>
			<div class="textholder">
				<div class="button-holder">
					<button @click="removePhonebookById($route.params.id)">
						Delete ☠️
					</button>
					<button @click="toggleEdit" :class="{ active: editing }">
						<span v-if="editing">Editing 🖊</span><span v-else>Edit 🖊</span>
					</button>
				</div>
				<div class="editArea" v-if="editing">
					<input
						class="name"
						type="text"
						:value="selectedPhoneEntry.name"
						@input="updatePhoneEntryNameById"
					/>
					<input
						type="text"
						class="number"
						:value="selectedPhoneEntry.number"
						@input="updatePhoneEntryNumberById"
					/>
				</div>
				<div v-else class="no-editing">
					<h3 class="name">{{ selectedPhoneEntry.name }}</h3>
					<p class="number">{{ selectedPhoneEntry.number }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState(['editing']),
		selectedPhoneEntry() {
			return this.$store.getters.selectedPhoneEntry(this.$route.params.id)
		},
	},
	methods: {
		removePhonebookById(id) {
			this.$store.commit('removePhonebookById', id)
		},
		updatePhoneEntryNameById(event) {
			this.$store.commit('updatePhoneEntryNameById', {
				id: this.$route.params.id,
				value: event.target.value,
			})
		},
		updatePhoneEntryNumberById(event) {
			console.log(event.target.value)

			this.$store.commit('updatePhoneEntryNumberById', {
				id: this.$route.params.id,
				value: event.target.value,
			})
		},
		toggleEdit() {
			this.$store.commit('toggleEdit')
		},
	},
}
</script>

<style lang="less" scoped>
.button-holder {
	margin-bottom: 15px;
	button {
		padding: 7px 13px;
		border: none;
		background: whitesmoke;
		border-radius: 4px;
		font-size: 16px;
		margin-right: 10px;
		line-height: 1em;
		&:hover {
			background: #fff7ce;
			cursor: pointer;
		}
		&.active {
			background: #89ebb8;
			color: #003218;
		}
	}
}
.selected {
	box-shadow: 0 4px 10px #00000014;
	border: 1px solid #ebebeb;
	border-radius: 5px;
	overflow: hidden;
}
.imgholder {
	height: 190px;
	overflow: hidden;
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
}
.textholder {
	padding: 20px;
}
.name,
.number {
	text-align: left;
	margin: 0 0 10px 0;
	border: none;
	border-bottom: 1px solid transparent;
	color: black;
	margin-bottom: 8px;
	background: transparent;
	&:focus {
		outline: none;
		border-color: green;
	}
}
.name {
	font-size: 23px;
	font-weight: 600;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	line-height: 1em;
}
</style>
