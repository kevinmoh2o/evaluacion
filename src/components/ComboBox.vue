<template>
    <label for="dropdown" class="label">{{titulo}}</label>
    <div class="dropdown-wrapper">
        <select id="dropdown" class="dropdown">
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="option1">Opción 1</option>
            <option value="option2">Opción 2</option>
            <option value="option3">Opción 3</option>
        </select>
        <i class="fa fa-caret-down"></i>
    </div>
</template>


<script>

export default {
    props:{
        titulo:String
    },
    setup() {
        
    },
    components: {

    }
}
</script>
<style lang="scss" scoped>
.label {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
}

.dropdown-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 300px;

    .dropdown {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        font-size: 14px;
        cursor: pointer;
    }

    i {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        color: #aaa;
    }
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;

    label {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        padding: 10px;
        border: none;
        border-bottom: 2px solid #ccc;
        font-size: 16px;

        &:focus {
            outline: none;
            border-bottom: 2px solid #1b62bf;
        }

        &::placeholder {
            color: #ccc;
        }
    }
}

</style>