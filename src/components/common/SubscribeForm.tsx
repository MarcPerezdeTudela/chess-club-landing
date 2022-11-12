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
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
        })
        toast.success('Successfully subscribed', {
          position: 'bottom-center',
          style: {
            backgroundColor: theme.colors.secondary,
            color: theme.colors.primaryDark,
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.h5,
          },
          iconTheme: {
            primary: theme.colors.primaryDark,
            secondary: theme.colors.secondary,
          },
          duration: 3000,
        })

        resetForm()
      }}
    >
      {({ errors }) => (
        <FormContainer>
          <EmailBar>
            <EmailInput name="email" placeholder="Your email" />
            <Button type="submit">Subscribe</Button>
          </EmailBar>
          <ErrorMessage>{errors.email}</ErrorMessage>
        </FormContainer>
      )}
    </Formik>
  )
}

const FormContainer = styled(Form)`
  display: flex;
  width: 100%;
  max-width: 30rem;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.xs};
`
const EmailBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ErrorMessage = styled.span`
  max-width: 26.25em;
  color: tomato;
  height: ${({ theme }) => theme.fontSizes.text};
  padding: 0 ${({ theme }) => theme.spaces.xs};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.text};
`
const EmailInput = styled(Field)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spaces.xs};

  height: 3em;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.primaryDark};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.3125em 0 0 0.3125em;

  &:focus {
    outline: none !important;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.secondary};
  }
`
const Button = styled.button`
  height: 3em;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.s};
  border-radius: 0 0.3125em 0.3125em 0;
  &:hover {
    cursor: pointer;
  }
`
