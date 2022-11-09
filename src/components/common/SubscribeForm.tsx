import { Formik, Form, Field } from 'formik'
import styled, { useTheme } from 'styled-components'
import confetti from 'canvas-confetti'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import { ThemeInterface } from '@/types/theme'

export const SubscribeForm = () => {
  const theme = useTheme() as ThemeInterface
  const formSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  })
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={formSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { resetForm }) => {
        void confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
        toast.success('Successfully subscribed', {
          position: 'bottom-center',
          style: {
            backgroundColor: theme.colors.primaryLight,
            color: theme.colors.white,
            fontFamily: theme.fonts.primary,
          },
          iconTheme: {
            primary: theme.colors.secondary,
            secondary: theme.colors.primaryDark,
          },
          duration: 3000,
        })

        resetForm()
      }}
    >
      {({ errors }) => (
        <EmailForm>
          <EmailBar>
            <EmailInput name="email" placeholder="Your email" />
            <Button type="submit">Subscribe</Button>
          </EmailBar>
          <ErrorMessage>{errors.email}</ErrorMessage>
        </EmailForm>
      )}
    </Formik>
  )
}

const EmailForm = styled(Form)`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.xs};
`
const EmailBar = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  justify-content: center;
`

const ErrorMessage = styled.span`
  width: 100%;
  max-width: 420px;
  color: tomato;
  height: ${({ theme }) => theme.fontSizes.text};
  padding: 0 ${({ theme }) => theme.spaces.xs};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.text};
`
const EmailInput = styled(Field)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spaces.xs};
  flex-grow: 1;
  height: 42px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.primaryDark};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px 0 0 5px;

  &:focus {
    outline: none !important;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.secondary};
  }
`
const Button = styled.button`
  height: 42px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spaces.xs};
  border-radius: 0 5px 5px 0;
  &:hover {
    cursor: pointer;
  }
`
