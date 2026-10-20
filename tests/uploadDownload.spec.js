const Exceljs = require('exceljs')
 const {test,expect} = require('@playwright/test')

async function writeexcelTest(searchText,replaceText,change,filePath) {
   
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet("Sheet1");
    const output = await readExcel(worksheet,searchText);
    const cell = worksheet.getCell(output.row,output.column+change.columnchange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);
    

}


async function readExcel(worksheet,searchText){
     let output = {row:-1,column:-1};
       worksheet.eachRow((row, rownumber) => {
        row.eachCell((cell, cellnumber) => {
            if(cell.value===searchText){
                output.row=rownumber;
                output.column=cellnumber;

            }
        })

    })
    return output;
}



test('upload download validation',async({page})=>{

     const textSearch = 'Mango';
     const updateValue = '350';
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const download = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const dl = await download;
    const filePath = 'C:/Users/DELL/Downloads/download.xlsx';
    await dl.saveAs(filePath);
    await writeexcelTest(textSearch,updateValue,{rowchange:0,columnchange:2},filePath);
    await page.locator("//input[@id='fileinput']").click();
    await page.locator("//input[@id='fileinput']").setInputFiles(filePath);
    const desiredRow = await page.getByRole('row').filter({has: page.getByText(textSearch)});
    await expect(desiredRow.locator("//div[@id='cell-4-undefined']")).toContainText(updateValue);

})