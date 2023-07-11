import React from 'react'
import { useTranslation } from 'react-i18next' 

import enFlag from '../../assets/i18n/enFlag.png'
import ptFlag from '../../assets/i18n/ptFlag.png'
import Flag from './Flag'

const SelectI18n = () => {
  const { i18n } = useTranslation() 

  function handleChangeLanguage(language) { 
    return i18n.changeLanguage(language)
  } 

  const selectedLanguage = i18n.language  
  
  return (
    <div className=""> 
      <Flag
        image={ptFlag}
        isSelected={selectedLanguage === 'pt'}  
        onClick={() => handleChangeLanguage('pt')} 
      /> 
      <Flag
        image={enFlag}
        isSelected={selectedLanguage === 'en'}  
        onClick={() => handleChangeLanguage('en')}  
      />
    </div>
  )
}

export default SelectI18n
