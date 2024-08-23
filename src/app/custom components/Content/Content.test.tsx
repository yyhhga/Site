import { assert, test } from 'vitest'
import { render } from '@testing-library/react'
import { Content, ContentType } from '.'

test('Page', () => {
   render(<Content type={ContentType.SIMPLE} />)
   assert(true, 'this is a dummy test')
})
