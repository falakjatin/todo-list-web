import Button from '@components/Button'

import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { PiMicrosoftOutlookLogoBold } from 'react-icons/pi'

const SocialBtns = ({
    className = '',
}: SocialBtns) => {
    return (
        <div className={className}>
            <Button
                className='bg-white drop-shadow-lg dark:shadow-modalDarkShadow'
                leftIcon={() => <FcGoogle className='text-lg' />}
                onClick={() => console.log('google login')} />
            <Button
                className='bg-white drop-shadow-lg dark:shadow-modalDarkShadow'
                leftIcon={() => <FaFacebookF className='text-lg text-[#4267B2]' />}
                onClick={() => console.log('google login')} />
            <Button
                className='bg-white drop-shadow-lg dark:shadow-modalDarkShadow'
                leftIcon={() => <PiMicrosoftOutlookLogoBold className='text-lg text-[#127CD6]' />}
                onClick={() => console.log('google login')} />
        </div>
    )
}

export default SocialBtns

interface SocialBtns {
    className?: string,
}
