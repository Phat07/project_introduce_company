import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const MenuItem = ({ item, selectedKey, onSelect, level = 0 }) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)
  const hasSubmenu = item.key === 'intro' || item.key === 'solutions' || item.key === 'support'
  
  const handleClick = () => {
    if (hasSubmenu) {
      setIsExpanded(!isExpanded)
    } else {
      onSelect(item.key)
    }
  }

  const getSubmenuItems = (key) => {
    switch (key) {
      case 'intro':
        return [
          { key: 'intro.general', label: t('menu.intro.general') },
          { key: 'intro.network', label: t('menu.intro.network') },
          { key: 'intro.awards', label: t('menu.intro.awards') },
          { key: 'intro.projects', label: t('menu.intro.projects') }
        ]
      case 'solutions':
        return [
          { key: 'solutions.item1', label: t('menu.solutions.item1') },
          { key: 'solutions.item2', label: t('menu.solutions.item2') },
          { key: 'solutions.item3', label: t('menu.solutions.item3') }
        ]
      case 'support':
        return [
          { key: 'support.contact', label: t('menu.support.contact') },
          { key: 'support.faq', label: t('menu.support.faq') },
          { key: 'support.guide', label: t('menu.support.guide') }
        ]
      default:
        return []
    }
  }

  return (
    <>
      <div
        className={`px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center justify-between ${
          selectedKey === item.key ? 'text-red-600' : ''
        }`}
        style={{ paddingLeft: `${level * 16 + 16}px` }}
        onClick={handleClick}
      >
        <span>{hasSubmenu ? t(`menu.${item.key}.title`) : item.label}</span>
        {hasSubmenu && (
          <svg
            className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
      <AnimatePresence>
        {isExpanded && hasSubmenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-gray-50"
          >
            {getSubmenuItems(item.key).map((subItem) => (
              <MenuItem
                key={subItem.key}
                item={subItem}
                selectedKey={selectedKey}
                onSelect={onSelect}
                level={level + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const MobileMenu = ({ isOpen, onClose, menuItems, selectedKey, onSelect }) => {
  const { t } = useTranslation()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-[300px] h-full bg-white z-50 shadow-lg overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <img src="/logo.png" alt="Logo" className="h-8" />
              <button onClick={onClose} className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.key}
                  item={item}
                  selectedKey={selectedKey}
                  onSelect={(key) => {
                    onSelect(key)
                    if (!key.includes('.')) {
                      onClose()
                    }
                  }}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
