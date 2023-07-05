import { create } from 'zustand'

export interface TState {
	showError: boolean
	loading: boolean
	isOpen: boolean
	data: any
	refresh: ({
		_username,
		_password,
		_subdomain
	}: {
		_username: string
		_password: string
		_subdomain?: string
	}) => void
}

interface IBook {
	state: TState
	updateAmount: (newAmount: TState) => void
}

export const useModalStore = create<IBook>((set) => ({
	state: {
		loading: false,
		isOpen: false,
		data: null,
		showError: false,
		refresh: () => {}
	},
	updateAmount: (newAmount: TState) =>
		set({ state: newAmount })
}))
