
const axiosApi = require('axios').default;

export const requestTempJobs = async () => {
    let jobs = []
    // await axiosApi.get('https://temper.works/api/v3/shifts?filter[date]=2022-07-05&filter[only_freelance]&filter[categories]=qxpvrx,v8wz9x&filter[skills]=9r8978&sort=earliest')
    await axiosApi.get('https://temper.works/api/v3/shifts?filter[date]=2022-07-05&filter[only_freelance]&filter[categories]=qxpvrx,v8wz9x&filter[skills]=9r8978&sort=earliest')
        .then(function (response) {
            let arrayJobs = response.data.data

            arrayJobs.forEach(job => {
                let tempJob = {}
                tempJob.id = Math.random()
                tempJob.title = job.job.title

                jobs.push(tempJob)
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    return jobs

}