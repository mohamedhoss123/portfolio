<script setup>
</script>
<template>
    <header>
        <h1>MOHAMED HOSSAM</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
</template>

<style>
header {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

a {
    text-decoration: none;
    color: black;
}

ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 22rem;
    padding: 0;
}

li:nth-child(1) {
    font-weight: 700;
}

h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
}

@media(max-width:600px) {
    ul {
        display: none;
    }
}
</style>