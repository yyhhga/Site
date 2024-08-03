import { assert, test } from 'vitest'
import { render } from '@testing-library/react'
import { Content, contentType } from '.'

test('Page', () => {
   render(<Content type={contentType.Simple} />)
   assert(true, 'this is a dummy test')
})
