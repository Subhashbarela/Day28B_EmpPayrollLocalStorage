window.addEventListener('DOMContentLoaded',(event) =>{
    const name =document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length ==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.Value;
            textError.textContent="";
        }catch(e){
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
