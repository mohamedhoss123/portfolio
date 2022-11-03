<script setup>
</script>

<template>
    <div class="Intreduce-myself">
        <div>
            <h2>
                Hi, I am <br>Web Developer
            </h2>
            <p>I am a here to answer your questions</p>
        </div>
        <div class="who-i-am">
            <svg class="who-i-am-svg" width="457" height="465" viewBox="0 0 457 465" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect id="rect" x="2" y="2" width="453" height="461" rx="2" stroke="black" stroke-width="4" />
            </svg>

            <div>
                <h3>Who am I?</h3>
                <p>
                    I am Mohamed Hossam,<br>
                    a web developer from Egypt,<br>
                    my age is 16,<br>
                    <br>
                    the most technology <br>
                    i am great with is typescript<br>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.Intreduce-myself>div:nth-child(1) {
    margin-left: 16px;
}

.Intreduce-myself>div:nth-child(2) {
    margin-top: 40px;
}

h2 {
    font-size: 2.5rem;
}

.Intreduce-myself {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}

.who-i-am > div:nth-child(2) {
    margin-left: 23px;
}

h3 {
    font-size: 35px;
}

.who-i-am-svg {
    position: absolute;
    width: 400px;
    height: 400px;
}

@media(min-width:820px) {
    .Intreduce-myself>div:nth-child(2) {
        margin-top: 115px;
    }

    h2 {
        font-size: 4.5rem;
    }

    .Intreduce-myself {
        flex-direction: row;
    }
}
</style>