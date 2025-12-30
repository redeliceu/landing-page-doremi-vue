<template>

  <section id="contato" class="bg-gradient-to-b from-gray-100 to-gray-200 py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-blue-900 mb-4 text-center">Entre em Contato</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Estamos prontos para atender você. Agende uma
        visita ou tire suas dúvidas!</p>

      <!-- Main Contact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
        <!-- Location Card -->
        <div
          class="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-blue-900 hover:shadow-xl transition-all hover:scale-105">
          <div class="flex flex-col items-center text-center">
            <div class="bg-blue-900 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-3">Localização</h3>
            <p class="text-gray-700 mb-2">Estrada Alberto Hinoto, 6468</p>
            <p class="text-gray-600 text-sm mb-4">Itaquaquecetuba/SP</p>
            <div class="space-y-2 w-full">
              <p class="text-gray-700 text-sm flex items-center justify-center">
                <svg class="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (11) 922225421
              </p>
              <p class="text-gray-700 text-sm flex items-center justify-center">
                <svg class="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                colegiodoremi@gmail.com
              </p>
            </div>
          </div>
        </div>

        <!-- Hours Card -->
        <div
          class="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-all hover:scale-105">
          <div class="flex flex-col items-center text-center">
            <div class="bg-orange-500 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-3">Horário</h3>
            <div class="space-y-3">
              <div>
                <p class="text-gray-800 font-semibold">Segunda a Sexta</p>
                <p class="text-gray-600">06h às 19h</p>
              </div>
              <div class="border-t border-gray-200 pt-3">
                <p class="text-gray-800 font-semibold">Finais de Semana</p>
                <p class="text-gray-600">Fechado</p>
              </div>
            </div>
          </div>
        </div>

        <!-- WhatsApp Card -->
        <div
          class="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-all hover:scale-105">
          <div class="flex flex-col items-center text-center">
            <div class="bg-green-500 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blue-900 mb-3">WhatsApp</h3>
            <p class="text-2xl font-bold text-green-600 mb-4">(11) 922225421</p>
            <a href="https://wa.me/5511922225421" target="_blank"
              class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-semibold inline-flex items-center transition-all hover:scale-105 shadow-md">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      <!-- Social Media Section -->
      <div class="max-w-6xl mx-auto">
        <div class="bg-gradient-to-r from-blue-900 to-blue-700 p-8 rounded-xl shadow-xl">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-left">
              <h3 class="text-2xl font-bold text-white mb-2">Siga-nos nas Redes Sociais</h3>
              <p class="text-blue-100">Acompanhe nossas novidades, eventos e conteúdos educativos</p>
            </div>
            <div class="flex gap-4 flex-shrink-0">
              <a href="https://www.instagram.com/colegiodoremi" target="_blank"
                class="bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-pink-50 font-semibold inline-flex items-center transition-all hover:scale-105 shadow-lg">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/ColegioDOREMI" target="_blank"
                class="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-semibold inline-flex items-center transition-all hover:scale-105 shadow-lg">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">

</script>
