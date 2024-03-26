// define a function calculateNetSalary that calculates the salary
function generateNetSalary(salary,benefits){
    // define a function nhif that 
    function nhif(grossSalary) {
        let nhif = 0;
        if (grossSalary <= 5999) {
            nhif = 150;
        } else if (grossSalary<= 7999) {
            nhif = 300;
        } else if (grossSalary <= 11999) {
            nhif = 400;
        } else if (grossSalary <= 14999) {
            nhif = 500;
        } else if (grossSalary <= 19999) {
            nhif = 600;
        } else if (grossSalary <= 24999) {
            nhif = 750;
        } else if (grossSalary <= 29999) {
            nhif = 850;
        } else if (grossSalary <= 34999) {
            nhif = 900;
        } else if (grossSalary <= 39999) {
            nhif = 950;
        } else if (grossSalary <= 44999) {
            nhif = 1000;
        } else if (grossSalary <= 49999) {
            nhif = 1100;
        } else if (grossSalary <= 59999) {
            nhif = 1200;
        } else if (grossSalary <= 69999) {
            nhif = 1300;
        } else if (grossSalary <= 79999) {
            nhif = 1400;
        } else if (grossSalary <= 89999) {
            nhif = 1500;
        } else if (grossSalary <= 99999) {
            nhif = 1600;
        } else {
            nhif = 1700;
        }
        return nhif;
    } 
    //Parameters for salaries less than 24000

    if(salary <24000){
        let grossSalary = salary + benefits;
        let nhifContribution = nhif(grossSalary);
        let nssfContribution = 0.06*salary;
        let taxableIncome = grossSalary;
        let payee = taxableIncome*0.1;
        let netSalary= grossSalary-nhifContribution-nssfContribution-payee;
        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Payee: Kshs${payee}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
        console.log(`NSSF Contribution${nssfContribution}`)
        console.log(`Net Salary:Ksh${netSalary}`)

    }
    // Parameters for salaries between 24001 and 32333
    if (salary >= 24001 && salary <= 32333){

        let grossSalary = salary + benefits;
        let nhifContribution = nhif(grossSalary);
        let nssfContribution = 0.06*salaryalary;
        let taxableIncome = grossSalary;
        let payee = taxableIncome*0.25; 
        let netSalary=grossSalary-nhifContribution-nssfContribution-payee;

        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Payee: Kshs${payee}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
        console.log(`NSSF Contribution${nssfContribution}`)
        console.log(`Net Salary: Ksh${netSalary}`)
    }
    // Parameters for salaries above 32334

    if(salary >= 32334&&salary<=500000 ){
        let grossSalary = salary + benefits;
        let nhifContribution = nhif(grossSalary);
        let nssfContribution = 0.06*salary;
        let taxableIncome = grossSalary;
        let payee = taxableIncome*0.3;
        let netSalary=grossSalary-nhifContribution-nssfContribution-payee;
        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${payee}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
        console.log(`NSSF contribution${nssfContribution}`)
        console.log(`Net Salary;Ksh${netSalary}`)

    }
    //Parameter for salaries above 500000and less than 800000
    if(salary>=500001&&salary<=800000){
        let grossSalary = salary + benefits;
        let nhifContribution = nhif(grossSalary);
        let nssfContribution = 0.06*salary;
        let taxableIncome = grossSalary;
        let payee = taxableIncome*0.325;
        let netSalary=grossSalary-nhifContribution-nssfContribution-payee;
        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${payee}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
        console.log(`NSSF contribution${nssfContribution}`)
        console.log(`Net Salary;Ksh${netSalary}`)

    }
    //Parameter for salaries above 800000
      if (salary>800000){
        let grossSalary = salary + benefits;
        let nhifContribution = nhif(grossSalary);
        let nssfContribution = 0.06*salary;
        let taxableIncome = grossSalary;
        let payee = taxableIncome*0.35;
        let netSalary=grossSalary-nhifContribution-nssfContribution-payee;
        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${payee}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
        console.log(`NSSF contribution${nssfContribution}`)
        console.log(`Net Salary;Ksh${netSalary}`)

      }
        
    }
 