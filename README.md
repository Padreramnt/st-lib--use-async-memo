# React useMemo for async functions

``` tsx
import * as React from 'react'
import useAsyncMemo from '@st-lib/use-async-memo'

export default function Component() {
	const task = useAsyncMemo(async () => {
		/* do some work */
	})

	if (null != task.result) {
		return (
			<span>
				{/* use result here */}
			</span>
		)
	} else if (null != task.error) {
		return (
			<span className='error'>
				{task.error.message}
			</span>
		)
	} else {
		return (
			<span>
				{'Loading'}
			</span>
		)
	}
}
```
