#### Валидация форм
https://habr.com/ru/company/constanta/blog/444900/
https://vuelidate.js.org/#sub-contextified-validators
```
//
// шаблон
<template>
    <!-- Место где должна выводиться ошибка -->

    <input v-model="phone" @blur="$v.phone.$touch()">
    <span v-if="$v.phone.$error">
      {{ сообщение_об_ошибке }}
    </span>

    <!-- Место где должна выводиться кнопка -->
    <button class="btn" type="submit" :disabled="$v.$invalid">Войти</button>
</template>

//
// скрипт
<script>
    // подключаем библиотеку
    import { required } from 'vuelidate/lib/validators';
    
    data() {
      return {
        phone: null,
      }
    },
    
    // Модель для валидации, которую Vuelidate превратит в computed-поле $v
    validations: {
      // Название поля должно совпадать с полем в data
      phone: {
        required,
      },
    },
</script>

```

#### Функционал кнопки "Назад"
```
//
// шаблон
<template>
    <!-- Место где должна выводиться кнопка "Назад" -->
    <BackButtonComponent
        msg="Вернуться"
        :backPath="$store.getters.getLastUrl">
    </BackButtonComponent>

    <!-- Место где должна выводиться кнопка "Перейти на другую страницу" -->
    <!-- при этом сохранив текущую в историю переходов -->
    <router-link
        class="link"
        v-on:click.native="routeLinkClick"
        :to="{ name: 'auth.recoveryPassword' }">
            Забыли пароль?
    </router-link>
</template>

//
// скрипт
<script>
    // подключаем дополнительный хелпер
    import redirectFunctions from "@/helpers/request/redirectFunctions";
    // подключаем компонент
    import BackButtonComponent from "@/components/BackButton/Index";
    
    // добавляем компонент
    components: {
      BackButtonComponent
    },

    // добавляем переменную, которая будет содержать текущий URL
    data() {
      return {
        currentUrl: this.$router.currentRoute.path,
      }
    },

    // добавляем метов, который будет добавлять текущий URL в историю при переходе
    methods: {
      routeLinkClick(){
        redirectFunctions.addHistoryUrl(this.$store, this.currentUrl);
      },
    }
</script>

```

https://www.npmjs.com/package/vuejs-datepicker