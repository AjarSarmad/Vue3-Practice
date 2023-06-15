<template>
    <div>
        <h1>My id is => {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    name: "JobDetail",
    props: ['job']
    
};
</script>