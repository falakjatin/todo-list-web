import Link from 'next/link';

import PageHeader from '@components/PageHeader';
import ThemeSwitcher from '@components/ThemeSwitch';

const Root = () => {

  return (
    <div>
      <PageHeader title='Root Page' />
      <ThemeSwitcher />
      <Link href={'/login'}>Login</Link>
      <p style={{ color: 'purple' }}>Hello</p>
    </div>
  )
}

export default Root
