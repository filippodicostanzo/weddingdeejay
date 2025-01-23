<template>

  <!-- Container principale del modal -->
  <div class="fixed inset-0 w-full h-full z-50 overflow-hidden" @click="$emit('close')">
    <!-- Overlay scuro che chiude il modal al click -->
    <div class="fixed inset-0 bg-black bg-opacity-70"></div>

    <!-- Container del contenuto -->
    <div class="relative min-h-screen flex items-center justify-center p-4">
      <!-- Modal content con stop della propagazione del click -->
      <div class="relative bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto" @click.stop>
        <!-- Singolo pulsante di chiusura -->
        <button
            @click="$emit('close')"
            class="absolute right-4 top-4 text-4xl leading-none text-gray-600 hover:text-gray-900 z-50"
        >
          &times;
        </button>

        <div v-if="source==='privacy'">
          <button @click="$emit('close')"
                  class="absolute right-4 top-4 text-4xl leading-none text-gray-600 hover:text-gray-900">&times;
          </button>
          <div class="container mx-auto px-4 mt-5">
            <div class="flex flex-col items-center">
              <div class="w-full">
                <h2 class="text-2xl font-bold text-center uppercase">Privacy Policy</h2>
              </div>
            </div>
            <div class="flex flex-col mt-5">
              <div class="w-full">
                <div class="space-y-6">
                  <h3 class="text-xl font-semibold">Why this Notice</h3>
                  <p class="text-gray-700">
                    This page aims to describe how the site is managed with reference to the processing of personal data
                    of users who visit it.
                  </p>
                  <p class="text-gray-700">
                    This information is also provided pursuant to European Regulation GDPR 679/2016 - Code regarding the
                    protection of personal data for those who connect to the website {{ $config.siteDomain }} of
                    {{ $config.siteProperty }} - {{ $config.siteAddress }} - VAT {{ $config.siteVATID }} accessing web
                    services.
                  </p>
                  <p class="text-gray-700">
                    This information is provided only for {{ $config.siteDomain }} and not for other websites that may
                    be consulted by the user through links.
                  </p>
                  <p class="text-gray-700">
                    The information is also inspired by Directive 2009/136/EC, which introduced new rules on cookies,
                    and Recommendation No. 2/2001 adopted by European authorities for the protection of personal data to
                    identify some minimum requirements for the collection of personal data online, and, in particular,
                    the methods, timing and nature of the information that data controllers must provide to users when
                    they connect to web pages, regardless of the purpose of the connection.
                  </p>

                  <h3 class="text-xl font-semibold">The Data Controller</h3>
                  <p class="text-gray-700">
                    Following consultation of the website {{ $config.siteDomain }}, data relating to identified or
                    identifiable persons may be processed.
                  </p>
                  <p class="text-gray-700">
                    The data controller is {{ $config.siteProperty }} - {{ $config.siteAddress }} - VAT
                    {{ $config.siteVATID }}.
                  </p>

                  <h3 class="text-xl font-semibold">Location of Data Processing</h3>
                  <p class="text-gray-700">
                    The processing related to the web services of {{ $config.siteDomain }} takes place at the
                    aforementioned headquarters of {{ $config.siteProperty }} - {{ $config.siteAddress }} - VAT
                    {{ $config.siteVATID }} and is handled only by personnel in charge of processing, or by those
                    occasionally in charge of maintenance operations.
                  </p>
                  <p class="text-gray-700">
                    Data derived from the web service may be communicated to technological and instrumental partners
                    that the Controller uses to provide services requested by visiting users.
                  </p>
                  <p class="text-gray-700">
                    Personal data provided by visiting users who submit requests for informational material (information
                    requests, answers to questions, etc.) or other communications (orders) are used solely for the
                    purpose of performing the requested service or provision and are communicated to third parties only
                    where this is necessary for that purpose (provision of requested services through technological and
                    instrumental partners).
                  </p>

                  <h3 class="text-xl font-semibold">Types of Data Processed</h3>
                  <p class="font-semibold">Navigation Data</p>
                  <p class="text-gray-700">
                    The computer systems and software procedures used to operate the website {{ $config.siteDomain }}
                    acquire, during their normal operation, some personal data whose transmission is implicit in the use
                    of Internet communication protocols.
                  </p>
                  <p class="text-gray-700">
                    This information is not collected to be associated with identified individuals, but by its very
                    nature could, through processing and associations with data held by third parties, allow users to be
                    identified.
                  </p>
                  <p class="text-gray-700">
                    This category includes IP addresses or domain names of computers used by users connecting to the
                    website {{ $config.siteDomain }}, URI (Uniform Resource Identifier) addresses of requested
                    resources, the time of the request, the method used to submit the request to the server, the size of
                    the file obtained in response, the numerical code indicating the status of the response given by the
                    server (successful, error, etc.) and other parameters relating to the operating system and the
                    user's IT environment.
                  </p>
                  <p class="text-gray-700">
                    This data might be used for the sole purpose of obtaining anonymous statistical information on
                    website use {{ $config.siteDomain }} and to check its correct functioning. The data could be used to
                    ascertain responsibility in case of hypothetical computer crimes against the site.
                  </p>

                  <p class="font-semibold">Data Voluntarily Provided by Visiting Users</p>
                  <p class="text-gray-700">
                    The optional, explicit, and voluntary sending of personal data to access certain services, or to
                    make information requests to the addresses indicated on the website villamaria.it, entails the
                    subsequent acquisition of the sender's personal data included in the request, necessary to respond
                    to them.
                  </p>
                  <p class="text-gray-700">
                    Specific summary information notices will be progressively reported or displayed on the site pages
                    set up for particular services on request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="source==='cookie'">
          <button @click="$emit('close')"
                  class="absolute right-4 top-4 text-4xl leading-none text-gray-600 hover:text-gray-900">&times;
          </button>
          <div class="container mx-auto px-4 mt-5">
            <div class="flex flex-col items-center">
              <div class="w-full">
                <h2 class="text-2xl font-bold text-center uppercase">Cookie Policy</h2>
              </div>
            </div>
            <div class="flex flex-col mt-5">
              <div class="w-full">
                <div class="space-y-6">
                  <section>
                    <h4 class="text-xl font-semibold mb-4">What are cookies</h4>
                    <p class="text-gray-700 mb-4">
                      The website {{ $config.siteDomain }} uses cookies. As clarified by the Privacy Authority in the
                      December 2012 FAQs, available at
                      <a href="http://www.garanteprivacy.it/" target="_blank" class="text-blue-600 hover:text-blue-800">www.garanteprivacy.it</a>,
                      cookies are "small text files" - made up of letters and numbers - "that websites visited by users
                      send to their terminal (usually the browser),
                      where they are stored to be retransmitted to the same sites during subsequent visits". Cookies
                      function to streamline web traffic analysis
                      or indicate when a specific site or part of it is being visited, to distinguish between visitors
                      to provide personalized content, and help
                      administrators improve the site and users' browsing experience.
                    </p>
                    <p class="text-gray-700 mb-4">
                      Through cookies, we cannot access other information stored on your device, even though this is
                      where cookies are downloaded.
                      Cookies cannot load code of any kind, transmit viruses or malware, and are not harmful to the
                      user's device.
                    </p>
                    <p class="text-gray-700 mb-4">
                      Below you can find all information about cookies installed through this site, and the necessary
                      guidance on how to manage your preferences.
                    </p>
                  </section>

                  <section>
                    <h4 class="text-xl font-semibold mb-4">User Consent</h4>
                    <p class="text-gray-700 mb-4">
                      When connecting for the first time to any page of {{ $config.siteDomain }}, users will see a brief
                      notice about cookie usage.
                      By closing this notice via the appropriate button or clicking outside the banner that contains it
                      and continuing browsing,
                      users consent to our use of cookies, according to the methods described in this Cookie Policy.
                    </p>
                    <p class="text-gray-700 mb-4">
                      The site remembers the user's choice, so the brief notice will not be shown again in subsequent
                      connections from the same device.
                      However, users always have the option to revoke their consent in whole or in part.
                    </p>
                    <p class="text-gray-700 mb-4">
                      If you encounter technical problems related to providing consent, please contact us through the
                      appropriate channels provided
                      by this site so we can assist you.
                    </p>
                  </section>

                  <section>
                    <h4 class="text-xl font-semibold mb-4">Types of cookies we use</h4>
                    <p class="text-gray-700 mb-4">
                      The use of cookies by the Controller of this site, {{ $config.siteProperty }}, falls within its
                      Privacy Policy;
                      for all information required by Art. 13 of the Privacy Code, please visit the appropriate page of
                      this website.
                    </p>
                    <p class="text-gray-700 mb-4">
                      To enable the use of our site and the delivery of our services, we use both persistent cookies
                      (cookies that remain in memory
                      until manually deleted by the user or for which scheduled long-term removal is provided) and
                      session cookies, which are not
                      stored persistently on the visitor's computer and disappear when the browser is closed.
                    </p>
                    <p class="text-gray-700 mb-4">
                      We use different types of cookies - with specific functions - which we can classify as follows:
                    </p>

                    <div class="overflow-x-auto">
                      <table class="min-w-full divide-y divide-gray-200 border">
                        <thead>
                        <tr>
                          <th colspan="2" class="px-6 py-3 bg-gray-50 text-left">
                            <p class="text-sm font-semibold text-gray-900">First-party cookies, issued by
                              {{ $config.siteDomain }}</p>
                          </th>
                        </tr>
                        <tr>
                          <th class="px-6 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-900">Cookie Type
                          </th>
                          <th class="px-6 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-900">What do they
                            do?
                          </th>
                        </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-900">Technical/Session Cookies</p>
                            <p class="text-sm text-gray-900">Technical/Navigation Cookies</p>
                            <p class="text-sm text-gray-500 italic">(User consent is not required for this type of
                              cookie)</p>
                          </td>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-700">Essential for the proper functioning of our site and allow
                              users to navigate and view content.
                              Disabling them would cause site malfunctions.</p>
                            <p class="text-sm text-gray-700">Generally, these types of cookies are necessary, for
                              example, to maintain an open browsing session
                              or to allow users to access any restricted areas. They can also temporarily remember texts
                              entered during form completion when
                              returning to a previous page in the same session.</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-900">Technical/Functionality Cookies</p>
                            <p class="text-sm text-gray-500 italic">(User consent is not required for this type of
                              cookie)</p>
                          </td>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-700">Allow users to make the best use of site features and enjoy
                              a more comfortable browsing experience.
                              The site works ideally if these cookies are enabled; however, you can choose not to allow
                              their activation on your device.</p>
                            <p class="text-sm text-gray-700">In general, for example, these types of cookies remember
                              which language the user prefers to view our content in,
                              or remember (for a limited period) the items in the virtual cart if the session is closed
                              before completing the purchase.</p>
                          </td>
                        </tr>

                        <tr>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-900">Technical/Consent Cookies</p>
                            <p class="text-sm text-gray-500 italic">(User consent is not required for this type of
                              cookie)</p>
                          </td>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-700">This cookie tracks the user's consent to the use of cookies
                              on this site, so as not to show - in subsequent visits -
                              the brief cookie notice and the request to provide consent.</p>
                          </td>
                        </tr>

                        <tr>
                          <th colspan="2" class="px-6 py-3 bg-gray-50 text-left">
                            <p class="text-sm font-semibold text-gray-900">Third-party cookies, issued by sites other
                              than {{ $config.siteDomain }}</p>
                          </th>
                        </tr>

                        <tr>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-900">Statistical/Analytics Cookies</p>
                            <p class="text-sm text-gray-500 italic">(User consent is required for this type of
                              cookie)</p>
                          </td>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-700">Used to collect information about how users navigate our
                              site. This information is analyzed in aggregate form for
                              statistical purposes only.</p>
                            <p class="text-sm text-gray-700">They are not necessary but are very helpful to us in
                              improving our content and services based on the insights
                              we derive from statistical analysis.</p>
                          </td>
                        </tr>

                        <tr>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-900">Profiling/Advertising Cookies</p>
                            <p class="text-sm text-gray-500 italic">(User consent is required for this type of
                              cookie)</p>
                          </td>
                          <td class="px-6 py-4">
                            <p class="text-sm text-gray-700">Used to present content, including advertising, more suited
                              to you. They can also be used, for example, to limit
                              the number of times an advertisement is shown or to help us evaluate the effectiveness of
                              our advertising campaigns or advertising campaigns on our
                              websites.</p>
                            <p class="text-sm text-gray-700">They are not necessary, but they allow us to offer content
                              closer to your interests.</p>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section class="mt-6">
                    <h4 class="text-xl font-semibold mb-4">Third-party Cookies</h4>
                    <div class="space-y-4">
                      <p class="text-gray-700">While browsing this site, you will receive both cookies from
                        {{ $config.siteProperty }} and from third-party sites,
                        which may set cookies on your device on our behalf to provide the services they are
                        delivering.</p>

                      <p class="text-gray-700">Third-party cookies allow us to obtain more complete surveys of users'
                        browsing habits. We use such cookies,
                        for example, to collect information for advertising purposes and content personalization, as
                        well as to process statistics about the use
                        of our site and to evaluate your interest in our specific content or services. More detailed
                        information about these cookies is available
                        in the following paragraphs in this document and on the respective third-party websites.</p>
                    </div>

                    <div class="mt-6">
                      <p class="text-lg font-semibold mb-2">Statistical Cookies (third-party)</p>
                      <div class="space-y-4">
                        <p class="text-gray-700">{{ $config.siteDomain }} uses Google Analytics, a web analysis service
                          provided by Google, Inc.,
                          1600 Amphitheatre Parkway - Mountain View - CA94043 USA, which uses cookies to collect and
                          analyze aggregate information related to
                          user navigation. Neither {{ $config.siteProperty }} nor Google associate your IP address with
                          other data in their possession to identify
                          you directly.</p>

                        <p class="text-gray-700">The collected information is processed by Google Analytics systems to
                          produce reports for {{ $config.siteDomain }}
                          administrators, who use them to verify the correct functioning of services and possibly the
                          satisfaction rate of the proposed content.</p>

                        <p class="text-gray-700">If you would like more information about the policies applied by Google
                          Inc. regarding data privacy, you can click
                          <a href="http://www.google.it/intl/it/policies/privacy/" target="_blank"
                             class="text-blue-600 hover:text-blue-800">
                            http://www.google.it/intl/it/policies/privacy/
                          </a>;
                          to disable statistical cookies, thus preventing Google Analytics from collecting data about
                          your browsing, you can download the appropriate
                          component for disabling Google Analytics here:
                          <a href="http://tools.google.com/dlpage/gaoptout" target="_blank"
                             class="text-blue-600 hover:text-blue-800">
                            http://tools.google.com/dlpage/gaoptout
                          </a>.</p>
                      </div>
                    </div>
                  </section>

                  <section class="mt-6">
                    <h4 class="text-xl font-semibold mb-4">Social Plugins and Widgets (third-party)</h4>
                    <div class="space-y-4">
                      <p class="text-gray-700">Our web pages may contain plugins from the most popular social networks
                        (e.g., Facebook, Twitter, Google+)
                        managed by the third parties involved.</p>

                      <p class="text-gray-700">These plugins might correspond to buttons like Facebook's "Like" or
                        Twitter's "Retweet". If you access
                        one of our web pages equipped with such a plugin, your internet browser connects directly to the
                        third-party servers and the plugin
                        is displayed on screen thanks to the connection with the browser. The plugin might communicate
                        to third-party servers which pages
                        the user has visited.</p>

                      <p class="text-gray-700">If a social network user visits our web pages while logged into their
                        account, this information could be
                        associated with the account. Even when using plugin functions (for example, clicking the "Like"
                        button), the information will be
                        associated with your account.</p>

                      <p class="text-gray-700 mb-4">In the table below you can find details about individual plugins and
                        possibly deactivate them:</p>

                      <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 border">
                          <thead class="bg-gray-50">
                          <tr>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Social</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Owner</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Contact</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Privacy</th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">Disable</th>
                          </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                          <tr>
                            <td class="px-4 py-3 text-sm text-gray-900">Facebook</td>
                            <td class="px-4 py-3 text-sm text-gray-900">Facebook Inc.</td>
                            <td class="px-4 py-3 text-sm text-gray-900">1601 S. California Ave Palo Alto - CA94304 USA
                            </td>
                            <td class="px-4 py-3 text-sm">
                              <a href="http://www.facebook.com/about/privacy" target="_blank"
                                 class="text-blue-600 hover:text-blue-800">
                                View third-party privacy policy
                              </a>
                            </td>
                            <td class="px-4 py-3 text-sm">
                              <a href="http://www.ghostery.com/it/apps/facebook_connect" target="_blank"
                                 class="text-blue-600 hover:text-blue-800">
                                Click here
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-4 py-3 text-sm text-gray-900">Twitter</td>
                            <td class="px-4 py-3 text-sm text-gray-900">Twitter Inc.</td>
                            <td class="px-4 py-3 text-sm text-gray-900">1355 Market Street, Suite 900, San Francisco,
                              CA94103 USA
                            </td>
                            <td class="px-4 py-3 text-sm">
                              <a href="http://support.twitter.com/articles/20170514" target="_blank"
                                 class="text-blue-600 hover:text-blue-800">
                                View third-party privacy policy
                              </a>
                            </td>
                            <td class="px-4 py-3 text-sm">
                              <a href="http://www.ghostery.com/it/apps/twitter_button" target="_blank"
                                 class="text-blue-600 hover:text-blue-800">
                                Click here
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="px-4 py-3 text-sm text-gray-900">Google</td>
                            <td class="px-4 py-3 text-sm text-gray-900">Google, Inc.</td>
                            <td class="px-4 py-3 text-sm text-gray-900">1600 Amphitheatre Parkway, Mountain View,
                              CA94043 USA
                            </td>
                            <td class="px-4 py-3 text-sm">
                              <a href="http://www.google.it/intl/it/policies/privacy/" target="_blank"
                                 class="text-blue-600 hover:text-blue-800">
                                View third-party privacy policy
                              </a>
                            </td>
                            <td class="px-4 py-3 text-sm">
                              <a href="http://www.ghostery.com/it/apps/google%2B%20platform" target="_blank"
                                 class="text-blue-600 hover:text-blue-800">
                                Click here
                              </a>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  <section class="mt-6">
                    <h4 class="text-xl font-semibold mb-4">How to Configure Your Browser</h4>
                    <div class="space-y-4">
                      <p class="text-gray-700">If you disagree with the installation of cookies, you must configure your
                        browser to disable cookie
                        reception or not use this site. However, by disabling cookies, the site or some of its functions
                        may not work properly.</p>

                      <p class="text-gray-700">To modify cookie usage settings, block their reception, or delete cookies
                        present on your device,
                        simply access your browser settings.</p>

                      <p class="text-gray-700">Most browsers allow you to accept or reject all cookies or accept only
                        some (for example, those from
                        specific sites).</p>

                      <p class="text-gray-700">Although through similar steps, the cookie configuration method varies
                        for each browser. For details
                        about the procedure to follow, you can visit
                        <a href="http://www.aboutcookies.org/" target="_blank"
                           class="text-blue-600 hover:text-blue-800">www.aboutcookies.org</a>
                        or consult your browser's 'Help' section.</p>

                      <p class="text-gray-700">For more information about cookies and to manage your third-party cookie
                        preferences, we invite you
                        to visit <a href="http://www.youronlinechoices.com/" target="_blank"
                                    class="text-blue-600 hover:text-blue-800">
                          www.youronlinechoices.com</a>.</p>
                    </div>
                  </section>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  source: {
    type: String,
    required: true
  }
})

defineEmits(['close'])
</script>