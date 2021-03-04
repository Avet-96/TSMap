const publicIp = require('public-ip');


const getIp = async () => {
    return {
        ip_v4: await publicIp.v4(),
    }
}


export default getIp