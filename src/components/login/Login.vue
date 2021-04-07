<template>
    <div class="container">
        <main class="form-signin">
            <form id="form-login" action="#" @submit.prevent="login">

                <h1 class="mb-3 fw-normal text-primary">MedDocs</h1>
                <div class="form-floating mb-2">
                    <input type="email" name="email" class="form-control">
                    <label for="email">Email address</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="password" name="password" class="form-control">
                    <label for="password">Password</label>
                </div>
                <button class="w-100 btn btn-primary" type="submit">Entrar</button>
                <p class="mt-5 mb-3 text-muted">Phant&copy; 2020</p>
                            
            </form>
        </main>
    </div>
</template>

<!-- http://localhost:8080 -->

<script>
export default {
    name: 'LoginPage',

    methods: {
        login() {
            alert("calling login");
            window.location.href = 'http://localhost:8080/dashboard';
        }
    }
}
</script>

    <style scoped>
      html,body {
        height: 100%;
      }

      .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
      }

      .form-signin .checkbox {
        font-weight: 400;
      }

      .form-signin .form-floating:focus-within {
        z-index: 2;
      }

      .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }

      .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

    </style>