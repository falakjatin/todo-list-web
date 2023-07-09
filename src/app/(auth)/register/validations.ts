import * as yup from 'yup'

export default yup.object({
    email: yup.string().required('Email is required.').email('Enter a valid Email address.'),
    password: yup.string()
        .required('Password is required.')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            `
            Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character
            `,
        ),
    reTypePassword: yup.string()
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value
        }),
})
