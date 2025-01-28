<script setup lang="ts">
import { onMounted } from 'vue';


// Funzione che gestisce lo smooth scroll
const handleSmoothScroll = () => {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault();

      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');

      if (targetId) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Calcoliamo la posizione considerando l'offset di 20px
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 20;

          // Eseguiamo lo scroll con l'offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}


onMounted(() => {
  usePrivacySeo();
  handleSmoothScroll();
});

</script>

<template>
  <div class="container mx-auto py-5 font-montserrat space-y-12 lg:px-0 px-8">
    <h1 class="text-center text-2xl font-bold mt-5">Privacy Policy for Wedding Deejay App</h1>

    <!-- Table of Contents -->
    <div class="bg-gray-50 p-4 rounded-lg mb-8">
      <h2 class="text-lg font-bold mb-2">Table of Contents</h2>
      <nav class="space-y-1">
        <a href="#introduction" class="block hover:text-blue-600">1. Introduction</a>
        <a href="#data-collection" class="block hover:text-blue-600">2. Information We Collect</a>
        <a href="#data-usage" class="block hover:text-blue-600">3. How We Use Your Data</a>
        <a href="#legal-basis" class="block hover:text-blue-600">4. Legal Basis for Processing</a>
        <a href="#data-protection" class="block hover:text-blue-600">5. Data Protection</a>
        <a href="#user-rights" class="block hover:text-blue-600">6. Your Rights</a>
        <a href="#retention" class="block hover:text-blue-600">7. Data Retention Period</a>
        <a href="#international" class="block hover:text-blue-600">8. International Data Transfers</a>
        <a href="#changes" class="block hover:text-blue-600">9. Changes to This Policy</a>
        <a href="#contact" class="block hover:text-blue-600">10. Contact Information</a>
      </nav>
    </div>

    <!-- Main content with improved sections -->
    <section id="introduction">
      <h2 class="text-xl font-bold mb-4">1. Introduction</h2>
      <p class="text-gray-700">
        Wedding Deejay ("we," "our," or "the App") is committed to protecting your privacy and personal data. This Privacy Policy explains what information we collect, how we use it, and what rights you have regarding your personal data. By using our App, you agree to the practices described in this policy. We encourage you to read this document carefully to understand our approach to handling your personal information.
      </p>
    </section>

    <section id="data-collection" class="mt-6">
      <h2 class="text-xl font-bold mb-4">2. Information We Collect</h2>
      <div class="space-y-4">
        <div class="bg-white p-4 rounded-lg border">
          <h3 class="font-semibold">2.1 Information You Provide</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Name and surname for service personalization and account management</li>
            <li>Email address for authentication and essential communications</li>
            <li>Physical address for location-based services</li>
            <li>Music preferences and event details</li>
            <li>Payment information (processed securely through our payment providers)</li>
          </ul>
        </div>

        <div class="bg-white p-4 rounded-lg border">
          <h3 class="font-semibold">2.2 Automatically Collected Information</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Device information (operating system, device type, unique device identifiers)</li>
            <li>App usage data and analytics</li>
            <li>Location data (when authorized)</li>
            <li>Log data (IP address, access times, app features used)</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="data-usage" class="mt-6">
      <h2 class="text-xl font-bold mb-4">3. How We Use Your Data</h2>
      <div class="bg-white p-4 rounded-lg border">
        <p class="mb-3">We use your personal data for the following purposes:</p>
        <div class="space-y-3">
          <div>
            <h3 class="font-semibold">Essential Operations</h3>
            <p>To provide our core services, authenticate users, and process payments</p>
          </div>
          <div>
            <h3 class="font-semibold">Service Enhancement</h3>
            <p>To improve our app functionality, user experience, and develop new features</p>
          </div>
          <div>
            <h3 class="font-semibold">Communication</h3>
            <p>To send service updates, security alerts, and support messages</p>
          </div>
          <div>
            <h3 class="font-semibold">Security</h3>
            <p>To protect our services and users from fraud and unauthorized access</p>
          </div>
        </div>
      </div>
    </section>

    <section id="legal-basis" class="mt-6">
      <h2 class="text-xl font-bold mb-4">4. Legal Basis for Processing</h2>
      <div class="bg-white p-4 rounded-lg border">
        <p class="mb-3">We process your personal data under the following legal bases:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Contract fulfillment - to provide our services</li>
          <li>Legal obligation - to comply with applicable laws</li>
          <li>Legitimate interests - to improve our services and protect security</li>
          <li>Consent - for specific features requiring explicit approval</li>
        </ul>
      </div>
    </section>

    <section id="data-protection" class="mt-6">
      <h2 class="text-xl font-bold mb-4">5. Data Protection</h2>
      <div class="bg-blue-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Security Measures</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>End-to-end encryption for sensitive data</li>
          <li>Two-factor authentication options</li>
          <li>Regular security audits and updates</li>
          <li>Secure data backups</li>
          <li>Strict access controls and staff training</li>
          <li>Industry-standard SSL/TLS encryption</li>
        </ul>
      </div>
    </section>

    <section id="user-rights" class="mt-6">
      <h2 class="text-xl font-bold">6. Your Rights</h2>
      <div class="grid md:grid-cols-2 gap-4 mt-3">
        <div class="bg-white p-4 rounded-lg border">
          <h3 class="font-semibold">Right to Access</h3>
          <p>Request a copy of your personal data</p>
        </div>
        <div class="bg-white p-4 rounded-lg border">
          <h3 class="font-semibold">Right to Rectification</h3>
          <p>Correct inaccurate or incomplete data</p>
        </div>
        <div class="bg-white p-4 rounded-lg border">
          <h3 class="font-semibold">Right to Erasure</h3>
          <p>Request deletion of your data</p>
        </div>
        <div class="bg-white p-4 rounded-lg border">
          <h3 class="font-semibold">Right to Object</h3>
          <p>Object to certain data processing</p>
        </div>
      </div>
    </section>

    <section id="retention" class="mt-6">
      <h2 class="text-xl font-bold mb-4">7. Data Retention Period</h2>
      <div class="bg-white p-4 rounded-lg border">
        <p class="text-gray-700">
          We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When your data is no longer needed, it will be securely deleted or anonymized. Typically, we retain:
        </p>
        <ul class="list-disc pl-5 space-y-2 mt-3">
          <li>Account information: While your account is active plus 30 days after deletion</li>
          <li>Payment information: As required by tax laws (usually 7 years)</li>
          <li>Usage data: 12 months for analysis and service improvement</li>
        </ul>
      </div>
    </section>

    <section id="international" class="mt-6">
      <h2 class="text-xl font-bold mb-4">8. International Data Transfers</h2>
      <p class="text-gray-700">
        We may transfer your personal data to countries outside your residence jurisdiction. When we do, we ensure appropriate safeguards are in place through standard contractual clauses and adequate security measures. By using our App, you consent to these international transfers where necessary for providing our services.
      </p>
    </section>

    <section id="contact" class="mt-6">
      <h2 class="text-xl font-bold mb-4">9. Contact Information</h2>
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="mb-2">For any questions about your data privacy, please contact us:</p>
        <ul class="space-y-2">
          <li>Email: info@weddingdeejayamalficoast.com</li>
          <li>Phone: +39 331 40 42 263</li>
          <li>Data Protection Officer: info@weddingdeejayamalficoast.com</li>
        </ul>
      </div>
    </section>

    <!-- Footer with last update date and version -->
    <footer class="mt-8 pt-4 border-t text-center text-gray-600">
      <p>Last updated: January 25, 2024</p>
      <p>Version 2.0</p>
    </footer>
  </div>
</template>

<style scoped>

</style>