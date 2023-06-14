<template>
    <div v-for="job in jobs" :key="job">
        <h1>{{ job.name }}</h1>
        <p>{{ job.description }}</p>
        <router-link :to="{ name: 'job', params: { id: job.name } }">View Job</router-link>
    </div>
</template>

<script>
export default {
    name: "JobList",
    data () {
        return {
        jobs : [
            {
                name: "Job 1",
                description: "This is job 1"
            },
            {
                name: "Job 2",
                description: "This is job 2"
            },
            {
                name: "Job 3",
                description: "This is job 3"
            }
        ]
    }
}
};
</script>