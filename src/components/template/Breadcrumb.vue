<template>
    <div class="block-breadcrumb">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'component.template.breadcrumb',
        props: {
            msg: String
        }
    }
</script>