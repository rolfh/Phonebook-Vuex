<template>
	<div class="Phonebook">
		<div class="container">
			<h1>
				<span class="icon-phone">📞</span> Phone
				<span class="icon-book">📖</span> Book
			</h1>
			<div class="row">
				<div class="col">
					<Search />
					<PhonebookList />
				</div>
				<div class="col">
					<AddEntry />
					<PhonebookEntry />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PhonebookList from '@/components/PhonebookList.vue'
import PhonebookEntry from '@/components/PhonebookEntry.vue'
import AddEntry from '@/components/AddEntry.vue'
import Search from '@/components/Search.vue'

export default {
	name: 'Phonebook',
	components: {
		PhonebookList,
		PhonebookEntry,
		AddEntry,
		Search,
	},
}
</script>

<style scoped>
h1 {
	margin: 30px 0;
}
</style>

<style lang="less">
.row {
	display: flex;
	justify-content: space-between;
	> div {
		flex-basis: calc(50% - 10px);
	}
}
.icon-phone {
	font-size: 0.8em;
}
</style>
