<template>
  <Title title="Reviews" image="header-reviews"/>
  <div class="bg-third">
    <div class="container mx-auto py-24">
      <div v-if="loading">
        <LoadSpinner/>
      </div>
      <div v-else-if="error">Error loading reviews data: {{ error.message }}</div>
      <div v-else>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:px-0 px-6">
          <div v-for="review in reviewsData" :key="review.id">
            <div class="box-container bg-white p-10">
              <h2 class="text-center font-black font-montserrat text-4xl mb-5">{{ review.couple }}</h2>
              <div class="flex justify-center mb-5">
                <font-awesome-icon
                    v-for="n in 5"
                    :key="n"
                    :icon="n <= getStarCount(review.value) ? 'fas fa-star' : 'far fa-star'"
                    class="text-primary"
                />
              </div>
              <div class="flex justify-center items-center mb-5">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-primary mr-2"/>
                <span class="text-primary font-montserrat">{{ review.location }}</span>
                <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-primary ml-6 mr-2"/>
                <span class="text-primary font-montserrat">{{ formatDate(review.date) }}</span>
              </div>
              <div class="flex flex-col justify-center items-center mb-5">
                <div v-for="artist in review.artists" :key="artist.name" class="flex items-center mb-2">
                  <font-awesome-icon :icon="['fas', 'headphones']" class="text-primary mr-2"/>
                  <span class="text-primary font-montserrat">{{ artist.name }}</span>
                </div>
              </div>
              <div v-html="review.review" class="font-montserrat  font-light text-center"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>

import Title from "~/components/Title.vue";
import {ref, onMounted} from "vue";
import {useReviewService} from "~/api/services/reviews";
import {format} from "date-fns";

const loading = ref(true);
const error = ref(null);

const {getReviews} = useReviewService();

const reviewsData = ref([]);

const fetchReviewData = async () => {
  loading.value = true;
  try {
    reviewsData.value = await getReviews();
  } catch (err) {
    console.error('Error loading review data:', err);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchReviewData();
});


const getStarCount = (value) => {
  switch (value) {
    case 'One':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    default:
      return 0;
  }
};

const formatDate = (date) => {
  return format(new Date(date), 'MM/dd/yyyy');
};

</script>

<style scoped>

</style>