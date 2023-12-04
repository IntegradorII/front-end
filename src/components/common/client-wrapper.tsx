'use client'

import { useEffect } from 'react'

interface ClientWrapperProps {
  children: React.ReactNode
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  useEffect(() => {
    let sb = document.getElementById('my-custom-sidebar')
    let ft = document.getElementById('my-custom-footer')
    let retraso = 0
    if (!sb || !ft) {
      retraso = 200
    }
    setTimeout(() => {
      if (!sb || !ft) {
        sb = document.getElementById('my-custom-sidebar')
        ft = document.getElementById('my-custom-footer')
      }
      const sidebar = sb
      const footer = ft
      if (sidebar && footer) {
        const handleScroll = () => {
          const scrollHeight = document.documentElement.scrollHeight
          const scrollTop = window.scrollY
          const heightFooter = footer.clientHeight ?? 0
          const heightSidebar = sidebar.clientHeight ?? 0
          const aux = scrollHeight - scrollTop - heightFooter - 80
          const diff = aux - heightSidebar
          if (diff < 0) {
            sidebar.style.top = `${diff + 80}px`
          } else {
            sidebar.style.top = '80px'
          }
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
      }
    }, retraso)
  }, [])
  return (
    <section className='w-full max-w-[1920px]'>
      {children}
    </section>
  )
}

export { ClientWrapper }
