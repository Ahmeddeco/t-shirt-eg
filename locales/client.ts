"use client"
import { createI18nClient } from 'next-international/client'

export const { useI18n, useScopedI18n, I18nProviderClient, I18nClientContext, defineLocale, useChangeLocale, useCurrentLocale } = createI18nClient({
  en: () => import('./resources/en.json'),
  ar: () => import('./resources/ar.json')
})