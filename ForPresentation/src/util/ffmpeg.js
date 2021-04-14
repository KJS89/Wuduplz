import { LogLevel, RNFFmpeg,RNFFmpegConfig } from 'react-native-ffmpeg';

const FFmpeg = async(command,setTime)=>{
    return new Promise((resolve,reject)=>{
        statisticsCallback = (statisticsData) => {
            if(setTime)
                setTime(statisticsData.time)
            console.log('Statistics; frame: ' + statisticsData.videoFrameNumber.toFixed(1) + ', fps: ' + statisticsData.videoFps.toFixed(1) + ', quality: ' + statisticsData.videoQuality.toFixed(1) +
            ', size: ' + statisticsData.size + ', time: ' + statisticsData.time);
        };
    
        RNFFmpegConfig.enableStatisticsCallback(statisticsCallback);
        RNFFmpeg.executeAsync(command, completedExecution => {
            if (completedExecution.returnCode === 0) {
                resolve("FFmpeg process completed successfully");       
            } else {    
                 reject(`FFmpeg process failed with rc=${completedExecution.returnCode}.`);
            }
        })
    })
}

export default{
    Execute:FFmpeg,
}