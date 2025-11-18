<template>

  <section id="ensino" class="bg-gray-200 py-20">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-blue-900 mb-8">Etapas de Ensino</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Infantil -->
        <CardStaps
          title="Educação Infantil"
          :imageSrc="imgEducacao"
          altText="Educação Infantil"
          subtitle="Aprender brincando, com afeto e segurança."
          description="Oferecemos um ambiente seguro e lúdico onde as crianças aprendem brincando,
            desenvolvendo habilidades sociais, cognitivas e emocionais."
          />

        <!-- Fundamental -->
        <CardStaps
          title="Ensino Fundamental"
          :imageSrc="imgFundamental"
          altText="Ensino Fundamental"
          subtitle="Conhecimento e valores de mãos dadas."
          description="Do 1º ao 9º ano, construímos bases sólidas com projetos interdisciplinares,
            incentivo à leitura e desenvolvimento da autonomia."
          />

        <!-- Médio -->
         <CardStaps
          title="Ensino Médio"
          :imageSrc="imgMedio"
          altText="Ensino Médio"
          subtitle="Excelência acadêmica e projeto de vida."
          description="Preparação completa para vestibular e ENEM, com professores especialistas,
            orientação vocacional e foco no projeto de vida."
          />

      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import CardStaps from './ui/CardStaps.vue';

import imgEducacao from '@/assets/images/learn/educacao-infantil.webp';
import imgFundamental from '@/assets/images/learn/ensino-fundamental.webp';
import imgMedio from '@/assets/images/learn/ensino-medio.webp';


</script>
