<template>

  <section id="infraestrutura" class="bg-gray-200 py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-blue-900 mb-8 text-center">Infraestrutura</h2>
      <p class="text-center text-gray-700 mb-12 max-w-2xl mx-auto">Nossas unidades contam com espaços pensados para o
        desenvolvimento completo dos alunos</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <CardInfrastructure title="Salas de Aula"
          subtitle="Ambientes climatizados e equipados com recursos pedagógicos modernos.">
          <svg class="w-8 h-8 text-blue-900 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </CardInfrastructure>

        <CardInfrastructure title="Biblioteca"
          subtitle="Sala de leitura com acervo diversificado para todas as idades.">
          <svg class="w-8 h-8 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
        </CardInfrastructure>

        <CardInfrastructure title="Laboratórios"
          subtitle="Laboratórios de Ciências e Informática totalmente equipados.">
          <svg class="w-8 h-8 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </CardInfrastructure>


        <CardInfrastructure title="Quadra Esportiva"
          subtitle="Espaço para atividades físicas, esportes e recreação.">
           <font-awesome-icon class="text-3xl text-blue-900 mr-3 flex-shrink-1" icon="fa-solid fa-volleyball" />
        </CardInfrastructure>

         <CardInfrastructure title="Parquinho"
          subtitle="Área de lazer segura e divertida para as crianças.">
            <svg class="w-8 h-8 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
            </svg>
        </CardInfrastructure>

         <CardInfrastructure title="Acessibilidade com elevador"
          subtitle="Acessibilidade com elevador garante inclusão, autonomia e segurança, permitindo
                que todos circulem com conforto por todos os ambientes.">
            <font-awesome-icon class="text-3xl text-blue-900 mr-3 flex-shrink-1" icon="fa-solid fa-wheelchair-move" />
        </CardInfrastructure>

         <CardInfrastructure title="Refeitório"
          subtitle="Cozinha e alimentação supervisionada com segurança.">
            <svg class="w-8 h-8 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                clip-rule="evenodd" />
            </svg>
        </CardInfrastructure>


         <CardInfrastructure title="Segurança e Acessibilidade"
          subtitle="Monitoramento e acessibilidade em todos os espaços.">
             <svg class="w-8 h-8 text-blue-900 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
        </CardInfrastructure>

      </div>
    </div>
  </section>


</template>

<script setup lang="ts">
import CardInfrastructure from './ui/CardInfrastructure.vue';


</script>
