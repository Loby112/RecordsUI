const baseURL = "https://localhost:44348/api/Records"
Vue.createApp({
    data(){
        return {
            Records: [],

        }
    },
    methods: {
        async helperGetAndShow(url){
            try {
                const response = await axios.get(url)
                this.Records = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        getAllRecords(){
            this.helperGetAndShow(baseURL)
        },

    }


}).mount("#app")