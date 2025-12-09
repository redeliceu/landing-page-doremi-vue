<template>

    <!-- Nav Bar -->

    <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="@/assets/images/logo.webp" height="545" width="145" class="h-12" alt="Logo Estação Futura">
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                <a class="text-white bg-laranja-escuro focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    href="https://wa.me/5511934992247">
                    Contato
                  </a>

                <button data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <a href="#home"
                            :class="activeSection === 'home' ? 'text-laranja-escuro font-bold' : 'text-gray-900 hover:text-laranja-escuro'"
                            class="block py-2 px-3 rounded-sm md:p-0">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#ensino"
                            :class="activeSection === 'ensino' ? 'text-laranja-escuro font-bold' : 'text-gray-900 hover:text-laranja-escuro'"
                            class="block py-2 px-3 rounded-sm md:p-0">
                            Ensino
                        </a>
                    </li>
                    <li>
                        <a href="#diferenciais"
                            :class="activeSection === 'diferenciais' ? 'text-laranja-escuro font-bold' : 'text-gray-900 hover:text-laranja-escuro'"
                            class="block py-2 px-3 rounded-sm md:p-0">
                            Diferenciais
                        </a>
                    </li>
                     <li>
                        <a href="#infraestrutura"
                            :class="activeSection === 'infraestrutura' ? 'text-laranja-escuro font-bold' : 'text-gray-900 hover:text-laranja-escuro'"
                            class="block py-2 px-3 rounded-sm md:p-0">
                            Infraestrutura
                        </a>
                    </li>

                    <li>
                        <a href="#sobre"
                            :class="activeSection === 'sobre' ? 'text-laranja-escuro font-bold' : 'text-gray-900 hover:text-laranja-escuro'"
                            class="block py-2 px-3 rounded-sm md:p-0">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#contato"
                            :class="activeSection === 'contato' ? 'text-laranja-escuro font-bold' : 'text-gray-900 hover:text-laranja-escuro'"
                            class="block py-2 px-3 rounded-sm md:p-0">
                            Contato
                        </a>
                    </li>
                       <li>
                        <a href="https://vagas.redeliceu.com.br/"
                          target=_blank
                            class="block py-2 px-3 rounded-sm md:p-0 text-gray-900 hover:text-laranja-escuro">
                            Trabalhe Conosco
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- End Nav Bar -->


</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref("home") //Bannermain

onMounted(() => {
    const sections = document.querySelectorAll("section") // todas as sections da página

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id
                }
            })
        },
        { threshold: 0.6 } // troca quando 60% da seção estiver visível
    )

    sections.forEach((section) => observer.observe(section))

    onUnmounted(() => observer.disconnect())
})

</script>
