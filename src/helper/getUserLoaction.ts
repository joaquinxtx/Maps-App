export const getUserLoaction=async():Promise<[number,number]>=>{

    return new Promise((resolve,reject)=>{
        navigator.geolocation.watchPosition(
            ({coords})=>{
                resolve([coords.longitude,coords.latitude])
            },
            (err)=>{
                alert('No se pudo obtener la geolocalizacion');
                console.log(err);
                reject();
                
            }

        )

})
}