const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;

function solution(id_list, report, k){
    let reportObj = new Map();
    id_list.forEach((val) => {
        return reportObj[val] = {
            report : [],
            reported : 0,
            isStoppedId : false
        }
    })
    report.forEach((val) => {
        let [reportId, reportedId] = val.split(' ');
        if(reportObj[reportId].report.indexOf(reportedId) === -1){
            reportObj[reportId].report.push(reportedId);
            reportObj[reportedId].reported++;
            if(reportObj[reportedId].reported >= k){
                reportObj[reportedId].isStoppedId = true;
                }
        }
    })
   
    let email = id_list.map((val) => {
        return reportObj[val].report.filter((reportId) => reportObj[reportId].isStoppedId).length
    })
    console.log(email);
 
    return email;
}

solution(id_list, report, k);
