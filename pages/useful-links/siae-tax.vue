<template>

  <div class="bg-third">
    <Title title="SIAE Tax" image="header-playlists"/>

    <!-- SIAE Tax Information Page -->
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <!-- Page Header -->
      <div class="text-center mb-12 font-montserrat">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Understanding SIAE Tax for Your Wedding in Italy</h1>
        <p class="text-gray-600 text-lg">Essential information about Italian music copyright fees for weddings</p>
      </div>

      <!-- Main Content -->
      <div class="space-y-8 font-montserrat">
        <!-- What is SIAE Section -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">What is SIAE?</h2>
          <p class="text-gray-600 leading-relaxed">
            SIAE (Società Italiana degli Autori ed Editori) is the Italian Society of Authors and Publishers. It is the
            main copyright collecting agency in Italy, responsible for protecting intellectual property rights and
            collecting royalties for the use of copyrighted material, including music, during public events such as
            weddings.
          </p>
        </section>

        <!-- What is SIAE Tax Section -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">What is SIAE Tax?</h2>
          <p class="text-gray-600 leading-relaxed">
            SIAE Tax is a mandatory fee that must be paid when copyrighted music is played at public or private events
            in Italy, including weddings. This tax ensures that artists, composers, and copyright holders receive fair
            compensation for the use of their work during your special day.
          </p>
        </section>

        <!-- Why Mandatory Section -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Why is SIAE Tax Mandatory in Italy?</h2>
          <p class="text-gray-600 leading-relaxed">
            In Italy, the SIAE Tax is mandatory by law (Law on Copyright n. 633/1941) to protect intellectual property
            rights. Unlike some other countries, Italy has centralized this process through SIAE, making it the official
            body responsible for collecting and distributing royalties to artists and copyright holders.
          </p>
        </section>

        <!-- When to Pay Section -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">When Do I Need to Pay SIAE Tax?</h2>
          <div class="text-gray-600">
            <p class="mb-4">You must pay SIAE Tax if your wedding reception includes:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Live music performances</li>
              <li>DJ services</li>
              <li>Background music during dinner or cocktail hour</li>
              <li>Any form of recorded music played in a venue</li>
            </ul>
          </div>
        </section>

        <!-- Cost Section -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">How Much is the SIAE Tax?</h2>
          <div class="text-gray-600">
            <p class="mb-4">The SIAE Tax amount varies based on several factors:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>The size of your venue</li>
              <li>The type of music (live band, DJ, background music)</li>
              <li>The duration of the music entertainment</li>
              <li>The number of guests</li>
              <li>Whether the venue is public or private</li>
            </ul>
            <p class="mt-4">For specific rates, we recommend contacting SIAE directly or working with your wedding
              planner, as rates are updated annually.</p>
          </div>
        </section>

        <!-- Payment Process Section -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">How Do I Pay the SIAE Tax?</h2>
          <div class="text-gray-600">
            <p class="mb-4">The SIAE Tax can be paid:</p>
            <ol class="list-decimal pl-6 space-y-2">
              <li>Online through the official SIAE website</li>
              <li>At local SIAE offices</li>
              <li>Through authorized intermediaries (wedding planners, entertainment providers)</li>
            </ol>
            <p class="mt-4">Payment should be made before the event, and documentation should be kept available during
              the wedding.</p>
          </div>
        </section>

        <!-- Tips Section -->
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Tips for Handling SIAE Tax</h2>
          <div class="text-gray-600">
            <ol class="list-decimal pl-6 space-y-2">
              <li>Discuss SIAE Tax responsibility early in your planning process</li>
              <li>Include the tax in your wedding budget</li>
              <li>Ensure all contracts clearly state who is responsible for the payment</li>
              <li>Keep all SIAE documentation available during your wedding</li>
              <li>Work with experienced vendors who understand SIAE requirements</li>
            </ol>
          </div>
        </section>

        <!-- Note Section -->
        <section class="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p class="text-gray-600 text-sm italic">
            Note: This information is provided as a general guide. Rates and requirements may change. We recommend
            verifying current requirements with SIAE or your wedding planner.
          </p>
        </section>
      </div>

      <!-- Contact Section -->
      <div class="mt-12 text-center">
        <p class="text-gray-600">
          For more information about SIAE Tax or planning your wedding in Italy,
          <a href="/contacts" class="text-blue-600 hover:text-blue-800">contact us</a>.
        </p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import {onMounted} from 'vue'
import Title from "~/components/Title.vue";
import {useSiaeTaxSeo} from "~/composables/useSiaeTaxSeo";

onMounted(async () => {
  useSiaeTaxSeo()
});

</script>

<style scoped>

</style>