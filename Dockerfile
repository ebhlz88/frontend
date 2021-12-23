FROM node:12.2.0-alpine
#set working directory

WORKDIR /app

#add /app/node_modules/.bin to $PATH

ENV PATH /app/node_modules/.bin:$PATH

#install and cache app dependencies

COPY package.json /app/package.json

RUN npm install

RUN npm install @vue/cli@3.7.0 -g
RUN npm install @fortawesome/vue-fontawesome axios bootstrap bootstrap-vue moment-timezone v-toaster vue vue-axios vue-confirm-dialog vue-js-modal vue-moment vue-router vue2-datepicker vuejs-datepicker vuelidate vuex vuex-persistedstate vueye-datepicker @popperjs/core @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome @vue/composition-api
RUN npm install vue-apexcharts apexcharts
#start app

CMD ["npm", "run", "serve"]