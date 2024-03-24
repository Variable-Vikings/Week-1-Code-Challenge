// define a function calculateNetSalary that calculates the salary
function calaculateNetSalary(salary,benefits){
    //Parameters for salaries less than 24000
    if(salary <20000){
        let grossSalary = salary + benefits;
        let nhifContribution = 750;
        let nssfContribution = 0.06*grossSalary;
        let taxableIncome = grossSalary-nhifContribution - nssfContribution;
        let paye = taxableIncome*0.1;
        let netSalary= grossSalary-nhifContribution-nssfContribution-paye;
        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${paye}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
        console.log(`Net Salary:Ksh${netSalary}`)

    }
    // Parameters for salaries between 24001 and 32333
    if (salary >= 24001 && salary <= 32333){

        let grossSalary = salary + benefits;
        let nhifContribution = 850;
        let nssfContribution = 0.06*grossSalary;
        let taxableIncome = grossSalary-nhifContribution - nssfContribution;
        let paye = taxableIncome*0.25; 
        let netSalary=grossSalary-nhifContribution-nssfContribution-paye;

        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${paye}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
        console.log(`Net Salary: Ksh${netSalary}`)
    }
    // Parameters for salaries above 32334

    if(salary >= 32334 ){
        let grossSalary = salary + benefits;
        let nhifContribution = 1700;
        let nssfContribution = 0.06*grossSalary;
        let taxableIncome = grossSalary-nhifContribution-nssfContribution;
        let paye = taxableIncome*0.3;
        let netSalary=grossSalary-nhifContribution-nssfContribution-paye;
        
        console.log(`Gross Salary: Kshs${grossSalary}.`);
        console.log(`Taxable income: Kshs${taxableIncome}.`)
        console.log(`Paye: Kshs${paye}`);
        console.log(`Nhif Contribution: Kshs${nhifContribution}.`);
        console.log(`Net Salary;Ksh${netSalary}`)

    }
    
      
        
    }
 