<template>

  <header>
    <!-- Desktop Navigation -->
    <NavBar />

  </header>

  <!-- Main Content -->
  <main class="pt-17 md:pt-17 ">
    <!-- Hero Section -->

    <BannerMainTwo />

    <Staps />

    <Differential />

    <Infrastructure />

    <About />


    <!-- Testimonials Section
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">O que dizem sobre nós</h2>
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <svg class="w-12 h-12 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote class="text-xl text-gray-700 italic mb-6 leading-relaxed">
              "Ambiente acolhedor e ótimos professores. Meu filho evoluiu muito!"
            </blockquote>
            <div class="flex items-center">
              <div
                class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg mr-4">
                M
              </div>
              <div>
                <p class="font-semibold text-gray-900">Mãe do 3º ano</p>
                <p class="text-sm text-gray-600">Família Colégio Dó-Ré-Mi</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="#contato"
            class="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 font-semibold inline-block shadow-lg transition-all hover:scale-105">
            Agende uma Visita
          </a>
        </div>
      </div>
    </section>
    -->

    <Contact />

    <!-- Pais e Alunos Section -->
    <ParentsStudents />
  </main>

  <!-- Floating WhatsApp Button -->
  <ButtonWtt />


  <footer class="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16">
    <Footer />
  </footer>


</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NavBar from '@/components/NavBar.vue'
//import BannerMain from '@/components/BannerMain.vue'
import BannerMainTwo from '@/components/BannerMainTwo.vue'
import Staps from '@/components/Staps.vue'
import Contact from '@/components/Contact.vue'
import Differential from '@/components/Differential.vue'
import Infrastructure from '@/components/Infrastructure.vue'
import About from '@/components/About.vue'
import ParentsStudents from '@/components/ParentsStudents.vue'
import Footer from '@/components/Footer.vue'
import ButtonWtt from '@/components/ButtonWtt.vue'



onMounted(() => {
  initFlowbite()
})


</script>

<style>
.texto-principal {
  -webkit-text-stroke-width: 2px;
  /* largura da borda */
  -webkit-text-stroke-color: #ff7b16;
  /* cor da borda */
}

.texto-secundario {
  -webkit-text-stroke-width: 0.5px;
  /* largura da borda */
  -webkit-text-stroke-color: #9ffdff;
  /* cor da borda */
}

.bg-laranja-escuro {
  background-color: #00139f;
}


.bg-laranja-escuro:hover {
  background-color: #3041f8;
}

.bg-azul-claro {
  background-color: #9ffdff;
}

.text-laranja-escuro {
  color: #b90002;
}

.text-amarelo {
  color: #ffc500;
}

.text-azul-claro {
  color: #9ffdff;
}

.text-azul-escuro {
  color: #009ab6;
}

.text-laranja-escuro-hover:hover {
  color: #b90002;
}
</style>
