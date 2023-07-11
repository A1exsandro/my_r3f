import { useTranslation } from 'react-i18next'

// We return the function passing the path as a parameter
// where the text we want to transtate is located

const Translator = ({ path }) => {
  const { t } = useTranslation() 
  return t(path)
}

export default Translator
