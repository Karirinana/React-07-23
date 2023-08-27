import React from 'react'
import { useTranslation } from 'react-i18next';

function NotFound() {
  
  const [t] = useTranslation();

  return (
    <div>
        <h1>404</h1>
        <h3>{t("page-not-found")}</h3>
    </div>
  )
}

export default NotFound