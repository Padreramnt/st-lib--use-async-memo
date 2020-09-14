import { DependencyList, useEffect, useState } from 'react'

export interface UseAsyncMemo<T> {
	result?: T
	error?: any
	loading: boolean
}

const defaultDeps = [] as const

export function useAsyncMemo<T>(callback: () => Promise<T>, deps: DependencyList = defaultDeps) {
	const [res, update] = useState<UseAsyncMemo<T>>({
		loading: true,
	})
	useEffect(() => {
		let ok = true
		if (!res.loading) update({ ...res, loading: true })
		callback().then(result => {
			if (!ok) return
			update({
				result,
				loading: false,
			})
		}).catch(error => {
			if (!ok) return
			update({
				error,
				loading: false,
			})
		})
		return () => { ok = false }
	}, deps)
	return res
}

export default useAsyncMemo