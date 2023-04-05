window.addEventListener('DOMContentLoaded',(event) =>{
    const name =document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.Value;
            textError.textContent="";
        }
        catch(e){
            textError.textContent= e;
 
        }
    });
   const salary = document.querySelector('#salary');
   const output = document.querySelector('.salary-output');
   output.textContent = salary.Value;
   salary.addEventListener('input',function(){
    output.textContent =salary.Value;
   });
});

const save =()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
    } catch(e){
        return;
    }
}
const createEmployeePayroll =() => {
   let employeePayrollData = new EmployeePayrollData();
   try{
    employeePayrollData.name = getInputValueById('#name');
   } catch(e){
    setTextvalue('.text-error',e);
    throw e;
   }
   employeePayrollData.profilePic= getSelectedValue('[name=profilePic]').pop();
   employeePayrollData.gender= getSelectedValue('[name=gender]').pop();
   employeePayrollData.department= getSelectedValue('[name= department]');
   employeePayrollData.salary= getSelectedValue('[name=salary]');
   employeePayrollData.note= getSelectedValue('[name=note]');
   let date = getInputValueById('#day')+""+getInputValueById('#month')+getInputValueById('#year');
   employeePayrollData.date = Date.parse(date);
   alert(employeePayrollData.toString());
   return employeePayrollData;

}
const getSelectedValue=(propertyValue) =>{
    let allItems = document.querySelector(propertyValue);
    let setItems =[];
    allItems.forEach(element => {
        if(element.checked) setItems.push(element.value);
        
    });
    return setItems;
}
const getInputValueById =(id) =>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue =(id) =>{
    let value = document.getElementById(id).value;
    return value;
}