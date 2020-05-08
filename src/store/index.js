import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		filterText: '',
		editing: false,
		// selectedEntryId: null,
		newEntryName: '',
		newEntryNumber: '',
		phonebook: [
			{
				id: 1,
				name: 'Wollan VVS',
				number: '666-69-666',
			},
			{
				id: 2,
				name: 'Ræppe Rolf',
				number: '666-69-420',
			},
			{
				id: 69,
				name: 'Rockur Mindur',
				number: '999-96-240',
			},
			{
				id: 42,
				name: 'Veggis Vegard',
				number: '123-45-678',
			},
		],
	},
	mutations: {
		// selectEntry(state, id) {
		// 	state.selectedEntryId = id
		// },
		setNewEntryName(state, newName) {
			state.newEntryName = newName
		},
		setNewEntryNumber(state, newNumber) {
			state.newEntryNumber = newNumber
		},
		addToPhonebook(state) {
			state.phonebook.push({
				name: state.newEntryName,
				number: state.newEntryNumber,
				id: Math.random()
					.toString(36)
					.substring(2, 15),
			})
		},
		removePhonebookById(state, id) {
			state.phonebook = state.phonebook.filter((entry) => {
				return entry.id != id
			})
		},
		setFilterText(state, payload) {
			state.filterText = payload
		},
		updatePhoneEntryNameById(state, { id, value }) {
			let editEntry = state.phonebook.find((entry) => entry.id == id)
			editEntry.name = value
		},
		updatePhoneEntryNumberById(state, { id, value }) {
			let editEntry = state.phonebook.find((entry) => entry.id == id)
			editEntry.number = value
		},
		toggleEdit(state) {
			state.editing = !state.editing
		},
	},
	getters: {
		// selectedPhoneEntry(state) {
		// 	return state.phonebook.find((entry) => entry.id == state.selectedEntryId)
		// },
		selectedPhoneEntry: (state) => (id) => {
			return state.phonebook.find((entry) => entry.id == id)
		},
		phonebookFiltered(state) {
			if (state.filterText == '') return state.phonebook
			return state.phonebook.filter((entry) => {
				var searchSpace = entry.name.toLowerCase() + ' ' + entry.number
				return searchSpace.includes(state.filterText.toLowerCase())
			})
		},
	},
})
