<template>
  <section id="pais-alunos" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-blue-900 mb-4 text-center">Pais e Alunos</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Recursos e informações úteis para facilitar o dia a
        dia escolar</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg border-t-4 border-blue-900 hover:shadow-xl transition-shadow">
          <div class="flex flex-col items-center text-center">
            <svg class="w-16 h-16 text-blue-900 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd" />
            </svg>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Calendário Escolar</h3>
            <p class="text-gray-700 mb-4">Todas as datas importantes do ano letivo</p>
            <a href="#contato" class="text-orange-500 hover:text-orange-600 font-semibold">Baixar Calendário →</a>
          </div>
        </div>
        <div
          class="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
          <div class="flex flex-col items-center text-center">
            <svg class="w-16 h-16 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd" />
            </svg>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Lista de Materiais</h3>
            <p class="text-gray-700 mb-4">Listas atualizadas por série</p>
            <a href="#contato" class="text-orange-500 hover:text-orange-600 font-semibold">Ver Lista →</a>
          </div>
        </div>
        <div
          class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg border-t-4 border-blue-900 hover:shadow-xl transition-shadow">
          <div class="flex flex-col items-center text-center">
            <svg class="w-16 h-16 text-blue-900 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                clip-rule="evenodd" />
            </svg>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Portal do Aluno</h3>
            <p class="text-gray-700 mb-4">Boletins, atividades e comunicados</p>
            <a href="#contato" class="text-orange-500 hover:text-orange-600 font-semibold">Acesse o Portal →</a>
          </div>
        </div>
        <div
          class="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
          <div class="flex flex-col items-center text-center">
            <svg class="w-16 h-16 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clip-rule="evenodd" />
            </svg>
            <h3 class="text-xl font-bold text-blue-900 mb-2">Comunicação</h3>
            <p class="text-gray-700 mb-4">Agendas, WhatsApp e reuniões periódicas</p>
            <a href="https://wa.me/5511934992247" target="_blank"
              class="text-orange-500 hover:text-orange-600 font-semibold">Fale Conosco →</a>
          </div>
        </div>
      </div>
      <div class="mt-12 bg-gradient-to-r from-blue-100 to-orange-100 p-8 rounded-lg text-center">
        <h3 class="text-2xl font-bold text-blue-900 mb-4">Precisa de mais informações?</h3>
        <p class="text-gray-700 mb-6">Nossa equipe está pronta para atender você. Entre em contato para esclarecer
          dúvidas sobre uniformes, regulamentos, horários e muito mais.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato"
            class="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 font-semibold inline-block transition-all hover:scale-105">Fale
            com a Secretaria</a>
          <a href="https://wa.me/5511934992247" target="_blank"
            class="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 font-semibold inline-block transition-all hover:scale-105">WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
