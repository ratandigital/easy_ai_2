'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'

export default function ScriptComponent() {
    useEffect(() => {
        const ScriptTag = document.createElement('script');
        import ("bootstrap/dist/js/bootstrap.bundle.min.js")
        
      }, []);
  return (
    <></>
  )
}
