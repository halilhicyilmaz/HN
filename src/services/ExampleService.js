// Interceptor 
import axios from '../utils/interceptor'
class ExampleService {

    getExample = async () => {

        try {
            // Request
            let result = await axios.get('/get')
            //Check Error
            if (result.data.error) return Promise.reject(result.data.error)


            //Return
            return result.data.data

        } catch (e) {
            return Promise.reject(e)
        }
    }

    addExample = async (body) => {

        try {
            // Request
            //#TODO urlsToClear takes array of strings or just a string. It clears the specific caches which you give. ['/get','/get/all'] or '/get'
            let result = await axios.post('/add', body, { urlsToClear: "/get" })
            //Check Error
            if (result.data.error) return Promise.reject(result.data.error)


            //Return
            return result.data.data

        } catch (e) {
            return Promise.reject(e)
        }
    }


}

export default new ExampleService()