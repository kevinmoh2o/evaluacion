<template>
    <div class="card">
        <header class="card-header">
            <p>May 3rd 2023</p>
            <span class="title">A Tale of Two Divs</span>
        </header>
        <div class="card-author">
            <a class="author-avatar" href="#">
                <span>
                </span>
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div class="author-name">
                <div class="author-name-prefix">Author</div> Folarin Lawal
            </div>
        </div>
        <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.card {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 350px;
    width: 190px;
    min-width: 250px;
    padding: 1rem;
    border-radius: 16px;
    background: #17141d;
    box-shadow: -1rem 0 3rem #00000067;
    transition: .2s;
    font-family: 'Inter', sans-serif;
}

.card:hover {
    transform: translateY(-0.4rem);
}

.card-author {
    position: relative;
    display: grid;
    grid-template-columns: 75px 1fr;
    align-items: center;
    margin: 3rem 0 0;
}

.author-name {
    color: #7a7a8c;
}

.author-name-prefix {
    color: #e52e71;
    font-weight: 600;
}

.author-avatar span {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f2f2f2;
    margin: 16px 10px;
}

.half-circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 48px;
    fill: none;
    stroke: #ff8a00;
    stroke-width: 8;
    stroke-linecap: round;
}

.card-header {
    margin-bottom: auto;
    color: #7a7a8c;
}

.card-header p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
}

.card-header .title {
    font-size: 25px;
    margin: .25rem 0 auto;
    cursor: pointer;
    font-family: 'Arial Black', sans-serif;
}

.card-header .title:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.tags {
    margin: 1rem 0 2rem;
    padding: .5rem 0 1rem;
    line-height: 2;
    margin-bottom: 0;
}

.tags a {
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
    text-transform: uppercase;
    font-size: .66rem;
    border: 3px solid #28242f;
    border-radius: 2rem;
    padding: .2rem .85rem .25rem;
    position: relative;
}

.tags a:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-clip: text;
    border-color: white;
}
</style>