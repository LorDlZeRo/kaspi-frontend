<template>
    <section class="section">
        <div class="main-container">
            <div class="child-container">
                <h1>Страница не найдена!</h1>
                <h4>Страница, на которую вы пытаетесь попасть, не существует.</h4>
                <router-link to="/">
                    <p> ←  <span class="text">Перейти на главную страницу</span></p>
                </router-link>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.section {
    width: 100%;
}
.main-container {
    margin: 0 auto;
    width: 960px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1 {
    margin-top: 28px;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
}

h4 {
    margin-top: 28px;
    font-size: 17px;
    font-weight: 400;
    text-align: center;
}
p {
    text-align: center;
    margin-top: 28px;
    color: #0089d0;
}
.text {
    font-size: 17px;
    color: #0089d0;
    line-height: 1.2;
    letter-spacing: normal;
}

.text:hover{
    text-decoration: underline;
}
</style>