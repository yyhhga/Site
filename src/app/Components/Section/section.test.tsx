import { assert, test } from 'vitest'
import { render } from '@testing-library/react'
import { Section, sectionType } from '.'

test('Page', () => {
    render(<Section type={sectionType.Simple} />)
    assert(true, 'this is a dummy test');
})