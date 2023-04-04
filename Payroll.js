window.addEventListener('DOMContentLoaded',(Event)=>
{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        if(name.ariaValueMax.length==0)
        {
            textError.textContent="";
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });
    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    salary.addEventListener('input',function(){
        output.textContent=salary.value; 
    })
})
function createAndUpdateStorage(employeePayrollData){
  let employeePayrollList=JSON.parse(localStorage.getItem('employeePayrollList257'))
  if(employeePayrollList!=undefined)
  {
    employeePayrollList.push(employeePayrollData)
  } 
  else{
    employeePayrollList=[employeePayrollData]
  }
  localStorage.setItem("employeePayrollList257",JSON.stringify(employeePayrollList));
}
const save=()=>{
    try{
        let EmployeePayrollData=createEmployeePayroll();
    }catch(e){
        textError.textContent=e;
    }
}