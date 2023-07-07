import * as yup from 'yup'

export default yup.object({
    username: yup.string().required('Invalid username.'),
    password: yup.string().required('Password is required.'),
})
