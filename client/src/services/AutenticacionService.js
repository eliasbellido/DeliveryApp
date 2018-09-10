import Api from  '@/services/Api'

export default {
    registrar (credentials) {
        return Api().post('registrar', credentials)
    }
}

