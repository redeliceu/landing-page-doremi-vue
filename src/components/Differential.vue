<template>

  <section id="diferenciais" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-blue-900 mb-4 text-center">Diferenciais</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">O que torna o Colégio Dó-Ré-Mi único na região</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


        <CardDifferentialBlue title="Sistema Sucesso de Ensino"
          subtitle="Conteúdo moderno, interdisciplinar e alinhado à BNCC.">

          <svg class="w-8 h-8 text-blue-900 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>

        </CardDifferentialBlue>


        <CardDifferentialOrange title="Educação Financeira DSOP"
          subtitle="Pioneirismo na região com projeto de consciência financeira desde cedo.">
          <svg class="w-8 h-8 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd" />
          </svg>
        </CardDifferentialOrange>


        <CardDifferentialBlue title="Robótica e Tecnologia"
          subtitle="Ensino de programação, lógica e pensamento criativo.">

          <svg class="w-8 h-8 text-blue-900 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>

        </CardDifferentialBlue>


        <CardDifferentialOrange title="Inglês desde a infância"
          subtitle="Exposição ao idioma de forma natural e divertida.">
          <svg class="w-8 h-8 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
              clip-rule="evenodd" />
          </svg>
        </CardDifferentialOrange>

        <CardDifferentialBlue title="Jiu-Jitsu" subtitle="Jiu-Jitsu desenvolve foco, respeito, autodefesa e fortalecimento físico e
                emocional.">

          <font-awesome-icon class="text-3xl text-blue-900 mr-3 flex-shrink-1" icon="fa-solid fa-medal" />

        </CardDifferentialBlue>


        <CardDifferentialOrange title="Ballet" subtitle="Ballet estimula postura, disciplina, criatividade e coordenação motora,
                promovendo graça e confiança em cada movimento.">
          <font-awesome-icon class="text-3xl text-orange-500 mr-3 flex-shrink-0" icon="fa-solid fa-child-dress" />
        </CardDifferentialOrange>

        <CardDifferentialBlue title="Taekwondo" subtitle="Jiu-Jitsu desenvolve foco, respeito, autodefesa e fortalecimento físico e
                emocional.">
          <font-awesome-icon class="text-3xl text-blue-900 mr-3 flex-shrink-1" icon="fa-solid fa-people-arrows" />
        </CardDifferentialBlue>

        <CardDifferentialOrange title="Equipe Qualificada" subtitle="Professores capacitados e em constante formação.">
          <svg class="w-8 h-8 text-orange-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </CardDifferentialOrange>

        <CardDifferentialBlue title="Quadra e Arena de Atividades" subtitle="Nossa Quadra e Arena de Atividades incentivam o movimento, a socialização e o
                espírito esportivo, oferecendo um espaço seguro e dinâmico para prática de esportes e desenvolvimento
                físico.">
          <font-awesome-icon class="text-3xl text-blue-900 mr-3 flex-shrink-1" icon="fa-solid fa-volleyball" />

        </CardDifferentialBlue>


      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardDifferentialBlue from './ui/CardDifferentialBlue.vue';
import CardDifferentialOrange from './ui/CardDifferentialOrange.vue';



</script>
