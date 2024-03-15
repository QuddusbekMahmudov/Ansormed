import React from 'react'
import siteLogo from '../img/logo-icon.png'
const Header = () => {

  return (
    <header class="header p-6">
      <div class="container max-w-1140 flex justify-between items-center px-5 mx-auto">
        <div class="left">
          <a href="index.html" class="font-semibold flex items-center">
          <img src={siteLogo} alt="AnsorMed" class="mr-4"/>
            <h1 class="text-2xl">AnsorMed</h1>
          </a>
        </div>
        <div class="center">
          <a href="#" class="link mr-8">Xizmatlar</a>
          <a href="#" class="link mr-8">Dorilar</a>
          <a href="#" class="link mr-8">Asal</a>
          <a href="#" class="link mr-8">Kontaktlar</a>
          <a href="#" class="link">Blog</a>
        </div>
        <div class="right">
          <button class="main-btn">Qabulga yozilish</button>
        </div>
      </div>
    </header>

  )
}

export default Header