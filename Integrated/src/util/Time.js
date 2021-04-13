export default{
   convertTime:(time1,time2)=>{
            var hiatus = time1-time2;
            if(hiatus <0)
                hiatus = -hiatus
            console.log('hiatus is ',hiatus)
            if(hiatus<60)
                return hiatus.toFixed(0)+' seconds ago'
            else if(hiatus<3600)
                return (hiatus/60).toFixed(0)+' minutes ago' 
            else if(hiatus<86400)
                return (hiatus/3600).toFixed(0) +' hours ago'
            else 
                return (hiatus/86400).toFixed(0) +' days ago'
                 }

}