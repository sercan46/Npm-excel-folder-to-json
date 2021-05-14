The purpose of the package is to return the data in excel to the user in the form of json.
To Install the Package : npm i excel-folder-to-json
To use the package, you need to call the function named excelFoldertoJson.
This function expects 2 variables from the user.
One of these variables is the folder file and the other is the name of the page on the bottom right that you want to use in excel.

Sample usage;

import  excelFoldertoJson from 'excel-folder-to-json'

  excelData=[];
  onFileChange(e){
    excelFoldertoJson(e,'Sheet1').then(resp=>{
     this.excelData=resp
   });

The variable e here is the event we get from the input type folder, and Sheet1 is the information that we want to use the number one page.

As a result, each row is sent to the array returned as an object.